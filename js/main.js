myDogs = new Dogs();
 
myDogs.on('add', function(dogModel){
  console.log('Just added ', dogModel.get('name'));
  // this doesn't need a var because it automatically renders itself
  new DogRowItemView({
    // this is model of an instance
    model: dogModel
  });
});

dogRowItemTemplate = _.template( $('#dog-row-item-template').html() );
dogRowItemEditTemplate = _.template( $('#dog-row-item-edit-template').html() );

// add dogs
myDogs.add([
  {name: 'Gob'},
  {name: 'George Michael'},
  {name: 'Buster'}
])