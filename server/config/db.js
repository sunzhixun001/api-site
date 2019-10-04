const Sequelize =require('sequelize');

const Wow = new Sequelize(`mysql://root:kobe082439@localhost/wow`, {
  define: {
    timestamps: false
  }
});
const NBA = new Sequelize(`mysql://root:kobe082439@localhost/nba`, {
  define: {
    timestamps: false
  }
});
const PL = new Sequelize(`mysql://root:kobe082439@localhost/pl`, {
  define: {
    timestamps: false
  }
});
module.exports = {
  Wow,
  NBA,
  PL
};