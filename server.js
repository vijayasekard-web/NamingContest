import https from 'https';
import http from 'http';

https.get('https://www.lynda.com',res=>{
  console.log("Response status code is " + res.statusCode)

  res.on('data', chunk=>{
 //   console.log(chunk.toString())
  })
})
console.log('***Server Starts***')
const server = http.createServer();
server.listen(8080);

server.on('request',(req,res) =>{
  res.write('Hello HTTP!\n');
  setTimeout(() => {
    res.write('I can do it :)!\n');
    res.end();  
  },3000);
})