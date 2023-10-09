let band = {
  name: 'myBand',
  playGig: function () {
    console.log('Please welcome to the stage' + this.name);
  },
};
band.playGig();

var artist = 'Billy Joel';

function playGig() {
  //instruments that your band will use
  let instruments = ['piano', 'microphone', 'acousticGuitar', 'harmonica'];

  console.log('We are going to be playing music from ' + this.artist + 'tonight!');
}

playGig();
window.playGig();

let bar = {
  artist: 'coldplay',
  playGig: function () {
    //instruments that your band will use
    let instruments = ['piano', 'microphone', 'guitar', 'drumset'];

    console.log('We are going to be playing music from ' + this.artist + 'tonight!');
  },
};

bar.playGig(); // this reference on bar => artist
playGig(); // this reference on window => artist
