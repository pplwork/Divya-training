import { Controller, Get } from '@nestjs/common'

@Controller('teachers')
export class teacherController {
    @Get()
    getstudents() {
        return "Teachers";
    }
    @Get('/:teacherbyId')
    getstudentbyId() {
        return 'teacherbyId';
    }
}