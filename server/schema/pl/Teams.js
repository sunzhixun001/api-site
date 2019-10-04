/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Teams', {
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ShortName: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    tableName: 'Teams'
  });
};
