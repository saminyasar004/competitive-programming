function print(x) {
  console.log(x);
  return {
    value: x,
    author: "Samin Yasar",
    type: typeof x,
  };
}

console.log(print("my name is samin yasar."));
