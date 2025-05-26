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