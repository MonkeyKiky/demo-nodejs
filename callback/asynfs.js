/**
 * Created on 2016/7/7.
 */
var fs = require('fs');

fs.readFile('input.txt',function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log('app end');