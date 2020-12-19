const findBestEmployee = (employees) => {
  const value = Object.values(employees);
  const key = Object.keys(employees);
  let maxValue = 0;
  for (let i = 0; i < value.length; i++) {
    if (value[i] > maxValue) {
      maxValue = value[i];
    }
  }
  let BestEmployee = value.indexOf(maxValue);
  return key[BestEmployee];
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
