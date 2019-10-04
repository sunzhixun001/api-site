const db = require('../../config/db');
const teamModel = '../../schema/teams';
const NBADB = db.NBA;

const Team = NBADB.import(teamModel);

const getTeamList = async function () {
  const teamList = await Team.findAll({});
  return teamList;
}

module.exports = {
  getTeamList
};