const router = require('express').Router(),
  nodemailer = require('nodemailer'),
  env = require('./env'),
  smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: env.username,
      pass: env.password
    }
  },
  transporter = nodemailer.createTransport(smtpConfig)

router.post('/', (req, res, next) => {
  let { email, message } = req.body
  let mailOptions = {
    from: 'Personal website <teatomailer@gmail.com>',
    to: 'teatocode@gmail.com',
    subject: `Message from ${email}`,
    html: message
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) return next(err)
    res.sendStatus(200)
  })
})

module.exports = router