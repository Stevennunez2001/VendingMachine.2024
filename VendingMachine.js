let balance = Number(3).toFixed(2);

let revenue = 0;
let A1 = (document.querySelector('#A1'));
let A2 = (document.querySelector('#A2'));
let A3 = (document.querySelector('#A3'));
let B1 = (document.querySelector('#B1'));
let B2 = (document.querySelector('#B2'));
let B3 = (document.querySelector('#B3'));
let C1 = (document.querySelector('#C1'));
let C2 = (document.querySelector('#C2'));
let C3 = (document.querySelector('#C3'));
let D1 = (document.querySelector('#D1'));
let D2 = (document.querySelector('#D2'));
let D3 = (document.querySelector('#D3'));
let E1 = (document.querySelector('#E1'));
let E2 = (document.querySelector('#E2'));
let E3 = (document.querySelector('#E3'));
let itemCount = 3;
A1.addEventListener('click', hola);
let VmItems = [
  [A1, itemCount, 2.50], 
  [A2, itemCount, 3.50], 
  [A3, itemCount, 3],
  [B1, itemCount, 4]];

  class chip{
    constructor(name, price) {
      this.name = name,
      this.price = price
    }
  }

  VmItems[0][1] -= 1;

  // const item = () => {

  // }

  function hola() {
    console.log('hey');
  }

function NumOfItems(count) {
  if (count === 0) {
    return false;
  } else{
    return true;
  }
}


// function selectedItem(item){
//   if(item === A1){
//     return VmItems[0][1] - 1;
//   } else if(document.querySelector('.2')){
//     return VmItems[0, 0];
//   }
// }
  

// function buyItem(currentBalance, count, item, price) {
//   if(selectedItem(item) < 0) {
//     alert('no more');
//     console.log(selectedItem(item1));
//   } else if (balance <= price){
//     //alert("insufficient funds!");
//     // return false;
//   } else {
//     balance -= price;
//     revenue += price;
//     count -= 1;
//     console.log(selectedItem(item));
//     console.log(balance);
//     console.log(price);
// }
// }



// console.log(balance);
// console.log(revenue);
// console.log(selectedItem(item1));

console.log(VmItems[0]);
console.log(E3)
//console.log(buyItem(balance, VmItems[0][1], VmItems[0][0], VmItems[0][2]));
// console.log(balance);
// console.log(revenue);
document.querySelector(".payment-container").innerHTML = `$${balance}`;

document.querySelector('#A1lbl').innerHTML = itemCount;
document.querySelector('#A2lbl').innerHTML = itemCount;
document.querySelector('#A3lbl').innerHTML = itemCount;
document.querySelector('#B1lbl').innerHTML = itemCount;
document.querySelector('#B2lbl').innerHTML = itemCount;
document.querySelector('#B3lbl').innerHTML = itemCount;
document.querySelector('#C1lbl').innerHTML = itemCount;
document.querySelector('#C2lbl').innerHTML = itemCount;
document.querySelector('#C2lbl').innerHTML = itemCount;
document.querySelector('#C3lbl').innerHTML = itemCount;
document.querySelector('#D1lbl').innerHTML = itemCount;
document.querySelector('#D2lbl').innerHTML = itemCount;
document.querySelector('#D3lbl').innerHTML = itemCount;
document.querySelector('#E1lbl').innerHTML = itemCount;
document.querySelector('#E2lbl').innerHTML = itemCount;
document.querySelector('#E3lbl').innerHTML = itemCount;
new chip(A1, 2.50);





