var express = require('express');
var app = express();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({ // Transporter host -- How can we do this without a password
    service: 'Gmail',
    auth: {
        user: 'bdulan715@gmail.com',
        pass: '@naluds12'
    }
});

var mailOptions = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'bdulan715@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};

app.get('/', function (req, res) { // Once something reaches this page do something
  res.send('Hello World!');
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);

  });
});

var server = app.listen(3000, function () { // setting the host port
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
