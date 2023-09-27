let numArr = [5, 22, 15, 100, 55];

for (let i = 0; i < numArr.length; i++) {
  for (let j = 0; j < numArr[i]; j++) {
    if (j === 1) {
      continue;
    }

    if (numArr[i] % j === 0) {
      console.log(`${numArr[i]} is devidable by ${j}. The result is: ${numArr[i] / j}`);
    }
  }
}
