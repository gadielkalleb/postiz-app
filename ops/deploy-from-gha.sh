#!/usr/bin/env bash
set -Eeuo pipefail

readonly EXPECTED_COMMAND_RE='^foretell-deploy sha-[a-f0-9]{40}$'
readonly COMPOSE_DIR='/home/kaleb/foretell/app'
readonly GHCR_USER_EXPECTED='gadielkalleb'

if [[ "${SSH_ORIGINAL_COMMAND:-}" =~ $EXPECTED_COMMAND_RE ]]; then
  IMAGE_TAG="${SSH_ORIGINAL_COMMAND#foretell-deploy }"
else
  echo 'Rejected SSH command.' >&2
  exit 64
fi

IFS= read -r GHCR_USER || { echo 'Missing GHCR username.' >&2; exit 65; }
IFS= read -r GHCR_TOKEN || { echo 'Missing GHCR token.' >&2; exit 65; }
if [[ "$GHCR_USER" != "$GHCR_USER_EXPECTED" || -z "$GHCR_TOKEN" ]]; then
  echo 'Invalid GHCR credentials.' >&2
  exit 65
fi
unset SSH_ORIGINAL_COMMAND

if [[ ! -d "$COMPOSE_DIR" ]]; then
  echo 'Production Compose directory is missing.' >&2
  exit 66
fi
cd "$COMPOSE_DIR"

export IMAGE_TAG
export DOCKER_CONFIG
DOCKER_CONFIG="$(mktemp -d /tmp/foretell-docker-auth.XXXXXX)"
trap 'rm -rf "$DOCKER_CONFIG"' EXIT

printf '%s' "$GHCR_TOKEN" |
  docker --config "$DOCKER_CONFIG" login ghcr.io \
    --username "$GHCR_USER" \
    --password-stdin
unset GHCR_TOKEN

compose=(docker compose --env-file .env.production -f docker-compose.yaml -f docker-compose.production.yaml)
"${compose[@]}" pull postiz
"${compose[@]}" up -d --no-build --no-deps --force-recreate postiz

echo "Deployed ${IMAGE_TAG}; services outside postiz were not recreated."
