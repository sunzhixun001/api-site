const Router = require('koa-router');
const router = Router();
const api = require('./server/routes/api'); 
const nbaApi = require('./server/routes/nbaApi'); 
const plApi = require('./server/routes/pl'); 

const Koa = require('koa');
const app = new Koa();

router.use('/api/wow', api.routes());
router.use('/api/nba', nbaApi.routes());
router.use('/api/pl', plApi.routes());


app.use(router.routes());

app.listen(3001, () => {
  console.log('服务启动成功,端口：3001,地址：http://localhost:3001');
});
