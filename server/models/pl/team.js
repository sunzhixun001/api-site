const db = require('../../config/db');
const teamModel = '../../schema/pl/Teams';
const PLDB = db.PL;

const Team = PLDB.import(teamModel);

const getTeamList = async function () {
  const teamList = await Team.findAll({});
  return teamList;
}

module.exports = {
  getTeamList
};