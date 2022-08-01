const user=localStorage.getItem('user');

function display(){
  const obj=JSON.parse(user);
  const p=document.createElement('p');
  p.textContent=`${obj.email} sent you a message "${obj.msg}".`;
  document.body.appendChild(p);
}

display();