//Declare function 'CreateRestaurant'
//create restaurant object
//create menu object containing arrays of multiple items
function createRestaurant(name) {
    return {
      name: name,
      menus: {
        breakfast: [],
        lunch: [],
        dinner: []
    }
  }
}
//Declare function 'AddMenuItem'
//Add items to specific object-menu arrays by
//menu.object < item.type < check if items are in list with method
//menu.object < item.type < add item to menu with method
function addMenuItem(restaurant, menuItem) {
//  menuItem = menuItem.name; Unnecessary variable, ignore
  if  (restaurant.menus[menuItem.type].includes(menuItem) === false) {
//  bad code, ignore > restaurant.menus[menuItem.type].filter(menuItem => menuItem.type)
      return restaurant.menus[menuItem.type].push(menuItem)
  }
}

//Declare function, identify parameters in test file
//Write for loop to search through arrays within objects
//Write conditional to return true statements and remove item from arrays
//Return statement outside of 'for loop' to avoid undefined results
//Return true statements within conditional statements
//Return false statement outside of conditional but inside of function
function removeMenuItem(restaurant, menuItem, menuType) {
    for (var i = 0; i < restaurant.menus[menuType].length; i++) {
      if (restaurant.menus[menuType][i].name.includes(menuItem)) {
          restaurant.menus[menuType].splice(i, 1)
          return `No one is eating our ${menuItem} - it has been removed from the ${menuType} menu!`
      }
    }     return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
  }


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem,
}
