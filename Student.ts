class Student
{
    sname:string;
    rank:number;
    marks:number;

    getStudentGrade() : string{
        if(this.marks >= 70)
            return "A";
        else if(this.marks < 70)    
            return "B";
    }
}

let s1 = new Student();
s1.sname = "Bhagyashri" ;
s1.rank = 90;
s1.marks = 89.90;

console.log(s1.getStudentGrade());