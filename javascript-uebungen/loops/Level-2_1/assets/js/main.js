const imageArray = () => {
  let images = [];
  const maxLength = 3;

  for (let i = 1; i <= 100; i++) {
    images.push(`image_${'0'.repeat(maxLength - String(i).length)}${i}.jpg`);
  }

  console.log(images);
};

imageArray();
