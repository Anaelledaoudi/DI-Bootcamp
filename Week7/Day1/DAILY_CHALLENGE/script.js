//import the obj containing the largest num
const obj=require('./main.js');
const b = 5;
//retrieve the num and add it to b
sum=obj.largeNumber+b;
console.log(sum);

//get the module http to create a server
const http=require('http');
const server=http.createServer((req,res)=>{
	console.log("I'm listening");
	//set the type of the res
	res.setHeader('Content-Type','text/html');
	//status
	res.writeHead(200);
	//what the res doing
	res.end(`<html><body><p>My Module is ${sum}</p><h1>Hi there at the frontend</h1></body></html>`)
}).listen(3000);

//other server that will get the current date
const httpDate=require('http');
const serverDate=httpDate.createServer((req,res)=>{
   res.setHeader('Content-Type','text/html');
   res.writeHead(200);
   res.end(`<html><body><p>The date and time are currently ${obj.currentDateTime}</p></body></html>`)
}).listen(8080)