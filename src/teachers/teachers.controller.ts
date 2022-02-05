import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

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

  @Post('create')
  createTeacher(@Body() body): string {
    const parsedBody = JSON.stringify(body);
    return `Create a new teacher with info: ${parsedBody}`;
  }

  @Put('update/:id')
  updateTeacher(@Param('id') id: string, @Body() body): string {
    const parsedBody = JSON.stringify(body);
    return `Update teacher with id #${id} with info: ${parsedBody}`;
  }
}
