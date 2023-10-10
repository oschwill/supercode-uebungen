date1 = new Date(1999, 10, 5, 15);
date2 = new Date();
date3 = new Date(2019, 12, 3, 12);
date4 = new Date(2000, 1, 1, 11);

const pmAM = (date) => {
  console.log(`${date.getHours() >= 12 ? 'PM' : 'AM'} `);
};

pmAM(date1);
pmAM(date2);
pmAM(date3);
pmAM(date4);
