const arrTasks=JSON.parse(localStorage.getItem("allTasks"))||[];
const form=document.getElementById('newTask');
form.addEventListener('submit',retrieveData);


function retrieveData(evt){
   evt.preventDefault();

   const task={
   	        name:event.target.name.value,
              description:event.target.description.value,
              startDate:event.target.startDate.value,
              endDate:event.target.endDate.value,
              isCompleted:false
              }
   arrTasks.push(task);
   localStorage.setItem("allTasks",JSON.stringify(arrTasks));
   console.log(arrTasks);
   location.replace('schedule.html')
}