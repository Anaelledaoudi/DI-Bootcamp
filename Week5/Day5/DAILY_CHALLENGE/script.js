//i runned the fillMoney() and it works
//but i couldnt run the convert part
//because of the exception:
//https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c
// /codes 429 (Too Many Requests)
//i think the key isnt available now...

(async function fillMoney(){
const input=document.getElementsByClassName('moneyKind');
const result=await fetch('https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes')
if (result.status!=200) {
	console.log("there is an error while login the money")
}
else{
	const obj=await result.json();
	const{supported_codes}=obj
    for(let i=0;i<supported_codes.length;i++){
    const option=document.createElement('option');
    option.textContent=supported_codes[i];
    const option2=document.createElement('option');
    option2.textContent=supported_codes[i];
    input[0].appendChild(option);
    input[1].appendChild(option2);
    }
}
})()

const form=document.getElementById('form');
form.addEventListener('submit',convert)


async function convert(){
  const from=document.getElementById('fromMoney').value.substring(0, 3);
  const to=document.getElementById('toMoney').value.substring(0, 3);
  const amount=document.getElementById('amount').value;
  const result=await fetch(`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${from}/${to}/${amount}`)
  if (result.status!=200) {
	console.log("there is an error while converting")
  }
  else{
  	const obj=await result.json();
  	const {conversion_result}=obj;
    const result=document.createElement('p');
    const div=document.getElementById('result');
    if(div.hasChildNodes()){
    	div.removeChild(list.firstChild);
    }
    result.textContent=conversion_result;
    result.classList.add('border');
    div.appendChild(result);
  }
}

