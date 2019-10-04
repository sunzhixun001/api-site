/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('races', {
    Id: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Src: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'races'
  });
};
