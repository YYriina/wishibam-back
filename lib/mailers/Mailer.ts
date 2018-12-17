import * as NMailer from 'nodemailer';
import mailConf from '../utils/mailConf'

export default class Mailer{

    constructor(
        public to?: string,
        public subject?: string,
        public message?: string) { }


    sendMail() {

        NMailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = NMailer.createTransport({
                service: 'gmail',
                secure: true, // true for 465, false for other ports
                auth: {
                    user: mailConf.user, // generated ethereal user
                    pass: mailConf.pass // generated ethereal password
                }
        });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Yoann FORT" <yoann.forthulman@gmail.com>', // sender address
        to: this.to, // list of receivers
        subject: this.subject, // Subject line
        text: this.message, // plain text body
        html: `<div>${this.message}</div>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', NMailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});

}
}