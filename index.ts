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