const express = require('express')
const nodemailer=require('nodemailer')
const cors=require('cors')
const app = express()
app.use(cors())
const port = 4000
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.post('/', (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mbnrj123@gmail.com',
      pass: 'cflflaimcuyprjxj' // naturally, replace both with your real credentials or an application-specific password
    }
  });
  const mailOptions = {
    from: 'modi@gmail.com',
    to: req.body.to,
    subject: req.body.subject,
    text: 'Will Get Back To You Soon',
    html: req.body.message
  };
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send(JSON.stringify({'status':'ok'}))
})

app.listen(port, () => {
  console.log("Example app listening on port ${port}")
})
