const student = {
    id: 101,
    name: 'rowson',
    major: 'mathmethic',
    isRich: false,
    subjects: ['english', 'economics', 'english'],
    bestfriend: {
        name: 'kundu',
        major: 'management'
    },
    takeExam: function () {
        console.log(this.name, 'taking exam')
    }
}

student.takeExam