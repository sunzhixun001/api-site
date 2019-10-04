const team =require('../../../models/pl/team');

const getTeamList = async function (ctx) {
  const result = await team.getTeamList();
  ctx.body = result;
};

module.exports = {
  getTeamList
};