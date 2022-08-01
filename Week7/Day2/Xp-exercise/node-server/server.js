//Exercise 2
const {user}=require('./object.js');
const http=require('http');
const server=http.createServer((req,res)=>
{
	res.end(`${JSON.stringify(user)}`);
}).listen(8080)