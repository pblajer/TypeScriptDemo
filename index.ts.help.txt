//note: no 'use strict', what about .js?
export {}; //gotta export sth

console.log('hello');

/*
// 1. Basic example

let x = 0;
x = '1';
x = 2;
let y: boolean;
y = true;
console.log(x + y);

/* end 1 */

/*
// 2. function

function stringsToUpperCase(str1: string, str2: string): string {
    str2.concat(str1).toUppercase();
}

stringsToUpperCase('bar');

/* end 2 */


/*
// 3. interfaces and classes

interface Response {
    status: string;
}
interface Response {
    details?: string;
}
interface ResponseWithData<T extends object> extends Response {
    readonly data: T;
}
class HttpResponse implements ResponseWithData<Buffer> {
    details?: string = 'none';
    protected httpCode: number = 200;

    constructor(
        public status: string,
        readonly data: Buffer
    ) {
    }
}
abstract class DbResponse implements Response {
    status: string;
    details?: string;
}
class DbResponseImpl extends DbResponse {
    constructor() {
        super();
    }
}
const httpResponse = new HttpResponse('ok', Buffer.from('abcdef', 'hex'));
const reponse: Response = {
    status: 'no ok',
    details: 'very bad',
};

/* end 3 */


/*
// 4. Types

interface Response {
    status: string;
    details?: string;
}
type Password = string;
type Id = string | number;
type ReadOnlyResponseWithHeaders = Readonly<Response & { headers: Map<string, string> }>;

let id: Id;
if (typeof id === 'string') {
    id = id.toUpperCase();
}
else {
    id *= 2;
}
let ids: (string | number)[] = [1, 'bob', 3];
function httpGet(url: URL) {
}
function httpGet(url: string) {
}

/* end 4 */


/*
// 5. Enums

enum UpdateType {
    Public,
    Early,
    EarlyAccess
}

let updateType: UpdateType
switch(updateType) {
    case
    //default:
    //    const neverUpdateType: never = updateType;
}

/* end 5 */


/*
// 6. tuples

function process(successfully: boolean): [boolean, string] {
    if (!successfully)
        return [false, 'failed'];
    return [true, 'processed'];
}
const [isSuccess, message] = process(true);

/* end 6 */


/*
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

/* end 7 */


/*
// 8. Omit

interface EncryptedPlatformKeys {
    rawNoSignature: Buffer;
    signature: Buffer;
    header: object;
    keySlotCount: number;
    keyCount: number;
    platformCertificateHash: Buffer;
    encryptedWrappingKey: Buffer;
    wrappedPlatformKeys: Buffer;
    securityProperties: number;
}
const partialEPK: Omit<EncryptedPlatformKeys, 'signature' | 'rawNoSignature'> = {
    header: {},
    keySlotCount: 1,
    keyCount: 1,
    platformCertificateHash: Buffer.from('abcdef', 'hex'),
    encryptedWrappingKey: Buffer.from('abcdef', 'hex'),
    wrappedPlatformKeys: Buffer.from('abcdef', 'hex'),
    securityProperties: 0x83,
};
const epk: EncryptedPlatformKeys = {
    ...partialEPK,
    rawNoSignature: Buffer.from('abcdef', 'hex'),
    signature: Buffer.from('abcdef', 'hex')
};
//more utility types: https://www.typescriptlang.org/docs/handbook/utility-types.html
/* end 8 */


/*
// 9. constructor function parameter

class NumberHolder {
    constructor(public nr: number) {}
}
function objectCreator<T>(factory: new (param: number) => T): T {
    return new factory(1);
}
const nrHolder = objectCreator(NumberHolder);
console.log(nrHolder.nr);
/* end 9 */


/*
// 10. using/dispose

class Reader implements Disposable {
    constructor() {
        console.log('get some external resource');
    }

    func(): void {
        console.log('do sth with external resource');
    }

    [Symbol.dispose](): void {
        console.log('release external resource');
    }
}
using reader = new Reader();
reader.func();
//btw async possible too
/* end 10 */


/*
// 11. Namespace

namespace MyNamespace {
    export function func() {
    }
}
namespace MyOtherNamespace {
    export function func() {
    }
}
MyNamespace.func();
MyOtherNamespace.func();

/* end 11 */


/*
// 12. JS Interop

const other = require('./helloWorld');

other();

/* end 12 */
