import { EmailService } from './email.service';
export declare class EmailController {
    private readonly emailService;
    constructor(emailService: EmailService);
    sendMail(to: string, subject: string, text: string): Promise<{
        message: string;
    }>;
}
