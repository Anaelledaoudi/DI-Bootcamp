function postData(){
    const fname=document.getElementById('fname');
    const lastname=document.getElementById('lastname');
    const email=document.getElementById('email');
    const username=document.getElementById('username');
    const password=document.getElementById('password');
   
  fetch('http://localhost:3000/register',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({fname,lastname,email,username,password})
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    const ans=document.getElementById('answer');
    ans.innerText=data.msg;
  })
  .catch(e=>{console.log(e);})
}
