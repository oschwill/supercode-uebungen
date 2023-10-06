let unsereHaustiere = [
  {
    tiertyp: 'Katze',

    names: ['Gipsy', 'Nala', 'Dinky'],
  },
  {
    tiertyp: 'Hunde',
    names: ['Knöpfchen', 'Pinselchen', 'Droopy'],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

unsereHaustiere.forEach((val) => {
  console.log(val.names);
});

delete unsereHaustiere[0].names;
unsereHaustiere[0].names = ['Balu', 'Snoopy'];

console.log(unsereHaustiere[0].names);
