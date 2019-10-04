/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teams', {
    abbr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cityEn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    conference: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    displayAbbr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    displayConference: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    division: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    isAllStarTeam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isLeagueTeam: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    leagueId: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nameEn: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'teams'
  });
};
