function getUser(){
	const url=fetch('http://localhost:4000/api/user')
	      .then(res => res.json())
          .then(data => {console.log(data)})
          .catch(error => {console.log(error)}) 
} 
      	
getUser();

function displayUser(user){
 const p=document.createElement('p');
 p.textContent=`${user.firstname }, ${user.lastname}`
 document.body.appendChild(p);
}