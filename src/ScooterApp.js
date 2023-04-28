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
  registerUsers(username,password,age){
      if (this.age < 18){
        throw Error ("too young to register")
      }
      else if (this.registerUsers[username]){
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
      }
}


module.exports = ScooterApp
