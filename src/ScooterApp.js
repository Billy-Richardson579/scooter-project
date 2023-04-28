const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor(){

    this.stations = {
      station1: [],
      station2: [],
      station3: []

    }
    this.registeredUsers = { 
    }
  }
  registerUsers(username,password,age){
      if (age < 18){
        throw Error ("too young to register")
      }
      else if (Object.keys(this.registeredUsers) == username){
        throw Error("Already registered")
      }
      else{
        const Signup = new User (username,password,age)
          this.registeredUsers[username] = Signup
        console.log(this.registeredUsers[username])
        return Signup
      }
    }
    loginUser(username,password){
      const user = this.registerUsers[username]
      if (user){
        user.login(password)
        return user.loggedIn = true
      }
      else throw Error('Incorrect username or password')
    }
    logoutUser(username) {
      const user = this.registeredUsers[username];
      if (!user) {
        throw Error("No such user is logged in");
      }
      else {
        user.logout()
        console.log("Logged Out")
      }
    }
      createScooter(station) {
        const stations = Object.keys(this.stations);
        if (!stations.includes(station)) {
          throw Error("No such station exists");
        }
        else{
          const scooter = new Scooter(station)
          this.stations[station].push(scooter)
          console.log("Created new scooter.");
          return scooter;
        }
      }
      dockScooter(scooter,station){
        if (!this.stations[station]) {
          throw new Error("No such station.");
        } 
        else if (scooter.station === station) {
          throw new Error("Scooter is already at station.");
        }
        else{
            let i = 0;
            while (this.stations[scooter.station][i] !== scooter) {
              i++;
            if (i === this.stations[scooter.station].length) {
            throw new Error("Scooter is not at its station.");
          }
        }
          this.stations[scooter.station].splice(i, 1);
          this.stations[station].push(scooter);
          scooter.dock(station);
          console.log("Scooter is docked.");
    }


        }
}



module.exports = ScooterApp
