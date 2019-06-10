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
  category: "tools",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Framing_hammer.jpg",
  description: 'This is a great hammer. I only used it once I swear. I was hitting some nails and stuff.',
  request: false,
  sent: false
})

const item2 = await Item.create({
  name: "screwdriver",
  category: "tools",
  image: "https://thewirecutter.com/wp-content/uploads/2018/11/multi-bit-screwdriver-lowres-0159.jpg",
  description: 'I\'ve used this a couple times, I\'m giving it away because my son keeps stabbing me with it',
  request: false,
  sent: false
})

const item3 = await Item.create({
  name: "fork",
  category: "utensils",
  image: "https://thumbs-prod.si-cdn.com/9ltqvkREj1Du3HUV6W0EY6g_AdI=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/20110520090051img_1795.jpg",
  description: 'I just want to see what I can get with a fork',
  request: false,
  sent: false
})

const item4 = await Item.create({
  name: "lambo",
  category: "auto",
  image: "https://boygeniusreport.files.wordpress.com/2018/08/lambo-huracan.jpg?quality=98&strip=all&w=782",
  description: 'Anyone want a lambo',
  request: false,
  sent: false
})

const item5 = await Item.create({
  name: "nokia",
  category: "electronics",
  image: "http://ae01.alicdn.com/kf/HTB1DSnHOpXXXXcnXVXXq6xXFXXX7.jpg",
  description: 'I need to upgrade my phone',
  request: false,
  sent: false
})

const item6 = await Item.create({
  name: "robe",
  category: "apparel",
  image: "https://www.whotelsthestore.com/images/products/lrg/w-hotels-hooded-robe-WHO-400-MIC-SH-WL-GY_lrg.jpg",
  description: 'I took this from my hotel because they overcharged me',
  request: false,
  sent: false
})

const item7 = await Item.create({
  name: "necklace",
  category: "jewelry",
  image: "https://cdn.shopify.com/s/files/1/1785/9395/products/il_fullxfull.1194026985_7n76_1024x1024.jpg?v=1487732903",
  description: 'worth a lot',
  request: false,
  sent: false
})

const item8 = await Item.create({
  name: "Moveable",
  category: "housing",
  image: "https://s.abcnews.com/images/Lifestyle/ht_elvis_summers_house_jc_150504_16x9_992.jpg",
  description: 'Can move anywhere you want',
  request: false,
  sent: false
})

const item9 = await Item.create({
  name: "controller",
  category: "gaming",
  image: "https://cdn.vox-cdn.com/thumbor/jkTgeqNZrVzHfBnY4wjmDLZABLQ=/0x0:2400x1600/1200x800/filters:focal(950x145:1334x529)/cdn.vox-cdn.com/uploads/chorus_image/image/61038895/xbox_one_x_09.0.jpg",
  description: 'I have too many controllers',
  request: false,
  sent: false
})

const item10 = await Item.create({
  name: "Moving",
  category: "services",
  image: "https://www.unpakt.com/blog/wp-content/uploads/2016/08/4762000_l-Man-covered-by-lots-of-cardboard-boxes-moving-concept-810x540.jpg",
  description: 'I can help move your stuff',
  request: false,
  sent: false
})

const item11 = await Item.create({
  name: "vases",
  category: "antiques",
  image: "https://cdn.dotcom.sothebys.psdops.com/dims4/default/0695153/2147483647/strip/true/crop/7337x4151+0+767/resize/1156x654!/quality/90/?url=https%3A%2F%2Fcdn.dotcom.sothebys.psdops.com%2F6e%2F93%2Fc7eb58714ee4b4e3b531e47d1922%2Froyal-noble-1.jpg",
  description: 'I bought this when I was drunk',
  request: false,
  sent: false
})

const item12 = await Item.create({
  name: "sofa",
  category: "furniture",
  image: "https://www.westelm.com/weimgs/ab/images/wcm/products/201922/0241/henry-sofa-76-c.jpg",
  description: 'I\'m leaving to go live in the woods',
  request: false,
  sent: false
})

const item13 = await Item.create({
  name: "painting",
  category: "junk",
  image: "https://www.sciencedaily.com/images/2019/06/190605121652_1_900x600.jpg",
  description: 'Found this in my attic',
  request: false,
  sent: false
})

const item14 = await Item.create({
  name: "old stuff",
  category: "antiques",
  image: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/miniature-worlds-antique-jewelry-gregory-grozos-thumbnail.jpg",
  description: 'this belonged to my grandfather',
  request: false,
  sent: false
})

const item15 = await Item.create({
  name: "sofa",
  category: "furniture",
  image: "https://5.imimg.com/data5/VN/CX/MY-59100123/drawing-room-sofa-set-500x500.jpg",
  description: 'I need a smaller sofa since I\'m moving',
  request: false,
  sent: false
})

const item16 = await Item.create({
  name: "ps4",
  category: "gaming",
  image: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/138763-games-review-sony-ps4-pro-review-image1-gcolf3ytme.jpg",
  description: 'I need to get rid of this',
  request: false,
  sent: false
})

const item17 = await Item.create({
  name: "sewing table",
  category: "antiques",
  image: "https://i.pinimg.com/originals/5f/30/b1/5f30b1c02249c3510223833dead3d89b.jpg",
  description: 'this might be haunted',
  request: false,
  sent: false
})

const item18 = await Item.create({
  name: "two cars",
  category: "auto",
  image: "https://static.wixstatic.com/media/e5a863_a575430e0fb1431ca30a697543157ff1~mv2_d_6000_4000_s_4_2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/file.jpg",
  description: 'both are for sale',
  request: false,
  sent: false
})

const item19 = await Item.create({
  name: "spoons",
  category: "utensils",
  image: "https://images.food52.com/UYTQqTXPPIH6e9gdp4qqZD_962g=/2000x0/816bc5ed-14c5-4d3e-bad3-2296d9ef4c26--2017-0516_hawkins-new-york_simple-walnut-spoons_family_silo_rocky-luten_013.jpg",
  description: 'its a set',
  request: false,
  sent: false
})


const item20 = await Item.create({
  name: "knives",
  category: "utensils",
  image: "https://images.crateandbarrel.com/is/image/Crate/Gourmet7pcBlockSetSHF16/?$web_product_hero$&160810162250&wid=625&hei=625",
  description: 'my knife selling business tanked',
  request: false,
  sent: false
})


const item21 = await Item.create({
  name: "More knives",
  category: "utensils",
  image: "https://thewirecutter.com/wp-content/uploads/2017/08/knifesets-lowres-group.jpg",
  description: 'giving away knives',
  request: false,
  sent: false
})


const item22 = await Item.create({
  name: "desktop comp",
  category: "electronics",
  image: "https://icdn5.digitaltrends.com/image/hp-omen-obelisk_1-800x534-c.jpg",
  description: 'it\'s still in good condition',
  request: false,
  sent: false
})


const item23 = await Item.create({
  name: "half-life 3",
  category: "gaming",
  image: "https://www.gamezone.com/wp-content/uploads/2017/10/Half-Life-3-funny.jpg",
  description: 'It\'s real',
  request: false,
  sent: false
})

const item24 = await Item.create({
  name: "mansion",
  category: "housing",
  image: "https://cdn.vox-cdn.com/thumbor/0__zWQZmmmwHA5OjBTAchz6_sBw=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/62922957/4854_Alonzo_Ave__Encino_FInals_34.0.jpg",
  description: 'mansion',
  request: false,
  sent: false
})

const item25 = await Item.create({
  name: "headset",
  category: "gaming",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4a1ASlQA_DoPUfIkg9OIIxCN_pl_5WYFXYkPoZZN-D06j9uV8HQ",
  description: 'wireless headset',
  request: false,
  sent: false
})

const item26 = await Item.create({
  name: "hacking",
  category: "services",
  image: "https://internetofbusiness.com/wp-content/uploads/2018/04/internet-security-640x480.jpg",
  description: 'I can hack anything',
  request: false,
  sent: false
})

const item27 = await Item.create({
  name: "cleaning",
  category: "services",
  image: "https://cleanmyspace.com/wp-content/uploads/2017/08/how-to-hire-a-cleaning-service.jpg",
  description: 'I\'ll clean your entire house',
  request: false,
  sent: false
})

const item28 = await Item.create({
  name: "chainsaw",
  category: "tools",
  image: "https://bitsandscrews.com/wp-content/uploads/2018/04/Best-Chainsaw-for-Homeowners-2018-Buying-Guide.jpg",
  description: 'chainsaw barely used',
  request: false,
  sent: false
})

const item29 = await Item.create({
  name: "bed",
  category: "furniture",
  image: "https://assets.brooklynbedding.com/wp-content/uploads/2018/07/18120635/Brooklyn-Aurora-Mattress-Lifestyle.jpg",
  description: 'regular size',
  request: false,
  sent: false
})

const item30 = await Item.create({
  name: "dresser",
  category: "furniture",
  image: "https://www.potterybarn.com/pbimgs/ab/images/dp/wcm/201922/0429/sausalito-extra-wide-dresser-c.jpg",
  description: 'small scratches',
  request: false,
  sent: false
})

const item31 = await Item.create({
  name: "old tv",
  category: "antiques",
  image: "https://media.ozarksfirst.com/nxsglobal/ozarksfirst/photo/2018/10/27/Antique_Festival_of_the_Ozarks_0_60404915_ver1.0_640_360.jpg",
  description: 'old television still works',
  request: false,
  sent: false
})

const item32 = await Item.create({
  name: "junk food",
  category: "junk",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwwqfKMg5zyO0Rao7xW3u5mP3dfmoTUZRgOH1huF7A3bPHSWt",
  description: 'Am I doing this right',
  request: false,
  sent: false
})

const item33 = await Item.create({
  name: "engine",
  category: "auto",
  image: "https://r.hswstatic.com/w_907/gif/car-engine-new1.jpg",
  description: 'selling my engine',
  request: false,
  sent: false
})

const item34 = await Item.create({
  name: "tires",
  category: "auto",
  image: "https://media-dmg.assets-cdk.com/websites/content/ba25f7e139304b15a20a16a3b3bb30f4_c0x0-1200x674.jpg",
  description: 'I have a ton of tires',
  request: false,
  sent: false
})

const item35 = await Item.create({
  name: "custom rims",
  category: "auto",
  image: "https://cdn.vox-cdn.com/thumbor/CX57j2fyX3SJqSZf05Xc6Ge6Fpc=/0x0:2040x1360/1200x675/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/63646311/akrales_190419_grid_eight_up_01_nyias.0.jpg",
  description: 'Custom designed rims',
  request: false,
  sent: false
})

const item36 = await Item.create({
  name: "rim",
  category: "auto",
  image: "https://ae01.alicdn.com/kf/HTB1AaRtekfb_uJjSsrbq6z6bVXa4/4-New-18-Rims-wheels-for-MERCEDES-BENZ-BLACK-AMG-RIMS-WHEELS-W813.jpg_640x640.jpg",
  description: 'one rim for trade',
  request: false,
  sent: false
})

const item37 = await Item.create({
  name: "ram",
  category: "electronics",
  image: "https://img.hexus.net/v2/memory/adata/xpg2133/ModulesB.jpg",
  description: '2 sticks of 16gb ram',
  request: false,
  sent: false
})

const item38 = await Item.create({
  name: "raspberry pi",
  category: "electronics",
  image: "https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08xuzp3msf6xehp96wpfjinzco.jpg",
  description: 'trying to trade a pi',
  request: false,
  sent: false
})

const item39 = await Item.create({
  name: "gpus",
  category: "electronics",
  image: "https://www.cgdirector.com/wp-content/uploads/media/2017/03/nvidia-geforce-rtx-2080ti-2080-2070-series-gpu.jpg",
  description: 'gpu used for mining',
  request: false,
  sent: false
})

const item40 = await Item.create({
  name: "cooking",
  category: "services",
  image: "https://www.yesmagazine.org/issues/affordable-housing/cooking-stirs-the-pot-for-social-change-20180627/sioux-chef-cooking.jpg/image",
  description: 'I am a master chef',
  request: false,
  sent: false
})

const item41 = await Item.create({
  name: "plumbing",
  category: "services",
  image: "https://www.wearegenerationt.com/uploads/pages/Plumbers.jpg",
  description: 'I can fix a leaky sink',
  request: false,
  sent: false
})

const item42 = await Item.create({
  name: "driving",
  category: "services",
  image: "https://www.irishtimes.com/polopoly_fs/1.3400131.1519215500!/image/image.jpg_gen/derivatives/box_620_330/image.jpg",
  description: 'I can drive if you pay for gas',
  request: false,
  sent: false
})

const item43 = await Item.create({
  name: "bottlecap",
  category: "junk",
  image: "https://www.bottlecapco.com/assets/images/productimages/bottlecapsstandard/distressed-red-bottle-cap.jpg",
  description: 'needed if fallout becomes reality',
  request: false,
  sent: false
})

const item44 = await Item.create({
  name: "sweater",
  category: "apparel",
  image: "https://www.dhresource.com/0x0s/f2-albu-g9-M01-4A-03-rBVaWFwkoX2AA8GEAAENG9c9z8w686.jpg/o-neck-funny-sweater-men-brand-clothing-mens.jpg",
  description: 'custom sweater',
  request: false,
  sent: false
})

const item45 = await Item.create({
  name: "hoodie",
  category: "apparel",
  image: "https://cdn.shopify.com/s/files/1/1852/7539/products/c3016c445b7f5088698e90bdba944e65_1024x1024.png?v=1556306609",
  description: 'custom hoodie',
  request: false,
  sent: false
})

const item46 = await Item.create({
  name: "sweater",
  category: "apparel",
  image: "http://i.ebayimg.com/00/s/NTAwWDUwMA==/z/vzAAAOxylpNTVkLa/$_3.JPG?set_id=2",
  description: 'Worn by my grandma',
  request: false,
  sent: false
})

const item47 = await Item.create({
  name: "mouse",
  category: "gaming",
  image: "https://images-na.ssl-images-amazon.com/images/I/71L-ywG9IrL._SX425_.jpg",
  description: 'still functional',
  request: false,
  sent: false
})

const item48 = await Item.create({
  name: "keyboard",
  category: "gaming",
  image: "https://media.wired.com/photos/5b21913a985bbd041c32d13d/master/pass/keyboard-TA.jpg",
  description: 'used less than 200x',
  request: false,
  sent: false
})

const item49 = await Item.create({
  name: "laptop",
  category: "electronics",
  image: "https://cnet2.cbsistatic.com/img/p9d65a6oc5LysgbBLjEznXylPU0=/868x488/2019/04/09/14f91779-c049-4cbe-a4ac-0b42583dc2ca/hp-pavilion-gaming-laptop.jpg",
  description: 'bought last year',
  request: false,
  sent: false
})

const item50 = await Item.create({
  name: "dining table",
  category: "furniture",
  image: "https://www.potterybarn.com/pbimgs/rk/images/dp/wcm/201922/0110/linden-dining-table-belgian-gray-c.jpg",
  description: 'table with chairs',
  request: false,
  sent: false
})

const item51 = await Item.create({
  name: "phone",
  category: "antiques",
  image: "http://www.oldphoneworks.com/images/C/small%202-19.jpg",
  description: 'old functional phone',
  request: false,
  sent: false
})

const item52 = await Item.create({
  name: "television",
  category: "electronics",
  image: "https://icdn2.digitaltrends.com/image/poster-for-5814847752001-3-720x720.jpg",
  description: 'non-glare tv',
  request: false,
  sent: false
})

const item53 = await Item.create({
  name: "a.i",
  category: "electronics",
  image: "https://ichef.bbci.co.uk/news/660/cpsprodpb/1999/production/_92935560_robot976.jpg",
  description: 'real-life a.i',
  request: false,
  sent: false
})

const item54 = await Item.create({
  name: "vr headset",
  category: "electronics",
  image: "https://assets.pcmag.com/media/images/432844-playstation-vr-headset.jpg?width=810&height=456",
  description: 'latest vr headset',
  request: false,
  sent: false
})



await item1.setUser(user1);
await item2.setUser(user1);
await item3.setUser(user1);
await item4.setUser(user1);
await item5.setUser(user1);
await item6.setUser(user1);
await item7.setUser(user1);
await item8.setUser(user1);
await item9.setUser(user1);


await item10.setUser(user2);
await item11.setUser(user2);
await item12.setUser(user2);
await item13.setUser(user2);
await item14.setUser(user2);
await item15.setUser(user2);
await item16.setUser(user2);
await item17.setUser(user2);

await item18.setUser(user3);
await item19.setUser(user3);
await item20.setUser(user3);
await item21.setUser(user3);
await item22.setUser(user3);
await item23.setUser(user3);
await item24.setUser(user3);
await item25.setUser(user3);
await item26.setUser(user3);
await item27.setUser(user3);

await item28.setUser(user4);
await item29.setUser(user4);
await item30.setUser(user4);
await item31.setUser(user4);
await item32.setUser(user4);
await item33.setUser(user4);
await item34.setUser(user4);
await item35.setUser(user4);
await item36.setUser(user4);

await item37.setUser(user5);
await item38.setUser(user5);
await item39.setUser(user5);
await item40.setUser(user5);
await item41.setUser(user5);
await item42.setUser(user5);
await item43.setUser(user5);




  process.exit();
}

seed();
