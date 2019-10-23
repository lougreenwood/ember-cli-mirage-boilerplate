import { module, test } from "qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import { setupRenderingTest } from "ember-qunit";

module("Integration | Component | settings", function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test("it renders", async function() {
    this.server.create("settings");
  });
});
