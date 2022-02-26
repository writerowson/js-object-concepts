const bottle = { color: 'yellow', hold: 'water', price: 50, iscleaned: true }
// getting all peopertis name
const keys = Object.keys(bottle);
console.log(keys)
// only values
const value = Object.values(bottle);
console.log(value)
// full entries
const full = Object.entries(bottle);
console.log(full)
// delete
Object.freeze(bottle)
bottle.price = 100
// delete bottle.iscleaned
console.log(bottle)
// to stop delete
//  t freeze
