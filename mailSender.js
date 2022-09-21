import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "radiorbtv@gmail.com",
        pass: "P.lesna438"
    }
});
const sendMail = async(to, subject, text) => {

    let mailOptions = {
        from: "radiorbtv@gmail.com",
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return error;
        }
        return info;
    });
}

export default sendMail