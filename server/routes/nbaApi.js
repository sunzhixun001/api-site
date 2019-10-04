const team = require('../controllers/team');
const Router = require('koa-router');

const router = Router();

router.get('/teamlist', team.getTeamList);

module.exports = router;