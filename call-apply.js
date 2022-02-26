const kibria = {
    id: 101,
    name: 'Rj Kibria',
    money: 5000,
    treatDey: function (expense, tips, tax) {
        this.money = this.money - expense - tips - tax
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
// heroTreatDey(500);
// heroTreatDey(1000);

// call
kibria.treatDey.call(heroBalam, 100, 50, 50)
kibria.treatDey.call(heroBalam, 500, 100, 100)


// apply
kibria.treatDey.apply(heroBalam, [100, 50, 50])
kibria.treatDey.apply(heroBalam, [1000, 50, 50])