import { spawnSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const repository = process.env.GITHUB_REPOSITORY || "chenyuxiaojin/liang-guanhao-personal-site";
const [owner, name] = repository.split("/");
const basePath = name === `${owner}.github.io` ? "" : `/${name}`;
const result = spawnSync(process.execPath, [
  fileURLToPath(new URL("../node_modules/next/dist/bin/next", import.meta.url)),
  "build", "--webpack",
], {
  stdio: "inherit",
  env: {
    ...process.env,
    GITHUB_PAGES: "true",
    NEXT_TELEMETRY_DISABLED: "1",
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: `https://${owner}.github.io${basePath}/`,
  },
});
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
writeFileSync(new URL("../out/.nojekyll", import.meta.url), "");
