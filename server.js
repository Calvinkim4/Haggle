const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const { User } = require('./model');

const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cors());

app.get('/user/:id', async (request, response) => {
    try {
      const user = await User.findByPk(request.params.id);
      response.send(user);
    } catch (e) {
      console.log(e.message);
    }
  });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
