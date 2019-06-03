const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const { userRouter } = require('./routes/userRouter');
const { itemRouter } = require('./routes/itemRouter');
const { Item } = require('./model');

const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.use('/user', userRouter);

app.get('/items', async (request, response) =>
{
  try {
    const items = await Item.findAll();
    response.send({items})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

app.get('/items/:category', async (request, response) =>
{
  try {
    const items = await Item.findAll({
        where: {
            category: request.params.category
          }
    });
    response.send({items})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
