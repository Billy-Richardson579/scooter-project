class Scooter {
static nextSerial = 1;
constructor() {
  this.station = null;
  this.user = null;
  this.serial = Scooter.nextSerial++;
  this.charge = 100;
  this.isBroken = false;
}

dock(station) {
  if (this.user !== null) {
    throw Error("Scooter is already checked out by a user");
  } else {
    return this.station = station;
  }
}

rent() {
  if (this.charge <= 20) {
    throw Error("scooter needs charge");
  } else if (this.isBroken === true) {
    throw Error('scooter needs repair');
  } else {
    return (this.user = user, this.station = null);
  }
}
}


module.exports = Scooter
