#!/usr/bin/env bash
# Creates /etc/2bservice/2bservice.env on first run by asking for each value once.
# On later runs it does nothing if the file already exists, so re-deploying
# never overwrites secrets you already entered.
set -Eeuo pipefail

ENV_DIR="/etc/2bservice"
ENV_FILE="$ENV_DIR/2bservice.env"
APP_USER="${APP_USER:-2bservice}"

if [[ $EUID -ne 0 ]]; then
  echo "Run as root: sudo bash deploy/setup-env.sh" >&2
  exit 1
fi

if [[ -f "$ENV_FILE" ]]; then
  echo "$ENV_FILE already exists, leaving it untouched."
  exit 0
fi

echo "First-time setup: enter the values below once. They will be saved to $ENV_FILE"
echo "(readable only by root and the $APP_USER user), so this won't ask again."
echo

prompt_value() {
  local var_name="$1"
  local prompt_text="$2"
  local is_secret="$3"
  local value=""

  while [[ -z "$value" ]]; do
    if [[ "$is_secret" == "secret" ]]; then
      read -r -s -p "$prompt_text: " value
      echo
    else
      read -r -p "$prompt_text: " value
    fi
    [[ -z "$value" ]] && echo "Value cannot be empty, try again."
  done

  printf '%s=%s\n' "$var_name" "$value"
}

{
  prompt_value "TELEGRAM_BOT_TOKEN" "Telegram bot token (leads)" secret
  prompt_value "TELEGRAM_CHAT_ID" "Telegram chat id (leads)" plain
  prompt_value "NEWS_TELEGRAM_BOT_TOKEN" "Telegram bot token (news worker)" secret
  prompt_value "NEWS_TELEGRAM_CHAT_ID" "Telegram chat id (news worker)" plain
} > "$ENV_FILE.tmp"

id "$APP_USER" >/dev/null 2>&1 || useradd --system --create-home --shell /usr/sbin/nologin "$APP_USER"
install -d -m 0750 -o root -g "$APP_USER" "$ENV_DIR"
install -m 0600 -o root -g "$APP_USER" "$ENV_FILE.tmp" "$ENV_FILE"
rm -f "$ENV_FILE.tmp"

echo
echo "Saved $ENV_FILE (permissions 600, owned by root:$APP_USER)."
