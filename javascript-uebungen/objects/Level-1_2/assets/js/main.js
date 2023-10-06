const person = {
  name: 'Olli',
  age: 40,
  sayNameAge: function () {
    let output = `Mein Name ist ${this.name} und ich bin ${this.age} Jahre alt`;
    console.log(output);
    alert(output);
  },
};

person.sayNameAge();
