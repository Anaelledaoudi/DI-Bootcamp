// const products=[
// {id:1, name:'iphone',price:800},
// {id:2, name:'samsung',price:500},
// {id:3, name:'lg',price:400}
// ]


//take the json array and write it on the file
const fs=require('fs');
const getProducts=()=>{
	try{
		const products=fs.readFileSync(__dirname+'/products.json','utf-8');
		return JSON.parse(products)
	}
	catch(e){
		return []
	}
}
const setProducts=(arr)=>{
 try{
 	fs.writeFileSync(__dirname+'/products.json',JSON.stringify(arr));
 }catch(e){
 	console.log(e);
 }
}

module.exports={
	getProducts,
	setProducts
}