let amount = 600
let counter = -1

const amount1 = document.querySelector("#amount")
const counter1 = document.querySelector("#counter")
const btnInc1 = document.querySelector("#btnInc")
const btnDec1 = document.querySelector("#btnDec")

btnInc1.addEventListener("click", ()=>{
    counter +=-1;
    amount *=2;
    counter1.textContent = counter
    amount1.textContent ="$" + amount.toLocaleString();
})





  let counter2= -1;
  let amount2 = 6000;

  const counterEl = document.getElementById("counter");
  const amountEl = document.getElementById("amount");
  const btnInc = document.getElementById("btnInc");
  const btnDec = document.getElementById("btnDec");

  btnInc.addEventListener("click", () => {
    counter2 += 1; // kordhi counter
    amount2 *= 2; // laba jibaari amount

    counterEl.textContent = counter;
    amountEl.textContent = "$" + amount.toLocaleString();
  });

  btnDec.addEventListener("click", () => {
    counter -= 1; // dhimi counter
    amount /= 2; // kala bixi amount 

    counterEl.textContent = counter;
    amountEl.textContent = "$" + amount.toLocaleString();
  });

