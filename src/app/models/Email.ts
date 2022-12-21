export class Email {
  mailFrom: string;
  mailTo: any;
  subject: string;
  userName: string;
  jwt: string;
  constructor(mailFrom: string, mailTo: any, subject: string, userName, jwt: string) {
    this.mailFrom = mailFrom;
    this.mailTo = mailTo;
    this.subject = subject;
    this.userName = userName;
    this.jwt = jwt;
  }
}
