//i couldn't run these code (and the xp too) 
//du to internet connexion stability that didn't let me
//load the all api 

const xhr=new XMLHttpRequest;

(function requestData(){
	xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
    xhr.responseType='json';
    xhr.send();
})()

xhr.onload=()=>{
	if(xhr.status!=200){
		console.log("error status");
	}else{
		console.log("finish loading");
		console.log(xhr.response);
	}
}
const form=document.getElementById('form');
form.addEventListener('submit',retrieveData)
function retrieveData(event){
	const input=event.target.elements.search.value;
	displayGif(input);
}
const elements=document.createElement('div');
function displayGif(data){
  const sunTen='{xhr}&random_id='+data+'&limit=1'
  const img=document.createElement('img');
  img.setAttribute('url',sunTen.img.url);
  document.elements.appendChild(img);
  const btnDel=document.createElement('button')
  btnDel.textContent="Delete";
  document.elements.appendChild(btnDel);
  btnDel.addEventListener('click',deleteGif);
  addBtnDelAll();
}
function deleteGif(evt) {
	const gif=evt.target.previousSibling;
	gif.remove();
}
let count=1;
function deleteAll(){
if(count==1){
  const btnDelAll=document.createElement('button')
  btnDel.textContent="Delete All";
  document.elements.appendChild(btnDelAll);
 }
 else
 	count++;
btnDel.addEventListener('click',deleteAll);
}
function deleteAll(){
	while(element.firstChild){
		element.firstChild.remove();
	}
}
