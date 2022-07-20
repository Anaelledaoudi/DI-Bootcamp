//ex 1
async function retrieveData(){
     const result=await fetch("https://www.swapi.tech/api/starships/9/")
     const obj=await result.json();
     console.log(obj)
}
retrieveData(); 
//ex 2
//calling
//(after 2 s)resolved(and its actually wait for a value because of the word "await")

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

