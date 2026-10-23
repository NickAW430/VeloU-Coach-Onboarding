#!/usr/bin/env python3
"""Changes made to the copy of the web app that is published on velou.training (the files in the repo stay as they are).

1. In the coach dashboard, clicking an athlete's name opens that athlete's web app (the page with ?app=1) instead of the
   coach's athlete page. The "unread" chip beside the name keeps opening the coach's own message view.
2. In the web app, a coach gets a small "All athletes" button back to the dashboard. An athlete never sees it.
Each edit must match exactly once, so a change to the app that moves these lines stops the build instead of quietly dropping the edit."""
import os, sys

DIST = sys.argv[1]


def patch(path, edits):
    p = os.path.join(DIST, path)
    s = open(p, encoding="utf-8").read()
    for old, new in edits:
        n = s.count(old)
        assert n == 1, "%s: expected one match, found %d: %s" % (path, n, old[:60])
        s = s.replace(old, new)
    open(p, "w", encoding="utf-8").write(s)


patch("athlete-management/index.html", [
    ("encodeURIComponent(a.first_name + ' ' + a.last_name);\n      who.append(nameLink);",
     "encodeURIComponent(a.first_name + ' ' + a.last_name) + '&app=1';\n      who.append(nameLink);"),
    ("m.href = nameLink.href + '&tab=msg';",
     "m.href = nameLink.href.replace('&app=1', '') + '&tab=msg';"),
])

BACK = """<script>
/* velou.training: a coach looking at an athlete's web app gets a way back to the dashboard; an athlete does not */
(function () {
  if (new URLSearchParams(location.search).get('app') !== '1') return;
  fetch('/api/v1/me', { credentials: 'same-origin', headers: { Accept: 'application/json' } })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (me) {
      if (!me || me.role === 'athlete') return;
      var a = document.createElement('a');
      a.href = '/athlete-management/'; a.textContent = '\\u2190 All athletes';
      a.style.cssText = "position:fixed;top:8px;left:8px;z-index:2147483000;padding:6px 10px;font:600 12px 'Barlow',sans-serif;color:#fff;" +
        "background:rgba(0,0,0,.78);border:1px solid rgba(255,255,255,.35);text-decoration:none";
      document.body.appendChild(a);
    }).catch(function () {});
})();
</script>
"""
patch("athlete-management/athlete/index.html", [("</script>\n</body>\n</html>", "</script>\n" + BACK + "</body>\n</html>")])
