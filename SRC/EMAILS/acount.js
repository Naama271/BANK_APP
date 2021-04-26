const sgMail = require('@sendgrid/mail')

const sendgridAPIkey = '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'

sgMail.setApiKey('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')

// sgMail.send({
//     to: 'naama271@gmail.com',
//     from: 'naama271@gmail.com',
//     subject: 'hi naama!!!',
//     text: 'I hope you are OK'
// })

const sendWelcomeEmail = (email, name) =>{
    sgMail.send({
    to: email,
    from: 'naama271@gmail.com',
    subject: `hi ${name}!!!`,
    text: `${name} I hope you are OK`
})
}

module.exports = {
    sendWelcomeEmail
}