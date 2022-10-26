const http=require('http');

const server=http.createServer((req,res)=>{
    //running after i entered the localhost
    //on the cmd

  console.log('get request fron client')
  console.log(req.url);
  console.log(req.headers); 
  console.log(req.method);
  //if(req.method==='GET'){
  // res.end('<h1></h1>')
  //}
  if(req.url==='/'){
  	res.end('<h1>Home page</h1>')  	
  }
  else if(req.url==='/about'){
  	res.end('<h1>About page</h1>')
  }
  res.end('Hello from server')

}).listen(5000,()=>{
	//callback function, happened
	//when the server is running
    //right after the cmd
 console.log('running on port 5000')
})

//cmd- node server.js
//and

//in order to install all module we need package json: 
//to create json: npm init -y
//npm i express 
//npm i -D nodemon: to make life easier and not rerun all the time on the cmd
//and on the start change nodemon instead of node
//npm start and then its run the nodemon