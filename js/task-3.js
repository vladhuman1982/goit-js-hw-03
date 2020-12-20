const findBestEmployee = (employees) => {
  const values = Object.values(employees);
  const keys = Object.keys(employees);
  let maxValue = 0;
  for (let value of values) {
    if (value > maxValue) {
      maxValue = value;
    }
  }
  return keys[values.indexOf(maxValue)];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
