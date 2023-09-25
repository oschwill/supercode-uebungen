const friends = ['peter', 'christiane', 'manfred'];
const favoriteFood = ['pizza', 'döner', 'currywurst'];

console.table(friends);
friends.shift();
console.table(friends);
console.table(favoriteFood);
favoriteFood.shift();
console.table(favoriteFood);
