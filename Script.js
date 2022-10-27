function ts(text1) {
    var result = '';
    text1.map(function (text, index) {
        result += (index ? ' ' : '') + text;
    });
    return result;
}
var tes = [1, 'data', 3, 'result'];
console.log(ts(tes));
