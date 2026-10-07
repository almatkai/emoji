import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { builtinModules, createRequire } from "node:module";
import test from "node:test";
import { runInNewContext } from "node:vm";

test("distributed bundle loads without extension node_modules", () => {
  const require = createRequire(import.meta.url);
  const exports: Record<string, unknown> = {};
  const module = { exports };
  const hostModules: Record<string, unknown> = {
    react: {},
    "react/jsx-runtime": {},
    "@raycast/api": {
      getPreferenceValues: () => ({ primaryAction: "paste", unicodeVersion: "15.1", shortCodes: false }),
    },
    "@raycast/utils": {},
    "node-fetch": () => { throw new Error("Unexpected fetch during module load"); },
  };
  const code = readFileSync(new URL("../.sc-build/emoji.js", import.meta.url), "utf8");
  runInNewContext(code, {
    module,
    exports,
    process,
    Buffer,
    console,
    setTimeout,
    clearTimeout,
    require: (name: string) => {
      if (Object.hasOwn(hostModules, name)) return hostModules[name];
      assert.ok(builtinModules.includes(name.replace(/^node:/, "")), `Unbundled dependency: ${name}`);
      return require(name);
    },
  });
  assert.equal(typeof module.exports.default, "function");
});
