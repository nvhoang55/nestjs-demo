import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentsController {
  @Get()
  findAll(): string {
    return 'All students';
  }

  @Get(':id')
  findStudentById(@Param('id') id: string): string {
    return `Student with id #${id}`;
  }

  @Post('create')
  createStudent(@Body() body): string {
    const parsedBody = JSON.stringify(body);
    return `Create a new student with info: ${parsedBody}`;
  }

  @Put('/:id')
  updateStudent(@Param('id') id: string, @Body() body): string {
    const parsedBody = JSON.stringify(body);
    return `Update student id #${id} with body ${parsedBody}`;
  }
}
