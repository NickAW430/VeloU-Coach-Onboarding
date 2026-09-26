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


ONBOARDING_TILE = '''  <a class="tile" href="onboarding/">
    <span class="tile-eyebrow">New Coaches</span>
    <h2>Coach Onboarding</h2>
    <p>Eleven modules, from purpose and standards to the capstone case. Start here before your first day on the floor.</p>
    <span class="tile-cta">Open Coach Onboarding →</span>
  </a>
'''


MAIN_LOGO_TAG = '<img class="logo" src="assets/velou-logo.webp" alt="VeloU New York and VeloU Texas" width="2000" height="881">'


# The logo is white on transparent: a dark plate keeps it visible in light mode; in dark mode it sits directly on the page.
MAIN_LOGO_CSS = (
    ".logo { width: min(560px, 100%); height: auto; margin-bottom: 22px; padding: 26px 34px; background: #0d0d0d; border-radius: 14px; }\n"
    "@media (prefers-color-scheme: dark) { :root:not([data-theme=\"light\"]) .logo { background: transparent; padding: 0; } }\n"
    ":root[data-theme=\"dark\"] .logo { background: transparent; padding: 0; }"
)


def ensure_main_logo(html: str) -> str:
    # The artifact embeds the old logo as base64; the home page uses the two-state logo instead.
    if 'assets/velou-logo.webp' in html:
        return html
    new = re.sub(r'<img class="logo" src="data:image/png;base64,[^"]*"[^>]*>', MAIN_LOGO_TAG, html, count=1)
    if new == html:
        print("WARNING: home page logo <img> not found; logo not swapped")
        return html
    return new.replace(
        ".logo { height: 64px; width: auto; margin-bottom: 22px; }",
        MAIN_LOGO_CSS,
    )


def ensure_wordmark(html: str) -> str:
    # Strength/Throwing top bars use the VeloU wordmark only (transparent PNG), not the embedded logo.
    new = re.sub(
        r'(<a class="brand"[^>]*>)<img src="data:image/[a-z]+;base64,[^"]*"[^>]*>',
        r'\1<img src="assets/velou-wordmark.png" alt="VeloU" width="110" height="34">',
        html,
        count=1,
    )
    if new == html and 'assets/velou-wordmark.png' not in html:
        print("WARNING: top bar logo <img> not found; wordmark not swapped")
    return new


def ensure_three_up_tiles(html: str) -> str:
    # The artifact ships a two-column tile grid; we run three equal tiles in one row.
    html = html.replace(
        ".tiles { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; max-width: 820px; width: 100%; }",
        ".tiles { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; max-width: 1120px; width: 100%; }",
    )
    html = html.replace(
        "@media (max-width: 640px) {\n  .tiles { grid-template-columns: 1fr; }",
        "@media (max-width: 860px) {\n  .tiles { grid-template-columns: 1fr; }",
    )
    return html


def ensure_onboarding_tile(html: str) -> str:
    # The homepage is regenerated from the artifact each sync, which would
    # otherwise drop the hand-added onboarding tile.
    html = ensure_three_up_tiles(html)
    if 'href="onboarding/"' in html:
        return html
    marker = '</div>\n\n<footer>'
    idx = html.rfind(marker)
    if idx == -1:
        print("WARNING: could not find tiles container end; onboarding tile not added")
        return html
    return html[:idx] + ONBOARDING_TILE + html[idx:]


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
        text = ensure_onboarding_tile(text)
        text = ensure_main_logo(text)
    else:
        text = fix_subpage_home_links(text)
        text = ensure_wordmark(text)
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
