import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentsController {
  @Get()
  findAll(): string {
    return 'All students';
  }

  @Get('/:studentId')
  findStudentById(): string {
    return 'One student';
  }

  @Post()
  createStudent(): string {
    return 'Create a new student';
  }

  @Put('/:studentId')
  updateStudent(): string {
    return 'Update student by id';
  }
}
