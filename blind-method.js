const kibria = {
    id: 101,
    name: 'Rj Kibria',
    money: 5000,
    treatDey: function (expense) {
        this.money = this.money - expense
        console.log(this)
        return this.money
    }
}
const heroBalam = {
    id: 102,
    name: 'hero Balam',
    money: 6000
}
const heroTreatDey = kibria.treatDey.bind(heroBalam);
// kibria.treatDey(100)
heroTreatDey(500);
heroTreatDey(1000);