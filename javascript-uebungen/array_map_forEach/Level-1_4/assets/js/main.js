let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

let celsius = fahrenheit.map((val) => Math.round((val - 32) / 1.8));

console.log(celsius);
