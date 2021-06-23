import { Injectable } from '@nestjs/common';
import { students,teachers } from "../db";
import { createStudentDto } from './dto/student.dto';
@Injectable()
export class StudentService {
   private  students=students;
    getstudents():createStudentDto[]{
        return this.students;
    }
    findStudentById(studentbyid:string):createStudentDto{
        return this.students.find(e=>{return e.id===studentbyid})
    }
}
