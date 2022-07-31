const largeNumber = 356;

function currentDateTime(){
	const today=new Date();
	console.log(today);
}

//export an obj with the largest num
module.exports={
	largeNumber,
	currentDateTime
}