// 6. tuples

function process(successfully: boolean): [boolean, string] {
    if (!successfully)
        return [false, 'failed'];
    return [true, 'processed'];
}
const [isSuccess, message] = process(true);