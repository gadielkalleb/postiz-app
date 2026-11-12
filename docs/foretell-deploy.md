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

Install `ops/deploy-from-gha.sh` on the VPS at
`/home/kaleb/foretell/deploy-from-gha.sh`, owned by root and not writable by the
deploy user. The dedicated public key must be installed in `authorized_keys`
with this prefix (replace the key with the generated public key):

```text
command="/home/kaleb/foretell/deploy-from-gha.sh",no-port-forwarding,no-X11-forwarding,no-agent-forwarding,no-pty ssh-ed25519 AAAA...
```

The script accepts only a `sha-<40 lowercase hex characters>` image tag,
receives the GHCR username and token through stdin, stores Docker credentials in
a temporary directory, and runs `docker compose pull postiz` followed by
`docker compose up -d --no-build --no-deps --force-recreate postiz`. It must
not recreate Postgres, Redis, Temporal, or the Cloudflare Tunnel.

Generate a dedicated key pair for GitHub Actions; do not reuse the personal SSH
key used for interactive administration. Pin the VPS host key in the GitHub
environment variable `VPS_HOST_KEY` using the already trusted host-key record,
not an unverified `ssh-keyscan` result.

Do not add an OCI source label to the image or use `GITHUB_TOKEN` to publish it:
the source repository is public, while the image is intended to remain private.
