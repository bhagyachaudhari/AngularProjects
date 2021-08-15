var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.getStudentGrade = function () {
        if (this.marks >= 70)
            return "A";
        else if (this.marks < 70)
            return "B";
    };
    return Student;
}());
var s1 = new Student();
s1.sname = "Bhagyashri";
s1.rank = 90;
s1.marks = 89.90;
console.log(s1.getStudentGrade());
