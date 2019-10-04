const team = require('../../controllers/pl/team');
const Router = require('koa-router');

const router = Router();

router.get('/teamlist', team.getTeamList);

module.exports = router;