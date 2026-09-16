#!/usr/bin/env bash
# Rebuild and publish the coach onboarding site from freshly-fetched artifact
# HTML, then push to GitHub Pages.
#
# Usage: update-site.sh <homepage.html> <strength.html> <throwing.html>
#
# The three arguments are local HTML files already fetched from claude.ai
# (Claude fetches these with the Artifact tool's `read` action, since that
# step needs an authenticated Claude session and can't be scripted here).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

if [ "$#" -ne 3 ]; then
  echo "Usage: $0 <homepage.html> <strength.html> <throwing.html>" >&2
  exit 1
fi

python3 "$SCRIPT_DIR/sync_from_artifacts.py" "$1" "$2" "$3"

cd "$REPO_ROOT"
git add index.html strength.html throwing.html

if git diff --cached --quiet; then
  echo "No changes since last publish — nothing to commit."
  exit 0
fi

git commit -m "Update site from latest artifacts

Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>"
git push origin main

echo "Pushed. GitHub Pages will redeploy in ~1 minute:"
echo "  https://nickaw430.github.io/VeloU-Coach-Onboarding/"
