import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class TeacherStudentsController {
  @Get()
  findStudentsOfTeacher(@Param('teacherId') teacherId: string): string {
    return `List all students of teach id #${teacherId}`;
  }

  @Put(':studentId')
  updateStudentsOfTeacher(
    @Param('studentId') studentId: string,
    @Param('teacherId') teacherId: string,
    @Body() body,
  ): string {
    const parsedBody = JSON.stringify(body);
    return `Update students #${studentId} of teacher id #${studentId} with info: ${parsedBody}`;
  }
}
