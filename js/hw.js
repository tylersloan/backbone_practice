bikeRide = Backbone.Model.extend({
  defaults: {

  }
});

Rides = Backbone.Collection.extend({
  model: bikeRide
});

mayRides = new Rides ([
  {
    date: 'May 28',
    timeOfDay: 'noon',
    distance: 1.8,
    elevation: 39,
    averageMPH: 10.3,
    maxMPH: 26.2,
    movingTime: '7:59' 
  },
  {
    date: 'May 28',
    timeOfDay: 'morning',
    distance: 3.7,
    elevation: 52,
    averageMPH: 13.5,
    maxMPH: 31.5,
    movingTime: '16:22' 
  },
  {
    date: 'May 24',
    timeOfDay: 'afternoon',
    distance: 3.8,
    elevation: 118,
    averageMPH: 15.2,
    maxMPH: 34.0,
    movingTime: '15:04' 
  },
  {
    date: 'May 24',
    timeOfDay: 'morning',
    distance: 3.8,
    elevation: 49,
    averageMPH: 13.5,
    maxMPH: 34.0,
    movingTime: '17:09' 
  },
  {
    date: 'May 23',
    timeOfDay: 'afternoon',
    distance: 2.4,
    elevation: 89,
    averageMPH: 10.3,
    maxMPH: 23.5,
    movingTime: '14:03' 
  },
  {
    date: 'May 22',
    timeOfDay: 'afternoon',
    distance: 3.8,
    elevation: 116,
    averageMPH: 14.1,
    maxMPH: 32.9,
    movingTime: '16:14' 
  },
  {
    date: 'May 22',
    timeOfDay: 'morning',
    distance: 4.0,
    elevation: 45,
    averageMPH: 12.1,
    maxMPH: 30.4,
    movingTime: '19:36' 
  },
  {
    date: 'May 21',
    timeOfDay: 'morning',
    distance: 3.7,
    elevation: 36,
    averageMPH: 11.5,
    maxMPH: 31.1,
    movingTime: '19:19' 
  },
  {
    date: 'May 20',
    timeOfDay: 'afternoon',
    distance: 3.8,
    elevation: 95,
    averageMPH: 12.2,
    maxMPH: 27.3,
    movingTime: '18:50' 
  },
  {
    date: 'May 20',
    timeOfDay: 'noon',
    distance: 3.9,
    elevation: 185,
    averageMPH: 12.3,
    maxMPH: 22.8,
    movingTime: '19:06' 
  },
  {
    date: 'May 20',
    timeOfDay: 'morning',
    distance: 2.9,
    elevation: 165,
    averageMPH: 13.6,
    maxMPH: 34.4,
    movingTime: '12:39' 
  },
  {
    date: 'May 16',
    timeOfDay: 'afternoon',
    distance: 3.7,
    elevation: 120,
    averageMPH: 14.9,
    maxMPH: 30.4,
    movingTime: '14:59' 
  },
  {
    date: 'May 16',
    timeOfDay: 'morning',
    distance: 3.8,
    elevation: 51,
    averageMPH: 13.3,
    maxMPH: 30.6,
    movingTime: '16:57' 
  },
  {
    date: 'May 15',
    timeOfDay: 'afternoon',
    distance: 3.8,
    elevation: 119,
    averageMPH: 12.8,
    maxMPH: 28.0,
    movingTime: '17:48' 
  },
  {
    date: 'May 15',
    timeOfDay: 'noon',
    distance: 0.5,
    elevation: 0,
    averageMPH: 7.8,
    maxMPH: 19.9,
    movingTime: '3:45' 
  },
  {
    date: 'May 15',
    timeOfDay: 'morning',
    distance: 3.8,
    elevation: 58,
    averageMPH: 12.8,
    maxMPH: 30.9,
    movingTime: '17:49' 
  },
  {
    date: 'May 14',
    timeOfDay: 'afternoon',
    distance: 4.4,
    elevation: 165,
    averageMPH: 13.7,
    maxMPH: 42.1,
    movingTime: '19:04' 
  },
  {
    date: 'May 14',
    timeOfDay: 'noon',
    distance: 1.8,
    elevation: 38,
    averageMPH: 11.7,
    maxMPH: 18.6,
    movingTime: '9:28' 
  },
])

afternoons = mayRides.where({timeOfDay: "afternoon"})
// alert(afternoons.length + " afternoon rides in May.");

mornings = mayRides.where({timeOfDay: "morning"})
// alert(mornings.length + " morning rides in May.");

noons = mayRides.where({timeOfDay: "noon"})
// alert(noons.length + " midday rides in May.");

console.log(JSON.stringify(mayRides.slice(0,5)));

mayRides.once(
  console.log(mayRides.at([14]).toJSON())
  );

mayRides.on('add', function(model){
  console.log('You just added a new May Ride and it happened in the ' + model.get("timeOfDay") + '. ' + 'You rode ' + model.get("distance") + ' miles' + ' in ' + model.get("movingTime") + ' minutes' + ' ! ' + 'Good job!')
});

mayRides.on('reset', function(model){
  alert('You just deleted all of your rides, dummy!');
});

mayRides.url = '/mayrides';

// mayRides.once('fetch', function(model){
//   alert('You fetched it; you sure did.')
// })

// Backbone.sync = function(booger, mayRides) {
//   mayRides.url = '/mayrides';
//   alert(booger + ": " + mayRides.url);
// };

console.log(mayRides.toJSON());
console.log(mayRides.pluck("movingTime"));