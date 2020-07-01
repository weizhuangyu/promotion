var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
console.log(decoder)
var buf1 = Buffer.from([0xE5, 0xBA, 0x8A, 0xE5, 0x89, 0x8D, 0xE6, 0x98, 0x8E, 0xE6, 0x9C])
console.log(decoder.write(buf1))

var buf2 = Buffer.from([0x88, 0xE5, 0x85, 0x89, 0xEF, 0xBC, 0x8C, 0xE7, 0x96, 0x91, 0xE6])
console.log(decoder.write(buf2))

const str = 'aGVsbG8gd29ybGQ='

var b = Buffer.alloc(str.length, str)

console.log(b)

var buf1 = Buffer.from('test');
var buf2 = buf1.slice(1, 3).fill('xx');
console.log("buf2 content: " + buf2.toString()); // xx
console.log("buf1 content: " + buf1.toString()); // txxt


var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('ABCDEF');

buf1.copy(buf2, 2);
console.log(buf2.toString()); //Abcdef

const buf = Buffer.alloc(1234);

// console.log(buf.length);
// Prints: 1234

buf.write('some string', 1, 'utf8');

console.log(buf);