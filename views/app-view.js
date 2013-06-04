AppView = Backbone.View.extend({
  
  events: {
    'click .add-dog': 'showNewDogForm',
    'click .save-dog': 'saveNewDog',
    'click .cancel': 'cancel',
  },

  initialize: function() {
    // store references to underscore templates
    dogRowItemTemplate = _.template( $('#dog-row-item-template').html() );
    dogRowItemEditTemplate = _.template( $('#dog-row-item-edit-template').html() );
    newDogFormTemplate = _.template( $('#new-dog-form-template').html() );
    appTemplate = _.template( $('#app-template').html() );


    // create the collection of dogs
    myDogs = new Dogs();


    // Listen for new dogs in the collection and instantiate a view for each
    this.listenTo(myDogs, 'add', function(dogModel){
      console.log('Just added ', dogModel.get('name'));
      
      // this doesn't need a var because it automatically renders itself
      new DogRowItemView({
        // this is model of an instance
        model: dogModel
      });
    });

    // add dogs
    myDogs.add([
      {name: 'Gob'},
      {name: 'George Michael'},
      {name: 'Buster'}
    ]);
  this.render();
  },

  render: function() {
    // Inject empty div into .container
    // The view will always remember
    $('.container').html(this.el);
    // appTemplate is inserted into the empty div
    this.$el.html( appTemplate() );
  },

  cancel: function() {
    this.$el.html( appTemplate() );
  },
  
  showNewDogForm: function() {
    this.$el.html( newDogFormTemplate() )
  },

  saveNewDog: function() {
    myDogs.add({
      name: this.$el.find('.name-input').val(),
      age: this.$el.find('.age-input').val()
    });
  }
});


$(document).ready(function(){
  new AppView();
});