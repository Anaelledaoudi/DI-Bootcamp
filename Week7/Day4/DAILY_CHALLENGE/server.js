const express=require('express');
const bcrypt = require('bcrypt');
const app=express();

app.use('/',express.static(__dirname+'/public'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());



app.listen(3000);

const {fname,lastname,email,username,password}=require('.public/file.js')
app.post('/register', async (req,res)=>{
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
     const user={
        fname:req.body.fname,
        lastname:req.body.lastname,
        email:req.body.email,
        username:req.body.username,
        password:hashPassword
     }
    res.json(user);
  })

  app.post('/login', async (req,res)=>{
    console.log(req.body);
      if((req.body.username).length == 0){
        res.json({msg:'user does not exist'})
      }
      else {
        const match = await bcrypt.compare(req.body.password, data[0].password);
        if(!match){
          res.json({msg:'Wrong Password'})
        }
        else{
          res.json({msg:'LOGIN OK'})
        }
  
      }
  
    })
    .catch(e=>{
      console.log(e);
    })