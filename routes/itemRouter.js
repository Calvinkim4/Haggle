const express = require('express');
const itemRouter = express.Router();
const bodyParser = require('body-parser');

const { Item, User } = require('../model');

itemRouter.use(bodyParser.json());

itemRouter.get('/', async (request, response) =>
{
  try {
    const userId = request.userId;
    const item = await Item.findAll({
      where: {
        user_id: userId,
      }
    });
    response.send({item})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

itemRouter.get('/:id', async (request, response) =>
{
  try {
    const userId = request.userId;
    const item = await Item.findOne({
      where: {
        user_id: userId,
        id: request.params.id
      }
    });
    response.send({item})
  } catch (e) {
    response.status(500).json({ msg: e.message })
  }
})

itemRouter.post('/', async (request, response) => {
  try {
    const item = await Item.create(request.body);
    let userId = request.userId;
    const user = await User.findByPk(userId);
    await item.setUser(user);
    response.send(item);
  } catch (e) {
    console.log(e.message);
  }
});


itemRouter.put('/:id', async (request, response) => {
  try {
    const item = await Item.findByPk(request.params.id);
    if (item) await item.update(request.body);
    response.send({item});
  } catch(e) {
    console.log(e.message);
  }
})


itemRouter.delete('/:id', async (request, response) => {
  try {
    const item = await Item.findByPk(request.params.id);
    await item.destroy();
    response.send(item);
  } catch(e) {
    console.log(e.message);
  }
})


module.exports = { itemRouter };