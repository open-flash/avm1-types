import chai from "chai";
import fs from "fs";
import { JsonReader } from "kryo/readers/json";
import sysPath from "path";
import { $Action, Action } from "../lib/action";
import meta from "./meta.js";

const PROJECT_ROOT: string = sysPath.join(meta.dirname, "..", "..", "..");
const TEST_SAMPLES_ROOT: string = sysPath.join(PROJECT_ROOT, "..", "tests");

const JSON_READER: JsonReader = new JsonReader();

const sampleNames: ReadonlyArray<string> = [
  "define-function",
  "trace",
  "error",
  "error-with-message",
];

describe("$Action.read", function () {
  for (const sampleName of sampleNames) {
    it(sampleName, async function () {
      const input: string = fs.readFileSync(
        sysPath.join(TEST_SAMPLES_ROOT, "raw", `${sampleName}.json`),
        {encoding: "UTF-8"},
      );
      const cfg: Action = $Action.read(JSON_READER, input);
      chai.assert.isTrue($Action.test(cfg));
    });
  }
});
