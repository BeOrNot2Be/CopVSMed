/** @format */
/* eslint-disable */

import assert from "assert";

describe("CopVSMed", function() {
  it("package.json has correct name", async function() {
    const { name } = await import("../package.json"); // eslint-disable-line no-use-before-define
    assert.strictEqual(name, "CopVSMed");
  });

  if (Meteor.isClient) {
    it("client is not server", function() {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function() {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
