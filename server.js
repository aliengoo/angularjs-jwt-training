var express = require('express');
var faker = require('faker');
var cors = require('cors');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');

var jwtSecret = 'oi2323nwfwefmwefwef';

var app = express();

var user = {
  username : 'homer',
  password : 'p'
};

app.use(cors());
app.use(bodyParser.json());
app.use(expressJwt({secret : jwtSecret}).unless({path : ['/user']}));

app.get('/random-user', function (req, res) {
  var user = faker.helpers.userCard();

  user.avatar = faker.image.avatar();

  res.json(user);
});

app.get('/', function (req, res) {
  res.send({
    message: 'Hello'
  });
});

app.post('/user', authenticate, function (req, res) {
  var token = jwt.sign({
    username : user.username
  }, jwtSecret);

  res.send({
    token : token,
    user : user
  });
});

function authenticate(req, res, next) {
  var body = req.body;

  if (!body.username || !body.password) {
    res.status(400).end('Must provide username or password');
  } else {
    if (body.username !== user.username || body.password !== user.password) {
      res.status(400).end('Username or password incorrect');
    }
  }

  next();
}

app.listen(3000, function () {
  console.log('Listening...');
});
