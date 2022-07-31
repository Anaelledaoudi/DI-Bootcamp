(function displayTasks(){
   const data=localStorage.getItem("allTasks");
   const toObj=JSON.parse(data)
   let count=1;
   for(let item of toAsc(toObj)){
   const{name,description,startDate,endDate,isCompleted}=item
  
   const start=new Date(startDate);
   const div=document.createElement('div');
   const input=document.createElement('input');
   const label=document.createElement('label');
   const startFormat=start.toString();
   input.setAttribute('type','checkbox');
   input.setAttribute('name',`task${count++}`);
   label.textContent=`${name}- ${startFormat.substring(0,startFormat.search("GMT"))}, ${getDiffDates(start)} days left`
   document.body.appendChild(div);
   label.setAttribute('for',`task${count++}`);
   const i=document.createElement('i');
   i.classList.add("fa-solid","fa-pen");
   i.addEventListener('click',edit);
   div.appendChild(i);
   div.appendChild(input);
   div.appendChild(label);
   div.classList.add('backRed');
   passed(div,endDate);
   div.addEventListener('click',()=>{displayDescription(event,description); check(event,isCompleted);})
   const btn=document.createElement('button');
   btn.textContent='Delete';
   btn.addEventListener('click',deleteTask);
   div.appendChild(btn);
   }

})()
function getDiffDates(startDate){
   const now=new Date();
   //get the diff between now and the start of the event
   const utc1 = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
   const utc2 = Date.UTC(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
   return Math.floor((utc2 - utc1) /(1000 * 60 * 60 * 24)) ;
}

function displayDescription(evt,description){
   const p=document.createElement('p');
   p.textContent=description;
   p.classList.add('dropdown-content');
   evt.target.appendChild(p);
}

function check(evt,isCheck){
  isCheck=evt.target.checked;
  const elm=document.getElementsByName(evt.target.name)
  if (isCheck){
    elm[0].parentElement.classList.remove('backRed');
    elm[0].parentElement.classList.add('backGreen');

  }
  else{
   elm[0].parentElement.classList.remove('backGreen');
   elm[0].parentElement.classList.add('backRed');
  }
  //const{path:{0:{checked}}=evt;
  
}
function toAsc(arr){
   console.log(arr);
 for(let i=0;i<arr.length;i++){  
   for(let j=i+1;j<arr.length;j++){
      if(arr[i].startDate>arr[j].startDate){
         let temp=arr[i];
         arr[i]=arr[j];
         arr[j]=temp
      }
   }
 }
   console.log(arr);
   return arr;
}
function passed(div,end){
 const now=new Date();
 const endDate=new Date(end);
 if(endDate<now){
   div.classList.add('backGrey');
 }
}

function deleteTask(evt){
   if (confirm('Are you sure you want to delete this task?')) {
      const div=evt.target.parentElement;
      div.remove();
   } else {
      console.log('nothing happened');
   }  
}
//will continue after because i get some problem doing that
function edit(){
   const input=document.createElement('input');
   input.setAttribute('type','text');
   document.body.appendChild(input);
   console.log('aaa')
}