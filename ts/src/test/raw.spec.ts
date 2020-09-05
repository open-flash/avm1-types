import chai from "chai";
import fs from "fs";
import sysPath from "path";
import { $Action, Action } from "../lib/raw/action.js";
import meta from "./meta.js";
import { JSON_READER } from "kryo-json/lib/json-reader.js";

const PROJECT_ROOT: string = sysPath.join(meta.dirname, "..");
const TEST_SAMPLES_ROOT: string = sysPath.join(PROJECT_ROOT, "..", "tests");

const sampleNames: ReadonlyArray<string> = [
  "define-function",
  "end",
  "error",
  "error-with-message",
  "trace",
  "raw",
  "raw-with-data",
];

describe("$Action.read", function () {
  for (const sampleName of sampleNames) {
    it(sampleName, async function () {
      const input: string = fs.readFileSync(
        sysPath.join(TEST_SAMPLES_ROOT, "raw", `${sampleName}.json`),
        {encoding: "utf-8"},
      );
      const cfg: Action = $Action.read(JSON_READER, input);
      chai.assert.isTrue($Action.test(cfg));
    });
  }
});
