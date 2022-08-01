//Exercise 1
const http=require('http');
const server=http.createServer((req,res)=>{
  res.end(`<h1>This is my first response</h1><h1>This is my second response</h1><p>This is my third response</p>`);

}).listen(3000)