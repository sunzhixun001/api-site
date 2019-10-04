const team =require('../models/nba/team');

const getTeamList = async function (ctx) {
  const result = await team.getTeamList();
  ctx.body = result;
};

module.exports = {
  getTeamList
};