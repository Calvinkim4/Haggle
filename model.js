const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize({
  database: 'haggle_db',
  dialect: 'postgres',
  define: {
    underscored: true,
}});

const User = sequelize.define('user', {
   username: {
      type: Sequelize.STRING,
      allowNull: {
        args: false,
        msg: 'username is required'
      },
      unique: {
        args: true,
        msg: 'username must be unique'
      }
    },
  email: {
    type: Sequelize.STRING,
    allowNull: {
      args: false,
      msg: 'email is required'
    },
    unique: {
      args: true,
      msg: 'email must be unique'
    },
    validate: {
      isEmail: {
        args: true,
        msg: 'email format is invalid'
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: {
      args: false,
      msg: 'password is required'
    }
  },
});

const Item = sequelize.define('item', {
  name: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.TEXT
  },
  request: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  sent: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

Item.belongsTo(User);
User.hasMany(Item, {onDelete: 'cascade'});

User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12);
  user.password = hashedPassword;
});

module.exports = {
  User,
  Item,
  sequelize
};
