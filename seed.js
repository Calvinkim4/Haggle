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

const item2 = await Item.create({
  name: "screwdriver",
  category: "tools",
  request: false,
  sent: false
})

const item3 = await Item.create({
  name: "fork",
  category: "utensils",
  request: false,
  sent: false
})

const item4 = await Item.create({
  name: "spoon",
  category: "utensils",
  request: false,
  sent: false
})

const item5 = await Item.create({
  name: "spork",
  category: "utensils",
  request: false,
  sent: false
})


await item1.setUser(user1);
await item2.setUser(user1);
await item3.setUser(user1);
await item4.setUser(user1);
await item5.setUser(user1);



  process.exit();
}

seed();
