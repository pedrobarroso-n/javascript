let dog = {}    // criei um objeto vazio

console.log(dog)

dog.name = 'Rex'    // adicionando endereços e valores ao objeto
dog.legs = 4
dog.color = 'Brown'
dog.bark = function(){return 'woof'}

console.log(dog)

dog.race = 'Pincher'
dog.getDogInfo = function(){return `${this.name} é um ${this.race}, tem ${this.legs} pernas, cor ${this.color} e faz ${this.bark()}`}
console.log(dog.getDogInfo())
