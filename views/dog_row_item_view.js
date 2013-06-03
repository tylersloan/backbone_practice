DogRowItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'dog',

  // These events must happen in this.el - that way they are gone when deleted and don't slow down
  // page by having a bunch of event listenersafter the html element is gone.
  events: {
    'click .add': 'add',
    'click .delete': 'delete',
    'click .edit': 'edit',
    'click .save': 'save',
    'click .cancel': 'render'
  },

  initialize: function(){
    this.render();
    // This is in initialize because it's effected by the model, not an instance of the model
    this.listenTo(this.model, 'change', this.render)
    // this.listenTo(this.model, 'invalid', this.error)
    $('.dogs').append(this.$el)
  },

  render: function(){
    renderedHTML = this.$el.html( dogRowItemTemplate(this.model.attributes) )
  },

  delete: function(){
    // removes the model from teh collection
    this.model.destroy();
    // removes the view el and its bindings
    this.remove();
  },

  edit: function(){
    this.$el.html( dogRowItemEditTemplate(this.model.attributes) )
  },

  save: function(){
    // .set renders the .val that has changed but doesn't save it to server or anywhere
    this.model.set({
      name: this.$el.find('.name-input').val(),
      age: this.$el.find('.age-input').val(),
    })
  }
});