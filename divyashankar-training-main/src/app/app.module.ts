import { Module } from '@nestjs/common';
import { studentController } from "../student/student.controller";
import { teacherController } from "../teachers/teachers.controller";
import { StudentService } from "../student/student.service";
@Module({
  imports: [],
  controllers: [studentController,teacherController],
  providers: [StudentService],
})
export class AppModule {}
