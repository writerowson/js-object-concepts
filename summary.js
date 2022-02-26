const pen = {
    brand: 'econo',
    price: 10,
    writePoem: function (food) {
        console.log(food)
    }
}
const keys = Object.keys(pen)
const values = Object.values(pen)

for (const key in pen) {
    console.log(pen[key])
}