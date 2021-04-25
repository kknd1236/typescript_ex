/*
let studentID: number = 12345;
let studentName: string = 'park hae sun';
let age: number = 22;
let gender: string = 'male';
let subject: string = 'Javascript';
let courseCompleted: boolean = false;
*/
//이넘
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "mail";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "genderneutral";
})(GenderType || (GenderType = {}));
var student1 = {
    studentID: 1111,
    studentName: '홍길동',
    age: 52,
    gender: GenderType.Female,
    subject: '마리아DB',
    courseCompleted: true
};
function getStudentDetails(studentID) {
    return {
        studentID: 12345,
        studentName: '박해선',
        //age: 22,
        gender: 'female',
        subject: '수학',
        courseCompleted: true
    };
}
function saveStudentDetails(student) { }
saveStudentDetails(student1);
