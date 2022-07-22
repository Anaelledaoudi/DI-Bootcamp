const btn=document.getElementById('btn');
const container=document.getElementById('container');
btn.addEventListener("click", displayCharacter);


 function spinnerWait(){
 	while(container.firstChild){
 		container.removeChild(container.firstChild);
 	}
 	const spinner= document.createElement('i');
 	spinner.classList.add('fa-solid','fa-spinner','fa-spin-pulse','myClass');
 	container.appendChild(spinner);
 }
 async function retrieveData(){
 	spinnerWait();
	const randomChar=Math.floor(Math.random()*83)+1;
	const result=await fetch(`https://www.swapi.tech/api/people/${randomChar}`)
    if(result.status!==200){
    	throw new Error("Oh Not! That person isnt available.")
    }
    else{
    	const char=await result.json();
    	return char.result;
    }
}

  
  async function homeWorld(character){
  	const{properties:{homeworld}}=character
    const result=await fetch(homeworld);
     if(result.status!==200){
    	throw new Error("Oh Not! That person isnt available.")
    }
    else{
    	const home=await result.json();
    	return home.result;
    }
}

  async function displayCharacter(){
  	try{
  	const details=await retrieveData();
  	const homeDetail=await homeWorld(details);
  	const{properties:{height,gender,birth_year,name}}=details;
    const{properties:{name:homeName}}=homeDetail;
    const newP=[];
    newP[0]=document.createElement('h1')
    for(let i=1;i<=4;i++){
    	newP[i]=document.createElement('p');
    }
    newP[0].textContent=`${name}`
    newP[1].textContent=`Height: ${height}`
    newP[2].textContent=`Gender: ${gender}`
    newP[3].textContent=`Birth Year: ${birth_year}`
    newP[4].textContent=`Home World: ${homeName}`
    container.removeChild(container.firstChild);
    for(let i in newP){
      container.appendChild(newP[i]);
      newP[i].classList.add("character");
    }
    }catch(err){
      const error=document.createElement('p');
      error.textContent=err.message;
      error.classList.add("character");
      container.removeChild(container.firstChild);
      container.appendChild(error);
    }
  }

