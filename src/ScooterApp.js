const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(username,password,age,scooter,user,station,serial,loggedIn){
    super(username,password,age,scooter,user,station,serial,loggedIn)
    this.stations = {
      station1: [],
      station2: [],
      station3: []

    }
    this.registeredUsers = {
    }
  }
  
}

module.exports = ScooterApp
