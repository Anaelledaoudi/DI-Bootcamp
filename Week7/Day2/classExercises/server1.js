//see initialization on node site for that module
//express creating a server in an easier way
const express=require('express');
const app=express();

//the location to get to the directory public and get the html files via the server
//its request the html and js file of the public directory by the server
//its static its meen that the location change depend of the computer
//the static bring the front end
//the '/' mean the localhost end with/ and its go to home, if it was: /bb,so i woul need to funush it with /bb
app.use('/',express.static(__dirname+'/public'))
console.log(__dirname, __filename);

//we use it in order to access the body after a post request
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.listen(8000, ()=>{
	//happened when im running
	console.log('run on 8000')
})
//nodemon is running by itself when i save!!

//app.get
//app.post
//app.put
//app.delete

//the get method is for the root.
//first enter to the 8000-first door, and then come to the other door that is the api
app.get('/api',(req,res)=>{
	//like the end
	res.send('api route')
})


const {getProducts,setProducts}=require('./modules/data.js')

const products=getProducts();
console.log(products);


//GET - Read all Product
//if its: localhost:8000/api/products,
//its will enter to that door
//we create our first api
app.get('/api/products',(req,res)=>{
  console.log(`${res}`);	
	res.json(products);
})

//GET-Read
//access the HTML
//how to acces this directory by the localhost/shop and its going to the
//path on the computer to the public dir and the shop.html
app.get('/shop',(req,res)=>{	
	res.sendFile(__dirname+'/public/shop.html')
})
//GET-Read
//search?q=anaelle
app.get('/api/products/search',(req,res)=>{
   //req query is an obj with the key and value
   //if i want just the key so i do .q or everything
    const name=req.query.q;
    const filterProducts=products.filter(item=>
    	{
    		return item.name.toLowerCase().includes(name.toLowerCase())
    	})
    if(filterProducts.length===0){
    	return res.status(201).json({msg:'Not Found'})
    }
	res.json(filterProducts)
})

//GET - Read
//an other way to send data to the server instead of query
//what is after the / and after : is a param
//i could do:/api/products/:a/:b
app.get('/api/products/:id',(req,res)=>{
    const pid=req.params.id;
    const product=products.find(item=>{
    	return item.id==pid
    })
    if(!product){
    	return res.status(404).json({msg:'Not Found'})
    }
    console.log(req.params);
	res.json(product)
})

//---------get data from html reach from server
//send into json
//-----res.send()
    //the files are on our server in order to reach them
    //res.sendFile(__dirname+/public/___.html)
    //after i send them (senfile) they are on the client side!!!!
    //and if i want to reach the data from there:
    //i have to go on my html page and from there
    //do get form-fetch the url(localhost../data)get method bring to the url the data
    //i change the fetch url with a global data-this is my query
    //and from thats query i come to my server and get the query with the data
    //req-is what i get
    //res its the response that its will give
    //so if the res from the js is an obj, so if from the server i do res with something else its will response with the response of the server
    //its send to the server a res, the server get this req and do a res to the client with whatever

    //the html is on our server but we need to req for it in order to access we need the static use method, and then we res to de server, the server get the res and make a res back    
    
    //to extract the data from the body if we have an older express so we have to download bodyParser in npm
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
    
    //because its a post request i have to pay attention that in the file has post too
    app.post('/login',(req,res)=>{
        //i get the req.body because what i add on the js post method:body:JSON.stingify(body)
        console.log(req.body)
        res.json({msg:'ok get it from post'})
    })
//CRUD
//Read: GET
//create: POST 
//update: PUT
//delete:DELETE


//POST- create a new product
//the same root could get and post
app.post('/api/products',(req,res)=>{
    console.log(req.body);
    const newProduct={
        id:products.length+1,
        name:req.body.name,
        price:req.body.price
    }
    products.push(newProduct);
    setProducts(products);
    res.json(products)
    
})

//PUT -Update
app.put('/api/products/:id',(req,res)=>{
    const id=req.params.id;
    const index=products.findIndex(item=>{
        return item.id==id
    });
    const updateProduct={
        id:products[index].id,
        name:req.body.name,
        price:req.body.price
    }
    products[index]=updateProduct;

    setProductsProducts(products);
    res.jsom(products)
})


//DELETE-delete a product
app.delete('/api/products/:id',(req,res)=>{
    const id=req.params.id;
    const index=products.findIndex(item=>{
        return item.id=id
    })
    products.splice(index,1);

    setProducts(products);
    res.json(products);
})


//postman.com show the api data
//body
//raw
//and we can add json and send(by post)
//but we need before to add the user.express
//and change text to json sometimes


//import sql files
const {getAllProducts,getProduct,searchProduct,insertProduct}=require('./modules/db.js');

//get all from sql prod
app.get('api/sqlProd',(req,res)=>{
    getAllProducts()
    .then(data=>{
        res.json(data)
    })
    .catch(e=>{console.log(e)})
})
//get a specific prod by id
app.get('/api/sqlProd/:id',(req,res)=>{
    const pid=req.params.id;
    getProduct(pid)
    .then(data=>{
        res.json(data)
    })
})
//prod that include specific letter
app.get('/api/products/search',(req,res)=>{
     const name=req.query.q;
    searchProduct()
   
    res.json()
})
//update by the obj that i create in postman
app.put('/api/products/:id',(req,res)=>{
    const id=req.params.id;
    updateProduct(id,req.body)
    .then(data=>{
        res.json(data)
    })
    .catch(e=>{
        console.log(e)
    })
    const index=products.findIndex(item=>{
        return item.id==id
    });
    const updateProduct={
        id:products[index].id,
        name:req.body.name,
        price:req.body.price
    }
    products[index]=updateProduct;

    setProductsProducts(products);
    res.jsom(products)
})


//----------------------------------
const knex=require('knex');

const db=knex({
    client:'pg',
    connection:{
        host:
        port:
        user:
        password:
        database:dvdrental
    }
})
//all the require should be up
const bcrypt=require('bcrypt');

app.post('/register',async (res,req)=>{
    const salt=await bcrypt.genSalt();
    const hashPassword=await bcrypt.hash(req.body.password,salt);
  saveUser(req.body.email,hashPassword)
  .then(data=>{
    res.json(data)
  })
  .catch(e=>{
    console.log(e);
    res.json({msg:'Email Exist'})})
})

function saveUser(email,password){
     return db('myusers')
  .insert({email:req.body.email,pass:req.body.pass})
  .returning('*')
}

app.post('/login', (res,req)=>{
  getUser(req.body.email)
  .then(data=>{
    console.log(data);
    res.json(data)
  })
})
function getUser(email){
    return db('myusers')
    .select('id','email','password')
    .where({email:email}) 
}

//await bcrypt.compare(req.body.password,data[0].password)


//npm i bcrypt---to encript the password
//npm start always after installing modules

