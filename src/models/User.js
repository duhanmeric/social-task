const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'));

function hashPassword(user,options) {
  const SALT_FACTOR = 8;

  if(!user.changed('password')) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then(salt => bcrypt.hashAsync(user.password, salt, null))
    .then(hash => {
      user.setDataValue('password', hash);
    })
}

module.exports = (sequelize,DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isProfileSecret: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
    }
  })

  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }

  User.associate = function(models){
    User.hasMany(models.List)
  }


  return User;
}
