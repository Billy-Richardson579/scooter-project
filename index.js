
const User = require("./src/User");
const Scooter = require("./src/Scooter");
const ScooterApp = require("./src/ScooterApp");

// Create a new instance of the ScooterApp class
const myApp = new ScooterApp();

// Register some users and create some scooters
myApp.registerUsers("user1", "password", 100);
console.log(myApp.registeredUsers)
myApp.registerUsers("user1", "password", 100);
myApp.registerUsers("user2", "password", 25);
const scooter1 = myApp.createScooter("station1");
const scooter2 = myApp.createScooter("station1");
const scooter3 = myApp.createScooter("station3");


myApp.dockScooter(scooter1,"station2")



console.log(myApp.registeredUsers)
console.log(myApp.stations)
