const express=require('express');
const app=express();

app.listen(3000)

app.get('/',(req,res)=>{
	res.send(`<h1>This is an HTML tag</h1>`)
})