import { build } from "esbuild";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));

for (const command of manifest.commands) {
  await build({
    absWorkingDir: root,
    entryPoints: [`src/${command.name}.tsx`],
    outfile: `.sc-build/${command.name}.js`,
    bundle: true,
    platform: "node",
    format: "cjs",
    target: "es2020",
    jsx: "automatic",
    external: ["react", "react-dom", "@raycast/api", "@raycast/utils", "node-fetch"],
    define: { "process.env.NODE_ENV": '"production"', global: "globalThis" },
    logLevel: "info",
  });
}
