import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    //host: 'smtp.gmail.com',
    service:'Gmail',
    port: 465,
    secure: true,
    auth: {
        user: 'radiorbtv@gmail.com',
        pass: 'zxjuolovjywdlmij'
    }
});
const sendMail = async(to, subject, text) => {

    let mailOptions = {
        from: 'radiorbtv@gmail.com',
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return error;
        }
        console.log(info);
        return info;
    });
}

export default sendMail