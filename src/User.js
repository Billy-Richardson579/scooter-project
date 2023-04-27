class User {
    constructor(username, password, age) {
      this.username = username;
      this.password = password;
      this.age = age;
      this.loggedIn = false;
    }
    login(password){
      if(password !== this.password){
        throw Error("Incorrect password");
      }
      else {
        return this.loggedIn = true
      }
    }
    logout(){
      return this.loggedIn = false
    }
}

module.exports = User
