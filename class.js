class Name () {
  constructor(name, age){
    this.name = name
    this.age = age
  }
}

class Orang extends Name(){
  constructor(name, age, gender){
    super(gender)
  }
}

const orang = new Orang('Yahya', 15, 'kentang')
