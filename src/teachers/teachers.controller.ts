import { Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('teachers')
export class TeachersController {
  @Get()
  findAll(): string {
    return 'List all teachers';
  }

  @Get(':id')
  findTeacherById(@Param('id') id: string): string {
    return `Teacher with the id #${id}`;
  }

  @Post()
  createTeacher(): string {
    return 'Create a new Teacher';
  }

  @Put(':id')
  updateTeacher(@Param('id') id: string): string {
    return `Update teacher with id #${id}`;
  }
}
