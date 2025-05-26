// 7. exending module

//const Koa = require('koa');
//const log4js = require('log4js');
import Koa from 'koa';
import * as log4js from 'log4js';

log4js.configure({
    appenders: { myConsoleAppender: { type: 'console' } },
    categories: { default: { appenders: ['myConsoleAppender'], level: log4js.levels.DEBUG.levelStr }}
});
declare module 'koa' {
    interface Context {
        log: log4js.Logger;
    }
}
const app = new Koa();
app.use(async (ctx: Koa.Context, next: Koa.Next) => {
    ctx.log = log4js.getLogger();
    return next();
});
app.use(async function(ctx: Koa.Context) {
    ctx.log.info('hello');
    ctx.status = 200;
    ctx.body = 'yay';
});
app.listen(8080);