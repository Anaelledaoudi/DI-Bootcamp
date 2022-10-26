//npm i knex pg

const knex=require('knex');

const db=knex({
    //driver to connect to data
	client:'pg',
	connection:{
		host:'127.0.0.1',
		port:'5432',
		user:'postgres',
		password:'Anaelle3',
		database:'dvdrental'
	}
});

//all sql methods are returning promises
const getProduct=(id)=>{
	return db('products')
	.select('id','name','price')
	.where({id:id})
}

const getAllProducts=()=>{
	return db('products')
	.select('id','name','price')
	.orderBy('name')
}
const searchProduct=(product_name)=>{
  return db('products')
   .select('id','name','price')
   .whereILike('name',`${product_name}%`)
}
const insertProduct=(product)=>{
	return db('products')
	//.insert('name:ddf, value:450')----its an obj
	.insert(product)
	.returning('*')
}
const updateProduct=(product_id,product)=>{
  .update(product)
  .where({id:product_id})
  .returning('*')
}
 module.exports={
 	getAllProducts,
 	getProduct,
 	searchProduct,
 	insertProduct,
 	updateProduct
 }

