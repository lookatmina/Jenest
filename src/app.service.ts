import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `Hello World! mins! ${process.env.MINA}::`;
  }
}
