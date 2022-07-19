const xhr=new XMLHttpRequest;

(function requestData(){
	xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=sun&rating=g&offset=2&limit=10&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    xhr.responseType='json';
    xhr.send();
})()

xhr.onload=()=>{
	if(xhr.status!=200){
		console.log("error status");
	}else{
		console.log("finish loading");
		console.log(xhr.response);
		sunGifsDisplay(xhr.response);
	}
}
function sunGifsDisplay(data){
	console.log(data);
}
