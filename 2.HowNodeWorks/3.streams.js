// const { error } = require('console');
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  //💥Solution 1
  // works for small stuff big might crash, more user and big data
  // fs.readFile('2.HowNodeWorks/first.txt', 'utf-8', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  //   console.log(req.url);
  //   console.log('done');
  // });

  //💥solution 2
  // const readable = fs.createReadStream('2.HowNodeWorks/first.txt');
  // readable.on('data', (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on('end', () => {
  //   res.end();
  // });
  // readable.on('error', (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('File Not Found!........');
  // });

  //💥solution 3
  const readable = fs.createReadStream('2.HowNodeWorks/first.txt');
  readable.pipe(res);
  //readableSource.pipe(writableDestination)
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server Started.....');
});
