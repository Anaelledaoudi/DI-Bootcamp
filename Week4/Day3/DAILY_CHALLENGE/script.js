//part 1
const getCarHonda=(carInventory)=>carInventory.find(elm=>elm['car_make']==="Honda")	

let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];

console.log(getCarHonda(inventory));
//take the return value of the getCar function(return obj)
//console the obj into a sentance
const hondaSentance=(elm)=>console.log(`This is a ${elm['car_make']} ${elm['car_model']} from ${elm['car_year']}`)
hondaSentance(getCarHonda(inventory))

//part 2
const sortCarInventoryByYear=(carInventory)=>carInventory.sort((a,b)=>a['car_year']-b['car_year'])
console.log(sortCarInventoryByYear(inventory));