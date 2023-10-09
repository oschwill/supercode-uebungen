class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }

  info() {
    return `${this.name} is ${this.age} years old`;
  }
}

const person = new Person('Emanuela', 18);
console.log(person.info());
