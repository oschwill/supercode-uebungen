const text =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

const split1 = text.split('.');
const split2 = split1.join('.').split(' ');
const split3 = split2.join(' ').split('');

console.log(split1);
console.log(split2);
console.log(split3);
