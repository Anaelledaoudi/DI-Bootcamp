
const btn=document.getElementById('btn');
btn.addEventListener('click',retrieveData);
 
 function retrieveData(){
 	const input=document.getElementById('email').value;
 	const txt=document.getElementById('msg').value;
    console.log(input);
    console.log(txt);

const obj={
	'email':input,
	'msg':txt
 }
 localStorage.setItem('user',JSON.stringify(obj))
 }



