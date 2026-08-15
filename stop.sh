#!/usr/bin/env bash
#
# Stop the dev server started by ./run.sh (`npm install && npm run dev` -> Vite).
# vite.config.ts does not override the port, so Vite uses its default: 5173.
#
# Usage:
#   ./stop.sh [-h|--help]
#
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

for arg in "$@"; do
  case "$arg" in
    -h|--help)
      echo "Usage: ./stop.sh"
      echo "  Stops the SP7-Nhancio2.0 Vite dev server (default port 5173) started by ./run.sh."
      exit 0
      ;;
    *)
      echo "Unknown option: $arg (use --help)" >&2
      exit 1
      ;;
  esac
done

PORT=5173

is_our_process() {
  local pid="$1"
  local cmd
  cmd="$(ps -ww -p "$pid" -o command= 2>/dev/null || true)"
  [[ -z "$cmd" ]] && return 1
  [[ "$cmd" == *"$ROOT"* ]] && return 0
  [[ "$cmd" == *"SP7-Nhancio2.0"* ]] && return 0
  # vite may show as `node .../vite` without the full repo path on some setups
  [[ "$cmd" == *"vite"* ]] && return 0
  return 1
}

kill_pid_gracefully() {
  local pid="$1"
  local label="$2"
  if ! kill -0 "$pid" 2>/dev/null; then
    return 0
  fi
  echo "  stopping $label (pid $pid)"
  kill -TERM "$pid" 2>/dev/null || true
}

wait_pid_gone() {
  local pid="$1"
  local i
  for i in 1 2 3 4 5 6 7 8 9 10; do
    kill -0 "$pid" 2>/dev/null || return 0
    sleep 0.3
  done
  echo "  pid $pid still alive, sending SIGKILL"
  kill -KILL "$pid" 2>/dev/null || true
}

kill_port() {
  local port="$1"
  local label="$2"
  if ! command -v lsof >/dev/null 2>&1; then
    return 0
  fi
  local pids
  pids="$(lsof -ti ":$port" 2>/dev/null || true)"
  [ -z "$pids" ] && return 0
  local killed=0
  for pid in $pids; do
    if is_our_process "$pid"; then
      kill_pid_gracefully "$pid" "$label :$port"
      wait_pid_gone "$pid"
      killed=1
    fi
  done
  if [ "$killed" = 0 ] && [ -n "$pids" ]; then
    echo "  port $port in use by non-SP7-Nhancio2.0 process(es); left running"
  fi
}

echo "================================================="
echo "Stopping SP7-Nhancio2.0 dev server"
echo "================================================="

echo "Vite dev server (port $PORT)..."
kill_port "$PORT" "vite"

# Second pass — catch a slow-to-exit child
sleep 0.5
kill_port "$PORT" "vite (cleanup)"

echo ""
echo "Done. SP7-Nhancio2.0 dev server should be stopped."
if command -v lsof >/dev/null 2>&1 && lsof -ti ":$PORT" >/dev/null 2>&1; then
  echo "Note: port $PORT still in use (may be another app)."
fi
