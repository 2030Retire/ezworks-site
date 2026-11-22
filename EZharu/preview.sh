#!/bin/sh
# ⛔ 미리보기 서버가 out/ 을 잡고 있으면 빌드가 EBUSY 로 죽는다 (2026-11-22 두 번 밟았다).
#   ▶ 끄고 → 빌드 → 다시 켠다. 사람이 순서를 기억하게 두지 않는다.
set -e
cd "$(dirname "$0")"
PORT=8777
powershell -NoProfile -Command "Get-CimInstance Win32_Process -Filter \"Name like 'python%'\" | Where-Object { \$_.CommandLine -like '*http.server*$PORT*' } | ForEach-Object { Stop-Process -Id \$_.ProcessId -Force }" 2>/dev/null || true
sleep 1
npm run build
cd out
nohup python -m http.server $PORT --bind 127.0.0.1 >/dev/null 2>&1 &
sleep 2
echo "미리보기: http://127.0.0.1:$PORT/products/recorder/forms/"
