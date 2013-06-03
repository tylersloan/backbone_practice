AppView = Backbone.View.extend({
  initialize: function() {
    // store references to underscorw templates
    dogRowItemTemplate = _.template( $('#dog-row-item-template').html() );
    dogRowItemEditTemplate = _.template( $('#dog-row-item-edit-template').html() );

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

  }
});


$(document).ready(function(){
  new AppView();
});