# Foretell automatic deployment

Production deployments are built in GitHub Actions from commits pushed to
`main`. GitHub Actions publishes an amd64 image to the private GHCR package
`ghcr.io/gadielkalleb/postiz-app`, tagged with the full commit SHA, then asks a
restricted SSH key on the VPS to pull that tag and recreate only the `postiz`
Compose service.

The workflow expects a repository Actions secret named `GHCR_TOKEN`, a classic
GitHub token with `read:packages` and `write:packages`. It also expects a
`production` environment secret named `VPS_SSH_KEY` and environment variables
`VPS_HOST`, `VPS_PORT`, `VPS_USER`, and `VPS_HOST_KEY`. Keep the GHCR token
private; the same token is used briefly over SSH when the VPS authenticates to
GHCR.

The deploy key must be installed in `authorized_keys` with a forced command to
`/home/kaleb/foretell/deploy-from-gha.sh` and without port, X11, agent, or PTY
forwarding. The script validates a `sha-<40 lowercase hex characters>` image
tag, logs into GHCR from stdin, runs `docker compose pull postiz`, and then
recreates `postiz` with `--no-build --no-deps`. It must not recreate Postgres,
Redis, Temporal, or the Cloudflare Tunnel.

Do not add an OCI source label to the image or use `GITHUB_TOKEN` to publish it:
the source repository is public, while the image is intended to remain private.
