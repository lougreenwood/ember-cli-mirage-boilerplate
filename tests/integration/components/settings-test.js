import { module, test } from "qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import { setupRenderingTest } from "ember-qunit";

module("Integration | Component | settings", function(hooks) {
  setupRenderingTest(hooks);
  setupMirage(hooks);

  test("server.create singular model passes", async function(assert) {
    // With incorrect model name (actual model name is `settings`)
    this.server.create("setting");
    assert.ok(
      true,
      "server.create() works for incorrect, singular version of model"
    );
  });

  test("server.create singular model fails", async function(assert) {
    // With correct model name, which is actually plural
    this.server.create("settings");
    assert.ok(
      true,
      "server.create() fails for actual, plural version of model"
    );
  });
});
