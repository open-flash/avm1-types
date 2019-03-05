import chai from "chai";
import fs from "fs";
import { JsonReader } from "kryo/readers/json";
import sysPath from "path";
import { $Cfg, Cfg } from "../lib/cfg";
import meta from "./meta.js";

const PROJECT_ROOT: string = sysPath.join(meta.dirname, "..", "..", "..");
const CFG_ROOT: string = sysPath.join(PROJECT_ROOT, "..", "tests", "cfg");

const JSON_READER: JsonReader = new JsonReader();

const sampleNames: ReadonlyArray<string> = [
  "hello-world",
  "if-else",
  "misaligned-jump",
  "new-simple",
  "try-catch-err",
  "try-catch-finally-err",
  "try-finally-err",
  "with-shadow",
];

describe("readJson", function () {
  for (const sampleName of sampleNames) {
    it(sampleName, async function () {
      const input: string = fs.readFileSync(
        sysPath.join(CFG_ROOT, `${sampleName}.json`),
        {encoding: "UTF-8"},
      );
      const cfg: Cfg = $Cfg.read(JSON_READER, input);
      chai.assert.isTrue($Cfg.test(cfg));
    });
  }
});
