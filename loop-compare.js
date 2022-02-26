// normal loop

// for (let i = 2; i < 6; i++) {
//     let sum = i + 1;
//     console.log(sum)
// };
const numbers = [5, 9, 55, 3]
for (const num of numbers) {
    const result = num - 5
    // console.log(result)
};
// const result = (23, 5)
// console.log(result) //array
// for (const num in numbers) { };

const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    iscleaned: true
}
// for (const prop in bottle) {
//     console.log(prop, bottle[prop])
// }

// const entries = Object.entries(bottle)
for (const [key, value] of Object.entries(bottle)) {
    console.log([key, value])
}