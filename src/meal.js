function nameMenuItem(string) {
 return `Delicious ${string}`;
}
//Add new menu item 'french toast'
//Interpolate to be Delicious
//Add price to menu items
function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}
//Initialize addIngredients isFunction
//contain an array
//Function deep equal has two arguments
//PUT Cheese into array
//Type aaray name and use method to add cheese
function addIngredients(string, ingredients) {
  if (ingredients.includes(string)) {
     return ingredients;
  } else {
    ingredients.push(string);
  }
}
//Name function
//Add dollar sign in front of price
//
function formatPrice(price) {
  return `$${price}`
  }
//declare Function
//Decrease prices by 10%
function decreasePrice(price) {
  return price * 0.90
}
//Declare Function
function createRecipe(itemTitle, itemIngredients, itemType) {
  return {
    title: itemTitle,
    ingredients: itemIngredients,
    type: itemType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
