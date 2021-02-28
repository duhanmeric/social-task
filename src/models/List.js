module.exports = (sequelize,DataTypes) => {
  const List = sequelize.define('List', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    editing: DataTypes.BOOLEAN,
    locked: DataTypes.BOOLEAN,
  })

  return List;
}


