import {Body, Controller, Get, Param, Post, Put } from '@nestjs/common'
import { createStudentDto, updateStudentDto } from './dto/student.dto';
import { StudentService } from "./student.service";
@Controller('students')
export class studentController{
    private readonly studentService;
    constructor() { this.studentService= new StudentService()}
    
    @Get()
    getstudents():createStudentDto[]{
        return this.studentService.getstudents();
    }
    @Get('/:studentById')
    getstudentbyId(@Param("studentById") param:string):createStudentDto{
        return this.studentService.findStudentById(param);
    }

    // @Post("/:studentById")
    // postStudentsById(@Body() body:createStudentDto){
    //     console.log(body);
    // }
    
    // @Put("/:studentById")
    // putStudentById(@Body() body:updateStudentDto){
    //     console.log(body);
        
    // }
}