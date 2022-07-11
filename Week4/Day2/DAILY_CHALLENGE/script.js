let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
const displayGroceries=()=>groceries['fruits'].forEach(element=>console.log(element))
displayGroceries();

const cloneGroceries=()=>{
  const user=client;
  client="Betty";
 console.log(user);
 //no because when the value is changing its pointing on a new adress in the stack
 const shopping=groceries;
 groceries['totalPrice']="35$"; 
 console.log(shopping['totalPrice']);
 //yes because an object is not a simple type of variable; its more complex one like an array... and if you want to assign a value you have to do it deeper because they are pointing on the same addrees on the head and if you change a value its will change for both
 groceries['other']['payed']=false;
 console.log(shopping['other']['payed']);
 //yes because of the same reason as before


} 
  cloneGroceries();