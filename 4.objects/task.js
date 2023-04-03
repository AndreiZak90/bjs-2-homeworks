function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}
let student1 = new Student("Anna", "femate", 23);
let student2 = new Student("Anton", "mate", 27);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMarks = function (...marksToAdd) {
  if (!this.marks) {
    return 0;
  }
  this.marks.push(...marksToAdd);
};

Student.prototype.getAverage = function () {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  let average = this.marks.reduce((acc, item) => acc + item, 0);
  let length = this.marks.length;
  return average / length;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
