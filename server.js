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

const io = require('socket.io');
const path = require('path');

const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
const server = require('http').createServer(app);
const socketIo = io(server);

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

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

socketIo.on('connection', socket => {
  const username = socket.handshake.query.username;
  console.log(`${username} connected`);

  socket.on('client:message', data => {
    console.log(`${data.username}: ${data.message}`);

    socket.broadcast.emit('server:message', data);
  });

  socket.on('disconnect', () => {
    console.log(`${username} disconnected`);
  });
});