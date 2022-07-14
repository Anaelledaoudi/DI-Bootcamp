 const robots = [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            image: 'https://robohash.org/1?200x200'
          },
          {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            image: 'https://robohash.org/2?200x200'
          },
          {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            image: 'https://robohash.org/3?200x200'
          },
          {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
            image: 'https://robohash.org/4?200x200'
          },
          {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
            image: 'https://robohash.org/5?200x200'
          },
          {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
            image: 'https://robohash.org/6?200x200'
          },
          {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
            image: 'https://robohash.org/7?200x200'
          },
          {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
            image: 'https://robohash.org/8?200x200'
          },
          {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
            image:'https://robohash.org/9?200x200'
          },
          {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
            image:'https://robohash.org/10?200x200'
          }
          ];

(function(){
    const robotContainer=document.getElementById("robotGrid");
    robots.forEach((elm,index)=>{
       const robotDiv=document.createElement("div");
       robotDiv.classList.add("card")
       const robotPic=document.createElement("img");
       robotPic.setAttribute('src',elm.image)
       robotPic.classList.add("picRobot")
       const name=document.createElement("p");
       name.classList.add("robotName")
       name.textContent=elm.name;
       const email=document.createElement("p");
       email.textContent=elm.email
       robotContainer.appendChild(robotDiv);
       robotDiv.appendChild(robotPic);
       robotDiv.appendChild(name);
       robotDiv.appendChild(email);
       robotDiv.setAttribute('id','robot'+(index+1))
    })
})()

const inputRobot=document.getElementById("searchRobot");
inputRobot.addEventListener("input",filterRobot);

function filterRobot(evt){
 //if(evt.target)
 console.log(evt);
   const robotArray=robots.filter(elm=>elm['name'].includes(evt.target.value.charAt(0).toUpperCase()+evt.target.value.slice(1).toLowerCase()))
   console.log(robotArray);
   deleteCard(robotArray);
 }
 function deleteCard(robotArray){
    let found;
   robots.forEach(elm=>{
    found=false;
    for(let i=0;i<robotArray.length&&found==false;i++){
      if(elm.id===robotArray[i].id){
        found=true;
      }
      }
      const currentRobot=document.getElementById("robot"+elm.id);
      if(found===false){
        console.log(elm);
        currentRobot.classList.add("disappear");
      }
      if(found===true){
        currentRobot.classList.remove("disappear");
      }
  })
 }

 // function filterRobot(evt){
 //  debugger
 //   const robotArray=robots.filter(elm=>{
 //    if(elm['name'].startsWith(evt.target.value))
 //  return elm
 // })
   
   
 //    console.log(robotArray) 
 // }
