const race = require('../controllers/race');
const Router = require('koa-router');

const router = Router();

router.get('/racelist', race.getRaceList);

module.exports = router;