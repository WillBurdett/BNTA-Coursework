shoppingList = ["milk", "eggs", "bread", "apples", "coffee", "biscuits"];

// Generic for loops
for (index = 0; index < shoppingList.length; index++){
    // console.log(shoppingList[index]);
}

// Enhanced for loop (no index)
for (item of shoppingList){
    console.log(item.toUpperCase());
}