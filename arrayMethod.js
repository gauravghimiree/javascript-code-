const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];


groceryList.shift();


groceryList.unshift('popcorn');


const list = groceryList.slice(1, 4);
console.log(list);  
console.log(groceryList); 
