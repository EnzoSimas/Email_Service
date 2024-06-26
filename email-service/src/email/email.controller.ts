import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendMail(@Body('to') to: string, @Body('subject') subject: string, @Body('text') text: string) {
    await this.emailService.sendMail(to, subject, text);
    return { message: 'Email sent successfully' };
  }
}
