import DS from "ember-data";
const { Model } = DS;

export default Model.extend({
  settingOne: DS.attr(),
  settingTwo: DS.attr()
});
