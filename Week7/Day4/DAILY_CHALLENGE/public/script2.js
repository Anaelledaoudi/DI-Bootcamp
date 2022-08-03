const sendLogin = () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('http://localhost:3000/login',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({username,password})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      const root = document.getElementById('root');
      root.innerText = data.msg;
    })
    .catch(e=> {
      console.log(e);
    })
  }