import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsController } from './students/students.controller';
import { TeachersController } from './teachers/teachers.controller';
import { TeacherStudentsController } from './teachers/students.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    StudentsController,
    TeachersController,
    TeacherStudentsController,
  ],
  providers: [AppService],
})
export class AppModule {}
