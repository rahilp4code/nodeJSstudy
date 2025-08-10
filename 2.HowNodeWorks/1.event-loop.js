const fs = require('fs');
const crypto = require('crypto');

const date = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log('hii its Timeout 1'), 0);
setImmediate(() => console.log('hii its Immediate 1'));

fs.readFile('txt/first.txt', 'utf-8', () => {
  console.log('I/O Finished');
  console.log('_________________');

  setTimeout(() => console.log('hii its Timeout 2'), 0);
  setTimeout(() => console.log('hii its Timeout 3'), 3000);
  setImmediate(() => console.log('hii its Immediate 2'));

  process.nextTick(() => console.log('Process NextTick'));

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - date, 'time taken in ms');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - date, 'time taken in ms');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - date, 'time taken in ms');
  });
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - date, 'time taken in ms');
  });
});

console.log('hii i am last');
