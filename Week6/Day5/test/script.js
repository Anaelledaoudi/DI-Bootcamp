//1
let arr = [3, 7, 10];
console.log(arr[1]);
//2
let arrNums = [1, 2, 3, 4, 5];
arrNums.splice(2, 0)
console.log(arrNums)
//[1,2,3,4,5]
//3
 const oneTwoThree = [1, 2, 3];
 const sevenEightNine = [7, 8, 9];
 const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
 console.log(all)
 //all[4,5,6,1,2,3,7,8,9]

 //4
  let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end);
   //callaway

   //5
   const x = function(a, b){
       return a*b;
    }
    //yes we can its called a function expression
    //you have to invoke it after you create a function
    //and call it by his variable name

    //6
    //you cant create a variable with no key world
    //you can defined a variable in the global scope and 
    //then use into functions, the functions and other
    //inner scopes know the variables in the global scope

    //7
    //yes we can
     function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");
    //Hello JavaScript!

    //8
    const sum=(num1,num2)=>num1+num2;
    console.log("the answer to everything is", sum(42,0))
    //9
    function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo());
     //Poppin bottles, a function that contain 
     //an inner function and its returning the result of 
    // the inner function, the inner knows the outer function
    //but not the inverse
    
    //10
    //click

    //11
     //yes

     //12
    
    const addPara=()=>{
    	const p=document.createElement('p');
        p.textContent='Test in all notions';
        p.addEventListener('mouseover',changeRed);
        document.body.appendChild(p);
    }
    const btn= document.getElementById('btn');
    btn.addEventListener('click',addPara);
     
     function changeRed(evt){
      evt.target.style.color='red';
     }
     //14
     //passed=false
     
     //15
     //[50,88]

     //16
       const input = [ 1, 2, 3, 4, 5 ];
       const newArr=input.map(elm=>elm*elm)
       console.log(newArr);
     //17 --check back
     let initials='';
     const name = 'George Raymond Richard Martin';
     name.split(" ").forEach(elm=>initials+=elm.charAt[0])
     console.log(initials);
    //Object and Classes
    //18
    //by reference, its not simple as string,int...
    //its complex(like arr to);
    //the reference is in the stack and its pointing
    //to the value in the head and the if we copy the object or the arr
    //and changing the value of one its will also change
    //the value in the oders-(need to do deep copy)

    //19
    //Chocolate Cake is for $10
    //20
    class Item{
     constructor(name,price){
    	this.name=name;
    	this.price=price
      }
    	displayInfo() {
    	 console.log(this.name + " is for $ " + this.price);
    	}
    }
    const cake = new Item("Chocolate Cake", 10);
     cake.displayInfo();
     //21
     //SUCCESS!

    //22
    //OK

    //23
    //we assignes a value of 'first!' to result
    //we created a promise that will resolve by 'done!'
    //after 1s, we reassign a value to result of 
    //the previous promise and by doing await i get 
    //the result of the promise(done!)
    //and i console.log(result)

    //24
    async function retrieveDate(){
    	const res=await fetch('https://catfact.ninja/fact');
       if(res.status!=200){
       	throw new Error('dont exist')
       }
       else{
       cat=(await res.json());
       display(cat.fact)
       }
    }
    function display(sent){
    	const para=document.createElement('p');
    	para.textContent=sent;
    	document.body.appendChild(para);
    }
    retrieveDate()





