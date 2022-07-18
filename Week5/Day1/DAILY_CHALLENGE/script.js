
let form=document.getElementById("form");
form.addEventListener("submit",retrieveData);
function retrieveData(event){
event.preventDefault();
const name=document.getElementById("name").value;
const lastName=document.getElementById("lastName").value;
console.log(name,lastName);
const obj={
	userName:name,
	userLastName:lastName	
}
 const toJson=JSON.stringify(obj);
 let p=document	.createElement("p");
 p.textContent=toJson;
 document.body.appendChild(p);
}