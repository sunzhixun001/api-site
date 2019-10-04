const race =require('../models/race');

const getRaceList = async function (ctx) {
  const result = await race.getRaceList();
  ctx.body = result;
};

module.exports = {
  getRaceList
};