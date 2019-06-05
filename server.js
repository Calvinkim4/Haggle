const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { userRouter } = require('./routes/userRouter');
const { itemRouter } = require('./routes/itemRouter');
const { Item } = require('./model');
const { authRouter } = require('./routes/authRouter')
const { appRouter } = require('./routes/appRouter')
const passport = require('passport');
const { authorized } = require('./auth/auth');

const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

const http = require('http').createServer(app);
const io = require('socket.io')(http);


app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRouter);
app.use('/app', authorized, appRouter);
app.use(passport.initialize());

app.use('/user', userRouter);

app.get('/items', async (request, response) =>
{
  try {
    const items = await Item.findAll();
    response.send(items)
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

app.get('/category/:category', async (request, response) =>
{
  try {
    const items = await Item.findAll({
        where: {
            category: request.params.category
          }
    });
    response.send(items)
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

app.use((err, req, res, next) => {
  console.log('error', err)
  res.status(err.status || 500);
  res.json({ message: err.message });
});

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
