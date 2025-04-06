import * as cp from "child_process";
import * as path from "path";
import * as fs from "fs";

fs.readdirSync(".")
  .filter((x) => x.endsWith(".json"))
  .filter((x) => x !== "package.json")
  .forEach((x) => {
    cp.execSync("renovate-config-validator", {
      stdio: "inherit",
      env: {
        PATH: process.env.PATH ?? process.env.Path,
        RENOVATE_CONFIG_FILE: path.resolve(x),
      },
    });
  });
