// The dog model...

Dog = Backbone.Model.extend({
  defaults: {
    legs: 4,
    name: 'Fido',
    age: 8
  },
 
  wag: function () {
    console.log('//wagging tail');
  }
});