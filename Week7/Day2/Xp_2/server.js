// //exercise 1
// const express=require('express');

//  const app=express();
//  app.use(express.static('public'))
//  app.listen(4000);


//  app.get('/api/user',(req,res)=>{
//      const user = {
//          firstname: 'John',
//          lastname: 'Doe'
//     }
//     res.json(user);
//     res.end(user);
//  })

 // //exercise 2

 // const express2=require('express');
 // const app2=express2();

 // app2.listen(5000);

 // app2.get('/api/:id',(req,res)=>{
 //    console.log(req.params)
 // })

 //Exercise 3
 const express3=require('express');
 const app3=express3();

 app3.use(express3.static('publicEx3'))
 app3.listen(5000);

//the localhost main dir redirect to the html page
 app3.get('/',(req,res)=>{
    res.sendFile('publicEx3/index.html')
 })