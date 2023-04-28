const User = require('../src/User')

describe('User', () => {
    let user;
    
    beforeEach(() => {
      user = new User('john_doe', 'password123', 30);
    });
    
    describe('#login', () => {
      test('should set loggedIn to true if the password is correct', () => {
        user.login('password123');
        expect(user.loggedIn).toBe(true);
      });
      
      test('should throw an error if the password is incorrect', () => {
        expect(() => {user.login('wrong_password')}).toThrow('Incorrect password');
        expect(user.loggedIn).toBe(false);
      });
    });
    
    describe('#logout', () => {
      test('should set loggedIn to false', () => {
        user.login('password123');
        user.logout();
        expect(user.loggedIn).toBe(false);
      });
    });
  });
  
