const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let productTotalPrice;
  for (const product of allProdcuts) {
    if (product.name === productName) {
      let price = Number(product.price);
      let quantity = Number(product.quantity);
      productTotalPrice = price * quantity;
    }
  }
  return productTotalPrice;
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
