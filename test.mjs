import * as cp from "child_process";
import * as os from "os";
import * as path from "path";
import * as fs from "fs";

const files = fs.readdirSync(".");

files.filter(x => x.endsWith(".json")).forEach(x => {
  cp.execSync("npx renovate-config-validator", {
    stdio: "inherit",
    env: {
      RENOVATE_CONFIG_FILE: path.resolve(".", x),
    },
  });
});
