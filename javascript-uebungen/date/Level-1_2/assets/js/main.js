let topNode = document.querySelector('.top');
const bottomNode = document.querySelector('.bottom');
const clock = document.querySelector('.electronic-clock');

let monate = [
  'Januar',
  'Februar',
  'März',
  'April',
  'Mai',
  'Juni',
  'Juli',
  'August',
  'September',
  'Oktober',
  'November',
  'Dezember',
];

let wochenTag = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];

let date1 = new Date();
topNode.innerHTML = `${date1}<br/>`;
topNode.innerHTML += `${date1.getFullYear()}<br/>`;
topNode.innerHTML += `${date1.getMonth()} Monat<br/>`;
topNode.innerHTML += `${date1.getDate()} Tag<br/>`;
topNode.innerHTML += `${date1.getHours()} Stunde<br/>`;
topNode.innerHTML += `${date1.getMinutes()} Minute<br/>`;
topNode.innerHTML += `${date1.toLocaleString('de-de', { weekday: 'long' })}<br/>`;
topNode.innerHTML += `${wochenTag[date1.getDay()]} mit Array<br/>`;
topNode.innerHTML += `${date1.toLocaleString('de-de', { month: 'long' })}<br/>`;
topNode.innerHTML += `${monate[date1.getMonth()]} mit Array<br/>`;

let clockTimer = {
  date: new Date(),
  getClockValues: function () {
    return {
      day: this.date.toLocaleString('de-de', { weekday: 'long' }).slice(0, 3),
      hour: this.date.getHours(),
      minute: this.date.getMinutes(),
      second: this.date.getSeconds(),
      timeOfDay: this.hour >= 12 ? 'PM' : 'AM',
    };
  },
};

clock.innerHTML += `
  <table>
    <tr>
      <td>${clockTimer.getClockValues().day}</td>
      <td>${clockTimer.getClockValues().hour}</td>
      <td>:</td>
      <td>${clockTimer.getClockValues().minute}</td>
      <td>:</td>
      <td>${clockTimer.getClockValues().second}</td>
      <td>${clockTimer.getClockValues().timeOfDay}</td>
    </tr>
    <tr>
      <td>DAY</td>      
      <td>HOURS</td>
      <td>&nbsp;</td>
      <td>MINUTES</td>
      <td>&nbsp;</td>
      <td>SECONDS</td>
      <td>PERIOD</td>
    </tr>
  </table>
`;
