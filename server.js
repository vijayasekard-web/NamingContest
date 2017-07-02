import config from './config';
import express from 'express';
import fs from 'fs';
import apiRouter from './api';

const server = express();

server.set('view engine','ejs')



server.get('/',(req,res)=>{
  res.render('index',{
    content:'<i>Helo</i> Express and EJS!'
  })
})

// server.get('/about.html',(req,res)=>{
//   fs.readFile('./about.html',(err,data)=>{
//     res.send(data.toString());
//   })
// })

server.use(express.static('public'))

server.use('/api',apiRouter);

server.listen(config.port, ()=> {
  console.info('Express listening on port ', config.port)
})