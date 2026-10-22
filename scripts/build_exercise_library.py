#!/usr/bin/env python3
"""Builds athlete-management/athlete/exercise-library.json from the Athletes Warehouse exercise library export (CSV).

The athlete's view uses it for three things: the video behind each exercise, what the athlete has to enter for it
(weight, time, or just a check), and the searchable list when an athlete swaps an exercise.

Usage: python3 scripts/build_exercise_library.py "<path to the exercise library CSV>"

Only what the app needs is kept (no instructions, no creator names, no internal ids). Video links are stored short:
  y:<youtube id>   v:<vimeo id>   e:<path on the Everfit video bucket>   f:<any other full link>
"""
import csv, json, re, sys, os, datetime

SRC = sys.argv[1] if len(sys.argv) > 1 else None
if not SRC or not os.path.exists(SRC):
    sys.exit(__doc__)
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'athlete-management', 'athlete', 'exercise-library.json')
EVERFIT = 'https://everfit-exercise-library-prod.s3-us-west-1.amazonaws.com/'

def video(u):
    u = (u or '').strip()
    if not u:
        return ''
    m = re.search(r'youtu\.be/([A-Za-z0-9_-]{11})', u) or re.search(r'youtube\.com/watch\?v=([A-Za-z0-9_-]{11})', u) or re.search(r'youtube\.com/(?:embed|shorts)/([A-Za-z0-9_-]{11})', u)
    if m:
        return 'y:' + m.group(1)
    m = re.search(r'vimeo\.com/(\d+)', u)
    if m:
        return 'v:' + m.group(1)
    if u.startswith(EVERFIT):
        return 'e:' + u[len(EVERFIT):]
    return 'f:' + u

TRACK = {'Weight': 'w', 'Reps': 'r', 'Time': 't', 'Distance (short)': 'd', 'Distance (long)': 'd', 'Speed': 's', 'RPE': 'p', 'Cadence': 'c', '%1RM': '%', 'Calories': 'k', '%HR': 'h'}

def tracking(s):
    out = ''
    for t in (x.strip() for x in (s or '').split(',')):
        c = TRACK.get(t)
        if c and c not in out:
            out += c
    return out

strings, sidx = [''], {'': 0}
def S(x):
    x = (x or '').strip()
    if x not in sidx:
        sidx[x] = len(strings)
        strings.append(x)
    return sidx[x]

rows, seen = [], set()
with open(SRC, encoding='utf-8-sig', newline='') as f:
    for r in csv.DictReader(f):
        name = re.sub(r'\s+', ' ', (r.get('Exercise name') or '')).strip()
        if not name:
            continue
        v = video(r.get('Video URL'))
        row = [name, v, tracking(r.get('Tracking fields')), S(r.get('Category')), S(r.get('Modality')), S(r.get('Body part')),
               S(r.get('Muscle groups')), S(r.get('Movement patterns')), S(r.get('Tags'))]
        key = (name.lower(), v, row[2], row[3])
        if key in seen:
            continue
        seen.add(key)
        rows.append(row)

rows.sort(key=lambda x: (x[0].lower(), x[1] == ''))
data = {'v': 1, 'built': datetime.date.today().isoformat(), 'source': 'Athletes Warehouse exercise library export', 'cols': ['name', 'video', 'track', 'cat', 'mod', 'body', 'muscles', 'pattern', 'tags'], 's': strings, 'e': rows}
with open(OUT, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
withv = sum(1 for r in rows if r[1])
print('exercises', len(rows), 'with a video', withv, 'bytes', os.path.getsize(OUT))
