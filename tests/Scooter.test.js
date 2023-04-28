const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter object', () => {
  test('checks serial number increase by 1', () => {
    const sctr1 = new Scooter()
    const sctr2 = new Scooter()
    expect(sctr2.serial).toEqual(2);
  }
)
})

//Method tests
describe('Rent Method', () => {
  test('throws error when charge is <= 20', () => {
    const scooter1 = new Scooter();
    scooter1.charge = 10;
    expect(() => { scooter1.rent() }).toThrow('scooter needs charge');
  });
  test("throws error when scooter is broken", ()=>{
    const scooter1 = new Scooter();
    scooter1.isBroken = true;
    expect(() => { scooter1.rent() }).toThrow('scooter needs repair');

  })
});
  describe("Docked Method", ()=>{
    test("Checks to see if the scooter is in use", ()=> {
       const scooter2 = new Scooter();
    scooter2.user = "Billy"
    expect(() => { scooter2.dock() }).toThrow("Scooter is already checked out by a user");
  })
  test("Returns station if not in use",()=>{
    const scooter2 = new Scooter()
    scooter2.user = null
    expect(scooter2.dock()).toEqual(scooter2.station)
  })
})
   

  // tests here!

  //rent method

  //dock method

  //requestRepair method

  //charge method


