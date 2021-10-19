const pinCh1 = document.getElementById("pin-ch1"),
  pinCh2 = document.getElementById("pin-ch2"),
  pinCh3 = document.getElementById("pin-ch3"),
  pinCh4 = document.getElementById("pin-ch4"),
  numPad = document.querySelector(".pin-pad_inputs");

class Button(val) {
  constructor(val) {
    this.value = val;
}
}

// let numsArr = [
//   `<button class="pin-pad_input pin-pad_input--0" onclick=pass(0)>0</button>`,
//   `<button class="pin-pad_input pin-pad_input--1" onclick=pass(1)>1</button>`,
//   `<button class="pin-pad_input pin-pad_input--2" onclick=pass(2)>2</button>`,
//   `<button class="pin-pad_input pin-pad_input--3" onclick=pass(3)>3</button>`,
//   `<button class="pin-pad_input pin-pad_input--4" onclick=pass(4)>4</button>`,
//   `<button class="pin-pad_input pin-pad_input--5" onclick=pass(5)>5</button>`,
//   `<button class="pin-pad_input pin-pad_input--6" onclick=pass(6)>6</button>`,
//   `<button class="pin-pad_input pin-pad_input--7" onclick=pass(7)>7</button>`,
//   `<button class="pin-pad_input pin-pad_input--8" onclick=pass(8)>8</button>`,
//   `<button class="pin-pad_input pin-pad_input--9" onclick=pass(9)>9</button>`
// ];

// function createNumPad(arr) {
//   let items = "";
//   for (let item of arr) {
//     items += item;
//   }
//   numPad.appendChild(items);
// }

// function shuffle(array) {
//   var currentIndex = array.length,
//     randomIndex;

//   // While there remain elements to shuffle...
//   while (currentIndex != 0) {
//     // Pick a remaining element...
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     // And swap it with the current element.
//     [array[currentIndex], array[randomIndex]] = [
//       array[randomIndex],
//       array[currentIndex],
//     ];
//   }

//   return array;
// }

function pass(num) {
  if (!pinCh1.value) {
    pinCh1.value = num;
  } else if (!pinCh2.value) {
    pinCh2.value = num;
  } else if (!pinCh3.value) {
    pinCh3.value = num;
  } else if (!pinCh4.value) {
    pinCh4.value = num;
  }
}

function clr() {
  pinCh1.value = pinCh2.value = pinCh3.value = pinCh4.value = null;
}

function back() {
  if (pinCh4.value) {
    pinCh4.value = null;
  } else if (pinCh3.value) {
    pinCh3.value = null;
  } else if (pinCh2.value) {
    pinCh2.value = null;
  } else if (pinCh1.value) {
    pinCh1.value = null;
  }
}


createNumPad(shuffle(numsArr));