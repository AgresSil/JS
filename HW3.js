let n = 100;

nextPrime:
for (let i = 2; i <= n; i++) {

  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextPrime;
  }

  console.log(i);
}

//##############################

const basket = [
  ['Телефон', 38000, 3],
  ['Ноутбук', 40000, 1],
];


function countBasketPrice(basket) {
  let totalPrice = 0;
  for (let i = 0; i < basket.length; i++) {
    totalPrice += basket[i][1] * basket[i][2];
  }
  return totalPrice;
}


console.log(countBasketPrice(basket));