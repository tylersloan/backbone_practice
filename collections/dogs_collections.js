// A collection of Dog models

Dogs = Backbone.Collection.extend({
  // this model is referring to the constructor Dog. allows us to add new instance with the defaults of Dog
  model: Dog
});