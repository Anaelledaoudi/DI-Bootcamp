// //1st Challenge
// async function callPromises(arrPro){
// 	try{
// 	console.log(await Promise.all(arrPro));
//      }
//      catch(error){
//      	console.log(error.message)
//      }
// }
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// callPromises([promise1,promise2,promise3])

//2nd challenge
let form=document.getElementById("form");
form.addEventListener("submit",display);

function retrieveData(p){

  const lat=document.getElementById("latitude"+p).value;
  const long=document.getElementById("longitude"+p).value;
  return [lat,long]; 
}


async function retrieveSunrise(arr){
    const api=await fetch(`https://api.sunrise-sunset.org/json?lat=${arr[0]}&lng=${arr[1]}`);
    const obj=await api.json();
    return obj.results.sunrise;
}

async function call(){
    const first= await retrieveSunrise(retrieveData("Fir"));
    const sec=await retrieveSunrise(retrieveData("Sec"));
    return [first,sec];
 }

 async function display(){
 	const arr=await Promise.all(call().results);
    let p=document.createElement('p');
    p.textContent=`first city sunrise:${arr[0]}. 
                   second city sunrise:${arr[1]}`
    document.body.appendChild(p);
 }
 




