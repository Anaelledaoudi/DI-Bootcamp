//ex1
// function compareToTen(num){
// 	return new Promise((resolve,reject)=>{
// 		if(num<10){
// 			resolve("good")
// 		}
// 		else{
// 			reject("Not good")
// 		}
// 	})
// }
// compareToTen(12)
// .then(evt=>console.log(evt))
// .catch(error=>console.log(error))
//ex2
//first option
const itSelf=new Promise((resolve,reject)=>{
	setInterval(()=>resolve("success"),4000)
})
itSelf.then(res=>console.log(res))
      .catch(console.log("Ooops something went wrong"))

//second option
// const self=Promise.resolve("success")
// self.then(res=>console.log(res))

//ex3
const resolveItself=Promise.resolve(3);
resolveItself.then(res=>console.log(res))

const rejectItself=Promise.reject("Boo!")
rejectItself.then(res=>console.log(res))
.catch(error=>console.log(error))


