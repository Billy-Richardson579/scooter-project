const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

// ScooterApp tests here

describe("RegisterUsers test",()=>{

      

    test("doesnt register if under 18",()=>{
        const scooterApp = new ScooterApp();
        expect(() => {scooterApp.registerUsers("steve","abc123",12)}).toThrow("too young to register")
    })
    test("throws an error if user is already registered", () => {
        const scooterApp = new ScooterApp();
        scooterApp.registerUsers("testuser", "password123", 25)
        console.log(scooterApp.registeredUsers)
        expect(() => {
          scooterApp.registerUsers("testuser", "password123", 25)
        }).toThrowError("Already registered");
      });
    });
  
    describe("loginUser", () => {
      test("logs in a user with valid credentials", () => {
        const scooterApp = new ScooterApp();
        const user = scooterApp.registerUsers("testuser", "password123", 20);
        scooterApp.loginUser("testuser", "password123");
        expect(user.isLoggedIn()).toBe(true);
      });
  
      test("throws an error if username is incorrect", () => {
        const scooterApp = new ScooterApp();
        expect(() => {
          scooterApp.loginUser("wrongusername", "password123");
        }).toThrowError('Incorrect username or password');
      });
  
      test("throws an error if password is incorrect", () => {
        const scooterApp = new ScooterApp();
        scooterApp.registerUsers("testuser", "password123", 20);
  
        expect(() => {
          scooterApp.loginUser("testuser", "wrongpassword");
        }).toThrowError("Incorrect username or password");
      });
    });
  
    describe("logoutUser", () => {
      test("logs out a user who is logged in", () => {
        const scooterApp = new ScooterApp();
        const user = scooterApp.registerUsers("testuser", "password123", 20);
        scooterApp.loginUser("testuser", "password123");
        scooterApp.logoutUser("testuser");
  
        expect(user.isLoggedIn()).toBe(false);
      });
    });

