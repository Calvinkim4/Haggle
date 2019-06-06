const { User, Item } = require('./model');

async function seed() {
  await User.destroy({ where: {}});

const user1 = await User.create({
  username: "yahoo1",
  email: 'wowee@fakemail.com',
  password: 'password'
})

const user2 = await User.create({
  username: "yahoo2",
  email: 'wowee2@fakemail.com',
  password: 'password'
})

const user3 = await User.create({
  username: "yahoo3",
  email: 'wowee3@fakemail.com',
  password: 'password'
})

const user4 = await User.create({
  username: "yahoo4",
  email: 'wowee4@fakemail.com',
  password: 'password'
})

const user5 = await User.create({
  username: "yahoo5",
  email: 'wowee5@fakemail.com',
  password: 'password'
})

const user6 = await User.create({
  username: "yahoo6",
  email: 'wowee6@fakemail.com',
  password: 'password'
})

const item1 = await Item.create({
  name: "hammer",
  category: "Tools",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Framing_hammer.jpg",
  description: 'This is a great hammer. I only used it once I swear. I was hitting some nails and stuff.',
  request: false,
  sent: false
})

const item2 = await Item.create({
  name: "screwdriver",
  category: "Tools",
  image: "https://thewirecutter.com/wp-content/uploads/2018/11/multi-bit-screwdriver-lowres-0159.jpg",
  description: 'I\'ve used this a couple times, I\'m giving it away because my son keeps stabbing me with it',
  request: false,
  sent: false
})

const item3 = await Item.create({
  name: "fork",
  category: "Utensils",
  image: "https://thumbs-prod.si-cdn.com/9ltqvkREj1Du3HUV6W0EY6g_AdI=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/20110520090051img_1795.jpg",
  description: 'I just want to see what I can get with a fork',
  request: false,
  sent: false
})


await item1.setUser(user1);
await item2.setUser(user1);
await item3.setUser(user1);
// await item4.setUser(user1);
// await item5.setUser(user1);



  process.exit();
}

seed();
