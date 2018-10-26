import chai from "chai";
import { ActionType } from "../lib";
import * as actions from "../lib/actions";

describe("Actions", () => {
  it("should test a valid Play action", async () => {
    chai.assert.isTrue(actions.$Play.test({action: ActionType.Play}));
  });
});
