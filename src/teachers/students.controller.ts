import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('teachers/:id/students')
export class TeacherStudentsController {
  @Get()
  findStudentsOfTeacher(@Param('id') id: string): string {
    return `List all students of teach id #${id}`;
  }

  @Put()
  updateStudentsOfTeacher(@Param('id') id: string): string {
    return `Update students of teach id #${id}`;
  }
}
