//cant require in the front end
//front end-fetch the data 
//back end- get data with require

//front end-browser, back end-server
function getProducts(){
	const url=fetch('http://localhost:8000/api/products');
    url.then(res=>res.json())
   .then(data=>{displayProducts(data)})
}
getProducts();
function displayProducts(arr){
	const root=document.getElementById('root');
    root.textContent='';
    arr.forEach((item,i)=>{
    	const div=document.createElement('div');
    	const h2=document.createElement('h2');
    	h2.textContent=item.name;
    	div.appendChild(h2);
    	root.appendChild(div);
    })
}

function searchProd(){
	const txt=document.getElementById('search').value;
	fetch(`http://localhost:8000/api/products/search?q=${txt}`)
    .then(res=>res.json())
    .then(data=>{displayProducts(data)})
}

//-------------post method to send on the server
const email='blabala'
const password='jjj'
let obj={
    email,
    password
}
//send a res to the server
fetch('http',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    //because of this i'll get on the body
    body:JSON.stringify(obj)
    //same=> body:JSON.stringify({email,password})
    //{msg:'ffff'}----->its an obj
})
//its the response i'll get from the server
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.msg='OK'){
        window.location.href=''
    }
})
.catch(e=>{
    console.log(e);
})


