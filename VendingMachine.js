let balance = Number(3).toFixed(2);;

let revenue = 0;
let item1 = (document.getElementsByClassName('lays'));
let item2 = (document.getElementsByClassName('doritos'));
let item3 = (document.getElementsByClassName('honey'));
let item4 = (document.getElementsByClassName('cheetos'));
let itemCount = 1;

let VmItems = [
  [item1, itemCount, 2.50], 
  [item2, itemCount, 3.50], 
  [item3, itemCount, 3], 
  [item4, itemCount, 4]];
function NumOfItems(count) {
  if (count === 0) {
    return false;
  } else{
    return true;
  }
}
function selectedItem(item){
  if(item === item1){
    return VmItems[0][1] - 1;
  } else if(document.getElementsByClassName('2')){
    return VmItems[0, 0];
  }
}
  

function buyItem(currentBalance, count, item, price) {
  if(selectedItem(item) < 0) {
    alert('no more');
    console.log(selectedItem(item1));
  } else if (balance <= price){
    //alert("insufficient funds!");
    // return false;
  } else {
    balance -= price;
    revenue += price;
    count -= 1;
    console.log(selectedItem(item));
    console.log(balance);
    console.log(price);
}
}



// console.log(balance);
// console.log(revenue);
// console.log(selectedItem(item1));
console.log(buyItem(balance, VmItems[0][1], VmItems[0][0], VmItems[0][2]));
console.log(buyItem(balance, VmItems[0][1], VmItems[0][0], VmItems[0][2]));
// console.log(balance);
// console.log(revenue);
document.getElementById("myText").innerHTML = balance;






