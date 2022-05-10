import nodemailer from "nodemailer"; //mailtrap
import { IMailAdapter, ISendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b64c2deec1e16a",
      pass: "94bc6fc2c4c5e2"
    }
  });

export class NodemailerMailAdapter implements IMailAdapter{
    async sendMail({subject,body}: ISendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Victor Souza <vitinhosouzajuatama@gmail.com>',
            subject,
            html: body,
        });
    }
}