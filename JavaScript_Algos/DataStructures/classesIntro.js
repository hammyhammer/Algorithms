// We are creating a pattern here. A mold to create something new
class Student {
  // Constructors are the agruments we make to create a new object
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.tardies = 0;
    this.scores = [];
  }

  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }

  addScore(score) {
    this.scores.push(score)
    return this.scores
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) { return a + b })
    return sum / this.scores.length;
  }

  static enrollStudents() {
    return 'Enrolling Students'
  }
}


// To make new instances of a object.
let firstStudent = new Student('Bob', 'Saget')
let secondStudent = new Student('Uncle', 'Phil')

secondStudent.addScore(82)
secondStudent.addScore(93)

// console.log(firstStudent.firstName)
// console.log(firstStudent.markLate())
console.log(secondStudent.calculateAverage())



