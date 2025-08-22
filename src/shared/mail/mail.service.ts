import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import * as path from 'path';
import * as pug from 'pug';

@Injectable()
export class MailService {
  private transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: this.configService.get<number>('MAIL_PORT'),
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    });
  }

  async sendResetPasswordEmail(to: string, nombre: string) {
    const templatePath = path.join(process.cwd(), 'src', 'shared', 'templates', 'forward-password.pug');
    const htmlContent = pug.renderFile(templatePath, { nombre });

    const info = await this.transporter.sendMail({
      from: 'michael.yevenesu@gmail.com',
      to,
      subject: 'Restablecimiento de contraseña',
      html: htmlContent,
    });

    console.log('Correo enviado: %s', info.messageId);
    return info;
  }
}
