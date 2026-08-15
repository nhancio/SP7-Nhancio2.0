#!/usr/bin/env bash
#
# Canonical deploy script for SP7-Nhancio2.0 (folds in the old git.sh/gitpush.sh).
#
# Owner's policy: every deploy pushes to Git first. If the hosting platform
# already has CI/CD wired to auto-deploy from that push, we stop there — no
# redundant manual deploy. If it doesn't, we deploy manually from local code.
#
# Step 1 (push):
#   - make sure 'origin' points at the right GitHub repo (add it if missing,
#     fix it if it points somewhere else)
#   - git add -A, commit (arg or default message), push the current branch
#
# Step 2 (deploy):
#   - Netlify site "nhancio2" is confirmed git-linked (continuous deployment
#     wired to this repo via the Netlify API), so the push above already
#     triggers a Netlify build+deploy. We do NOT run a redundant manual
#     deploy by default.
#   - vercel.json also exists in this repo, but there is no local
#     .vercel/project.json link and no CI workflow calling Vercel, so we
#     can't confirm Vercel is actually wired up here. We print that
#     ambiguity rather than guessing and deploying to the wrong platform.
#   - --force-manual is provided as an escape hatch, but the old deploy.sh
#     never contained a real Netlify/Vercel CLI deploy command (it only ever
#     ran "npm install && npm run build"), so none is invented here — we say
#     plainly what's missing instead.
#
# Usage:
#   ./deploy.sh ["commit message"] [--force-manual] [-h|--help]
#
set -euo pipefail
# Select the GitHub account for this repository before every push.
# Override GITHUB_ACCOUNT when a repository is intentionally owned by a different account.
GITHUB_ACCOUNT="${GITHUB_ACCOUNT:-didigamnithin}"

ensure_github_account() {
  command -v gh >/dev/null 2>&1 || {
    echo "GitHub CLI (gh) is required to push as $GITHUB_ACCOUNT." >&2
    echo "Install gh and authenticate with: gh auth login --hostname github.com" >&2
    return 1
  }
  gh auth token --hostname github.com --user "$GITHUB_ACCOUNT" >/dev/null 2>&1 || {
    echo "GitHub CLI is not authenticated as $GITHUB_ACCOUNT." >&2
    echo "Authenticate that account first, then rerun this deploy." >&2
    return 1
  }
  gh auth switch --hostname github.com --user "$GITHUB_ACCOUNT" >/dev/null || {
    echo "Could not switch GitHub CLI to $GITHUB_ACCOUNT." >&2
    return 1
  }
  echo "Using GitHub account: $GITHUB_ACCOUNT"
}

push_with_github_account() {
  ensure_github_account
  git push "$@"
}


ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

REMOTE_NAME="origin"
REMOTE_URL="https://github.com/nhancio/SP7-Nhancio2.0.git"

usage() {
  cat <<'EOF'
Usage: ./deploy.sh ["commit message"] [--force-manual] [-h|--help]

  Step 1 (push):
    git add -A, commit (uses "commit message" if given, else a default),
    then push the current branch to origin
    (https://github.com/nhancio/SP7-Nhancio2.0.git). Adds/fixes the 'origin'
    remote first if it's missing or points somewhere unexpected.

  Step 2 (deploy):
    Netlify site "nhancio2" is git-linked to this repo, so the push above
    already triggers a Netlify build+deploy - nothing more to do there.
    vercel.json also exists but isn't confirmed wired up (no local
    .vercel/project.json), so it is reported, not auto-deployed to.

  --force-manual   Attempt a manual deploy even though CI/CD already covers
                    it. There is no real Netlify/Vercel CLI deploy command in
                    this repo's history to fall back on, so this just prints
                    what you'd need to set up (it will not invent a command).
  -h, --help       Show this help and exit.
EOF
}

COMMIT_MESSAGE=""
FORCE_MANUAL=0

for arg in "$@"; do
  case "$arg" in
    -h|--help)
      usage
      exit 0
      ;;
    --force-manual)
      FORCE_MANUAL=1
      ;;
    *)
      if [ -z "$COMMIT_MESSAGE" ]; then
        COMMIT_MESSAGE="$arg"
      fi
      ;;
  esac
done

if [ -z "$COMMIT_MESSAGE" ]; then
  COMMIT_MESSAGE="chore: automated deploy commit $(date '+%Y-%m-%d %H:%M:%S')"
fi

echo "================================================="
echo " Step 1/2 - Push to Git"
echo "================================================="

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "error: $ROOT is not a git repository yet." >&2
  echo "  Run 'git init' here, then re-run this script so it can configure" >&2
  echo "  the '$REMOTE_NAME' remote ($REMOTE_URL) and push." >&2
  exit 1
fi

# Ensure the remote exists and points at the right place (add or fix it).
CURRENT_REMOTE="$(git remote get-url "$REMOTE_NAME" 2>/dev/null || true)"
if [ -z "$CURRENT_REMOTE" ]; then
  echo "No '$REMOTE_NAME' remote configured - adding it ($REMOTE_URL)."
  git remote add "$REMOTE_NAME" "$REMOTE_URL"
elif [ "$CURRENT_REMOTE" != "$REMOTE_URL" ]; then
  echo "'$REMOTE_NAME' points at '$CURRENT_REMOTE', not the expected '$REMOTE_URL' - fixing it."
  git remote set-url "$REMOTE_NAME" "$REMOTE_URL"
else
  echo "Remote '$REMOTE_NAME' -> $CURRENT_REMOTE (OK)"
fi

# Nested git repos (embedded repos in subfolders) get staged by git as
# gitlinks, not their file contents - flag them instead of silently treating
# them like ordinary directories.
NESTED_REPOS="$(find . -mindepth 2 -maxdepth 6 -type d -name ".git" \
  -not -path "./node_modules/*" 2>/dev/null | sed 's#/\.git$##' || true)"
if [ -n "$NESTED_REPOS" ]; then
  echo "Note: nested git repositories detected under:"
  echo "$NESTED_REPOS" | sed 's/^/  - /'
  echo "  These will be staged as gitlinks (submodule references), not their"
  echo "  file contents. If that's not what you want, set them up as proper"
  echo "  submodules or remove their .git folders before continuing."
fi

BRANCH="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || true)"
if [ -z "$BRANCH" ] || [ "$BRANCH" = "HEAD" ]; then
  BRANCH="main"
  echo "Could not determine current branch (detached HEAD?) - defaulting to '$BRANCH'."
fi

git add -A

if git diff --cached --quiet; then
  echo "Nothing to commit - working tree already matches last commit."
else
  git commit -m "$COMMIT_MESSAGE"
fi

echo "Pushing '$BRANCH' to '$REMOTE_NAME'..."
push_with_github_account -u "$REMOTE_NAME" "$BRANCH"

echo ""
echo "================================================="
echo " Step 2/2 - Deploy"
echo "================================================="

echo "Running local build (npm install && npm run build) as a pre-flight check..."
npm install && npm run build

echo ""
echo "Netlify (nhancio2) is git-linked - will auto-deploy from this push."
echo "Vercel config also exists (vercel.json) but no local Vercel link was"
echo "found; if Vercel is the intended target, this needs \`vercel link\` and"
echo "manual verification - not automated here since the intended platform"
echo "is unclear."
echo ""
echo "No manual deploy will be run by default (CI/CD already covers Netlify)."

if [ "$FORCE_MANUAL" = "1" ]; then
  echo ""
  echo "--force-manual requested, but there is no real Netlify/Vercel CLI"
  echo "deploy command anywhere in this repo's deploy.sh history to fall back"
  echo "on (it has only ever run 'npm install && npm run build') - so none is"
  echo "invented here. To deploy manually yourself:"
  echo "  Netlify: npx netlify-cli deploy --prod --dir=dist   (after 'netlify link')"
  echo "  Vercel:  npx vercel --prod                           (after 'vercel link')"
fi

echo ""
echo "Done."
