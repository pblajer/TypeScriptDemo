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
    details?: string;
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