let album = ['holidays.jpg', 'Restaurant.jpg', 'desktop', 'rooms.GIF', 'DOGATBEACH.jpg'];

let returnArr = album.map((val) =>
  (val.includes('.jpg') || val.includes('.GIF')
    ? val.replace('.jpg', '')?.replace('.GIF', '')
    : 'invalid'
  ).toLocaleLowerCase()
);

console.log(returnArr);
