import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getTest(): string {
    return 'test route';
  }

  getHello(): string {
    return 'My name is...My name is...';
  }
}
