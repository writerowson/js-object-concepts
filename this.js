const kibria = {
    id: 101,
    name: 'Rj Kibria',
    money: 5000,
    treatDeyArrow: () => {

    },
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

kibria.treatDey()


function add() {
    console.log(this)
}