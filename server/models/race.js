const db = require('../config/db');
const raceModel = '../schema/races';
const WowDB = db.Wow;

const Race = WowDB.import(raceModel);

const getRaceList = async function () {
  const raceList = await Race.findAll({});
  return raceList;
}

module.exports = {
  getRaceList
};