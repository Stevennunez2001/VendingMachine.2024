<<<<<<< HEAD
let balance = Number(20).toFixed(2);
document.querySelector(".payment-container").innerHTML = `Your balance is: $${balance}`;
let revenue = 0;
let itemCount = 5;
let emptySlots = 0;
// ADDING THE ITEM COUNT TO THE VENDING MACHINE
=======
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

>>>>>>> 2e07c49b4c9b0e1f6c4b7d3a34e5917e857033c0
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

//SELECTING THE BUTTONS
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

//ACCESSING THE IMAGES TO MOVE THEM
let A1Img = (document.querySelector('#A2Img'));
// let VmItems = [
//   [A2, itemCount, 2.50], 
//   [A2, itemCount, 3.50], 
//   [A3, itemCount, 3],
//   [B1, itemCount, 4]];




  class chip{
    constructor(name, price) {
      this.name = name,
      this.price = price,
      this.count = itemCount 
    }
    bItem(){
      this.count -= 1;
      revenue += this.price;
      if(balance < this.price) {
        alert("You don't have enough money");
        let addFunds = prompt("would you like to add funds?");
        if(addFunds == 'y') {
          let amountToAdd = prompt("How much would you like to add to your balance");
          balance += Number(amountToAdd).toFixed(2);;
        }
      } else{
        balance -= this.price;
        console.log(this.price);
      document.querySelector(`#${this.name}lbl`).innerHTML = this.count;
      let returnPos = 0;
      let leftPos = 0;
      let topPos = 0;
      let animation = setInterval(() => {
        leftPos += 5;
        topPos += 8;
        let img = document.querySelector(`#${this.name}Img`);
        
        img.style.left = `${leftPos}px`;
        img.style.top = `${topPos}px`;
        img.style.transform = `rotate(${leftPos}deg)`;
        if(topPos > 650 && this.name) {
            clearInterval(animation);
            img.style.left = `${returnPos}px`;
            img.style.top = `${returnPos}px`;
            img.style.transform = `rotate(${0}deg)`;
        }
    }, 10);
      }
      document.querySelector(".payment-container").innerHTML = `Your balance is: $${balance}`;

      if(this.count === 0){
        let el = (document.querySelector(`#${this.name}`));
        el.style.color = "red";
        el.disabled = true;
        emptySlots += 1;
        if(emptySlots === 15) {
          alert("You have emptied the machine!");
          alert()
        }
      }
    }
  }
  const chipA1 = new chip('A1', 2.50);
  const chipA2 = new chip('A2', 3.50);
  const chipA3 = new chip('A3', 4.50);
  const chipB1 = new chip('B1', 1.50);
  const chipB2 = new chip('B2', 2.50);
  const chipB3 = new chip('B3', 2.50);
  const chipC1 = new chip('C1', 3.50);
  const chipC2 = new chip('C2', 1.50);
  const chipC3 = new chip('C3', 3.75);
  const chipD1 = new chip('D1', 1.50);
  const chipD2 = new chip('D2', 2.50);
  const chipD3 = new chip('D3', 2.50);
  const chipE1 = new chip('E1', 3.50);
  const chipE2 = new chip('E2', 4.50);
  const chipE3 = new chip('E3', 2.50);
  A1.addEventListener('click', function() {
    chipA1.bItem();
});

A2.addEventListener('click', function() {
  chipA2.bItem();
});
A3.addEventListener('click', function() {
  chipA3.bItem();
});
B1.addEventListener('click', function() {
  chipB1.bItem();
});
B2.addEventListener('click', function() {
  chipB2.bItem();
});
B3.addEventListener('click', function() {
  chipB3.bItem();
});
C1.addEventListener('click', function() {
  chipC1.bItem();
});
C2.addEventListener('click', function() {
  chipC2.bItem();
});
C3.addEventListener('click', function() {
  chipC3.bItem();
});
D1.addEventListener('click', function() {
  chipD1.bItem();
});
D2.addEventListener('click', function() {
  chipD2.bItem();
});
D3.addEventListener('click', function() {
  chipD3.bItem();
});
E1.addEventListener('click', function() {
  chipE1.bItem();
});
E2.addEventListener('click', function() {
  chipE2.bItem();
});
E3.addEventListener('click', function() {
  chipE3.bItem();
});
// console.log(balance);




  // const item = () => {

  // }

//   function hola() {
//     console.log('hey');
//   }

// function NumOfItems(count) {
//   if (count === 0) {
//     return false;
//   } else{
//     return true;
//   }
// }


// function prueba(){
// A1.count -= 1;
// console.log(chipA1.count);
// }


// function countCheck(item){
//   if(item.count <  1){
//     return VmItems[0][1] - 1;
//   } else if(document.querySelector('#A1')){
    
//   }
// }
  

function buyItem(item, count, price) {
  if(selectedItem(item) < 0) {
    alert('no more');
    console.log(selectedItem(A1));
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

// console.log(VmItems[0]);
// console.log(E3)
//console.log(buyItem(balance, VmItems[0][1], VmItems[0][0], VmItems[0][2]));
// console.log(balance);
// console.log(revenue);

 






