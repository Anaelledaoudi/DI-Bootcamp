function ifAnagram(string1,string2){

    for(let i=0;i<string1.length;i++){
       if(string2.includes(string1.charAt(i))&&string2!==""){
         string2=string2.substring(-1,string2.indexOf(string1.charAt(i)))+
                 string2.substring(string2.indexOf(string1.charAt(i))+1,string2.length)
       }
       else 
       	return false;
       return true;
    }
}

console.log(ifAnagram("hello","ole"));