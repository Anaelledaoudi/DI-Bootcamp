const express=require('express');
 const app=express();

 app.listen(8000);

 app.use(express.static('public'));

 app.get('/aboutMe/:hobby',(req,res)=>{
    const id=req.params.hobby;
    
    if(typeof id==="string"){
        res.json(id);	
    }
    else{
        res.status(404).json({msg:'Not a good input'});
    }
 })
  app.get('/pic',(req,res)=>{
 	res.sendFile(__dirname+'/public/pic.html');
 })
   app.get('/form',(req,res)=>{
 	res.sendFile(__dirname+'/public/form.html')
 })
    app.get('/formData',(req,res)=>{
 	res.sendFile(__dirname+'/public/formData.html')
 })