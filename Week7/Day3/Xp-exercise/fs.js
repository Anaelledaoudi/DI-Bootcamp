const fs=require('fs');
const data=fs.readFileSync(__dirname+'/data.txt','utf-8');
console.log(data);

const txt='Bye Bye Bye';
fs.writeFileSync(__dirname+'/text2.txt',txt);
txt2=' Buy orange juice';
fs.writeFileSync(__dirname+'/text2.txt',txt+txt2);   

fs.unlink(__dirname+'/text2.txt',(err)=>{
   console.log(err);
});

