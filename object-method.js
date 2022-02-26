const student = {
    id: 101,
    name: 'Rj Kibria',
    money: 10000,
    major: 'mathmethic',
    isRich: false,
    subjects: ['english', 'economics', 'english'],
    bestfriend: {
        name: 'kundu',
        major: 'management'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam');
    },
    treatDay: function (expense, tips) {
        this.money = this.money - expense - tips;
        return this.money
    }
}
student.takeExam()
const remaining = student.treatDay(900, 100)
console.log(remaining)