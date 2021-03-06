import nodemailer from "nodemailer"

const authEmail = process.env.EMAIL
const authPass = process.env.EMAIL_PASS

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: authEmail,
        pass: authPass
    }
})

export default async (req, res) => {
    const { name, email, whatsapp, message } = req.body

    if (name === "" || email === "" || whatsapp === "" || message === "") {
        res.status(403).send("")
        return
    }

    const html = `<br />
            <b>Nome: </b> ${name} <br />
            <b>E-mail: </b> ${email} <br />
            <b>Whatsapp: </b> <a href="https://api.whatsapp.com/send?phone=55${whatsapp.replace(/[^0-9.]/g, '')}" target="_blank">${whatsapp}</a> <br />
            <b>Mensagem: </b> ${message}`

    const options = {
        subject: `Site - Novo contato de ${name}`,
        html,
        from: `Site <${authEmail}>`,
        to: [authEmail],
        replyTo: [email]

    }

    transporter.sendMail(options, (error, info) => {
        if (error) {
            res.status(403).send(error)
        } else {
            res.send(info)
        }
    })
}
