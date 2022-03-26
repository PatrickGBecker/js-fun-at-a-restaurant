
//console log everything to test it!!!!

//declare and initialize Function with parameters
//Identify parameters to be modified
//Express where values will be added
//Add new orders to array with method

//Code below did not work, ignore
// if (takeOrder.includes(newOrders)) {
//    return takeOrder().push(newOrders);
// } else (takeOrder.includes(moreOrders)) {
//    return takeOrder().push(string);

function takeOrder(orders1, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    return deliveryOrders.push(orders1);
  }
};
//Declare Function and parameters, write loop condition
//limit length of 'orders' array
//Remove order number by index
function refundOrder(deliveryOrderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
   if (deliveryOrders[i].orderNumber === deliveryOrderNumber) {
   deliveryOrders.splice(i,1)
  }
 }; return deliveryOrders;
}
//Declare Function and parameters
//make array containing all orders
//Loop for order items to be called in list
//Add all items into one array and return items
function listItems(deliveryOrders) {
 var items = []
for (var i = 0; i < deliveryOrders.length; i++) {
  items.push(deliveryOrders[i].item)
}
items = items.join(", ");
return items;
};
//declare function and parameters
//Converge all items into a single array
//Compare true/false if item is in array with method
//Use method to find items and return them
function searchOrder(deliveryOrders, item) {
if (items = deliveryOrders.map(value => value.item)) {
   return items.includes(item)
 }
}
//Bad code, ignore
// if  (items = deliveryOrders.filter(value => value.item)) {
//     items.includes(item)
// return items.some(item);
//(orders = orders.map(value => value.orderNumber))

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
