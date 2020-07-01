
let array = ["nancy" , "menawer","rahaf", "moudhi", "hussain" ];

function logger(array){
    for (let i = 0; i < array.length; i++) {
    console.log(array [i]);
}
}
logger(array)

let temps1 = [20, 30, 50, 60];
 let value = 40 //threshold - قيمة مبدئيه

 let temps2 = []

 function hottestdays(array, TH ,empty_array) {
     for (let i = 0; i < array.length; i++) {
   if (array [i] > TH){
       empty_array.push(array[i])
   }
         
     }
     return temps2;
 }

  console.log(hottestdays(temps1,value, temps2 ));


  let books = [
  {
      name: "book1",
      ID: 1,
  },
  {
      name: "book2",
      ID: 2,
  },
  {
      name: "book3",
      ID: 3,
  },
  {
      name: "book4",
      ID: 4,
  },
 ];

 let bookId = 2;
//  let bookId = 5

function getbookbyId(bookId, books) {
   for (let i = 0; i < books.length; i++) {
       if (books[i].ID == bookId){
         return books [i];    
   } 
   }
}

console.log(getbookbyId(bookId,books));


let userInput = "";
let output = [];
userInput = prompt("السلعه");
while (userInput !=="انتهيت"){
    
let price = parseFloat(prompt("السعر"));
let quantitiy = parseInt(prompt("الكميه"));

let object = {
name: userInput,
price: price,
quantity: quantitiy,
};
output.push(object);
userInput = prompt("السلعه");
}


for ( let i = 0; i < output.length; i++ ){
console.log(
    output[i].quantity +
     " "+
      output [i].name + 
      " " + 
      output [i].quantity * output [i].price
      );
      totalprice += output[i] .quantity * output[i].price;
}
console.log(totalprice);