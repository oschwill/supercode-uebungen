function hero(heroName, heroPower, heroEnemy) {
  console.log('Mein:e Lieblingsheld:in ist: ' + heroName);
  console.log('Er/sie hat die Fähigkeit: ' + heroPower);
  console.log('Sein/ihr größte/r Gegner:in ist: ' + heroEnemy);
}

let name, power, enemy;
name = 'Ironman';
power = 'fliegen';
enemy = 'Thanos';

hero(name, power, enemy);

name = 'Hulk';
power = 'sehr stark zu sein';
enemy = 'Loki';

hero(name, power, enemy);
