/*
let studentID: number = 12345;
let studentName: string = 'park hae sun';
let age: number = 22;
let gender: string = 'male';
let subject: string = 'Javascript';
let courseCompleted: boolean = false;
*/

//이넘
enum GenderType {
  Male = 'mail',
  Female = 'female',
  GenderNeutral = 'genderneutral',
}
let student1: Student = {
  studentID: 1111,
  studentName: '홍길동',
  age: 52,
  gender: GenderType.Female,
  subject: '마리아DB',
  courseCompleted: true,
};

interface Student {
  readonly studentID: number;
  studentName: string;
  age?: number;
  gender: 'male' | 'female' | 'genderneutral';
  subject: string;
  courseCompleted: boolean;
  //addComment(comment: string): string;
  addComment?: (comment: string) => string;
}

function getStudentDetails(studentID: number): Student {
  return {
    studentID: 12345,
    studentName: '박해선',
    //age: 22,
    gender: 'female',
    subject: '수학',
    courseCompleted: true,
  };
}

function saveStudentDetails(student: Student): void {}

saveStudentDetails(student1);
