#!/usr/bin/env python3
"""Turn raw claude.ai artifact HTML (as saved by the Artifact tool's `read` action)
into this repo's three pages: index.html, strength.html, throwing.html.

Usage: sync_from_artifacts.py <homepage.html> <strength.html> <throwing.html>

Strips the claude.ai artifact-viewer wrapper shell if present, and rewrites the
cross-page links (homepage tiles -> strength.html/throwing.html, subpage logo
-> index.html) so the site works standalone on GitHub Pages.
"""
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent

OUTER_OPEN_PREFIX = '<!doctype html><html><head>'
OUTER_CLOSE_MARKER = '</body></html>'


def strip_outer_wrapper(text: str) -> str:
    first_nl = text.find('\n')
    if first_nl == -1 or not text[:first_nl].startswith(OUTER_OPEN_PREFIX):
        return text  # already a plain document, nothing to strip
    rest = text[first_nl + 1:]
    idx = rest.rfind(OUTER_CLOSE_MARKER)
    if idx == -1:
        return text
    return rest[:idx].rstrip('\n') + '\n'


def fix_homepage_links(html: str) -> str:
    def repl(match):
        block = match.group(0)
        href_pat = re.compile(r'href="[^"]*"')
        if 'VeloU Strength' in block:
            return href_pat.sub('href="strength.html"', block, count=1)
        if 'VeloU Throwing' in block:
            return href_pat.sub('href="throwing.html"', block, count=1)
        return block

    tile_pat = re.compile(r'<a class="tile"[^>]*>.*?</a>', re.S)
    return tile_pat.sub(repl, html)


def fix_subpage_home_links(html: str) -> str:
    # Covers both the logo anchor (class="brand") and the separate "Home"
    # nav link -- both point at the claude.ai artifact URL in the raw export.
    return re.sub(
        r'href="https://claude\.ai/[^"]*"',
        'href="index.html"',
        html,
    )


def ensure_noindex(html: str) -> str:
    if 'name="robots"' in html:
        return html
    marker = '<meta name="viewport" content="width=device-width, initial-scale=1">'
    return html.replace(
        marker,
        marker + '\n<meta name="robots" content="noindex, nofollow">',
        1,
    )


def process(src_path: Path, dest_name: str, is_homepage: bool) -> None:
    text = src_path.read_text(encoding='utf-8')
    text = strip_outer_wrapper(text)
    if is_homepage:
        text = fix_homepage_links(text)
    else:
        text = fix_subpage_home_links(text)
    text = ensure_noindex(text)
    dest = REPO_ROOT / dest_name
    dest.write_text(text, encoding='utf-8')
    print(f"wrote {dest} ({len(text):,} bytes)")


def main() -> None:
    if len(sys.argv) != 4:
        print(__doc__)
        sys.exit(1)
    homepage_src, strength_src, throwing_src = (Path(p) for p in sys.argv[1:4])
    process(homepage_src, 'index.html', is_homepage=True)
    process(strength_src, 'strength.html', is_homepage=False)
    process(throwing_src, 'throwing.html', is_homepage=False)


if __name__ == '__main__':
    main()
