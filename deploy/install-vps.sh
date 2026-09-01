#!/usr/bin/env bash
set -Eeuo pipefail

APP_DIR="${APP_DIR:-/opt/2bservice/current}"
APP_USER="${APP_USER:-2bservice}"
ENV_SOURCE="${ENV_SOURCE:-$APP_DIR/.env.production.local}"
ENV_DIR="/etc/2bservice"
STATE_DIR="/var/lib/2bservice"

if [[ $EUID -ne 0 ]]; then
  echo "Run as root: sudo bash deploy/install-vps.sh" >&2
  exit 1
fi

if [[ ! -f "$APP_DIR/package.json" || ! -f "$ENV_SOURCE" ]]; then
  echo "Project or protected env file is missing in $APP_DIR" >&2
  exit 1
fi

id "$APP_USER" >/dev/null 2>&1 || useradd --system --create-home --shell /usr/sbin/nologin "$APP_USER"
install -d -m 0755 -o "$APP_USER" -g "$APP_USER" "$APP_DIR"
install -d -m 0750 -o "$APP_USER" -g "$APP_USER" "$STATE_DIR"
install -d -m 0750 -o root -g "$APP_USER" "$ENV_DIR"
install -m 0600 -o root -g "$APP_USER" "$ENV_SOURCE" "$ENV_DIR/2bservice.env"

cd "$APP_DIR"
corepack enable
pnpm install --frozen-lockfile
pnpm build
cp -a public .next/standalone/
mkdir -p .next/standalone/.next
cp -a .next/static .next/standalone/.next/
chown -R "$APP_USER:$APP_USER" "$APP_DIR/.next"

install -m 0644 deploy/2bservice-site.service /etc/systemd/system/2bservice-site.service
install -m 0644 deploy/2bservice-telegram.service /etc/systemd/system/2bservice-telegram.service
systemctl daemon-reload
systemctl enable --now 2bservice-site.service 2bservice-telegram.service
systemctl --no-pager --full status 2bservice-site.service 2bservice-telegram.service
