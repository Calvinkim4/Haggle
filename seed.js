const { User, Item } = require('./model');

async function seed() {
  await User.destroy({ where: {}});

const user1 = await User.create({
  username: "yahoo1",
  email: 'wowee@fakemail.com',
  password: 'password'
})

const item1 = await Item.create({
  name: "hammer",
  category: "tools",
  request: false,
  sent: false
})


await item1.setUser(user1);


  process.exit();
}

seed();
