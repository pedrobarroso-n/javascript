const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

let allUser = Object.keys(users)
let userSkills = users[allUser[0]].skills.length
for (let i = 1; i < allUser.length; i++) {if (userSkills <= users[allUser[i]].skills.length) {userSkills = allUser[i]} }
console.log(userSkills)

let userPoints = [];
for (let i = 1; i < allUser.length; i++){
    if (users[allUser[i]].isLoggedIn === true && users[allUser[i]].points >= 50){userPoints.push(allUser[i])}
}
console.log(userPoints)

const mernStack = ['MongoDB', 'Express', 'React', 'Node']
const Allusers = Object.keys(users)
const array = []
let count = 0
let percorrer = 0
while (percorrer < Allusers.length){
  for (let i = 0; i < users[Allusers[percorrer]].skills.length; i++){
    if (mernStack[0] === users[Allusers[percorrer]].skills[i] || mernStack[1] === users[Allusers[percorrer]].skills[i] || mernStack[2] === users[Allusers[percorrer]].skills[i] || mernStack[3] === users[Allusers[percorrer]].skills[i]){
      count++
    }
  }
  if (count === 4){ 
    array.push(Allusers[percorrer]) 
  }
  count = 0
  percorrer++
}
console.log(array)

const copyUsers = Object.assign({}, users)
copyUsers.Pedro = {
email: 'unanime@gmail.com',
skills: ['HTML', 'CSS', 'JavaScript'],
age: 18,
isLoggedIn: true,
points: 40
}
console.log(copyUsers)

Object.keys(users)  // todos os rotulos/propriedades do objeto

Object.values(users)  // todos os atributos/valores do objeto

// ?.....