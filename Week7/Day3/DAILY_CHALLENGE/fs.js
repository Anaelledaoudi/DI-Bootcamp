const fs=require('fs');
const dir=fs.readFileSync(__dirname+'/RightLeft.txt','utf-8');
console.log(dir);
let sum=0;
let count=1
function steps(){
for(let i=0;i<dir.length;i++){
    if(sum===-1&&count==1){
        console.log(`${i} steps to reach -1`);
        count++;
    }
    if(dir[i]==='>'){
        sum+=1;
    }
    else{
        sum-=1;
    }
}
toRightOrToLeft(sum);
}

function toRightOrToLeft(n){
    if(n>1){
      console.log(`${n} steps to the right`)
    }
    else{
        console.log(`${n} steps to the left`)
    }
}

steps();