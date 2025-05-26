// 9. constructor function parameter

class NumberHolder {
    constructor(public nr: number) {}
}
function objectCreator<T>(factory: new (param: number) => T): T {
    return new factory(1);
}
const nrHolder = objectCreator(NumberHolder);
console.log(nrHolder.nr);