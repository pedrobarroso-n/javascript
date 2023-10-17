// primeira questao

const personAccount = {
    firstName: 'Pedro',
    lastName: 'B.Neto', 
    incomes: 0.3, 
    expenses: 5.6, 
    totalIncome: function(){
        return console.log(`Total Icomes = ${this.incomes.toFixed(2)} R$`)
    }, 
    totalExpense: function(){
        return console.log(`Total Expenses = ${this.expenses.toFixed(2)} R$`)  // toFixed(2) é para ter 2 casas apos a virgula
    }, 
    accountInfo: function(){
        return console.log(`Conta pertencente a ${this.firstName} ${this.lastName}.`)
    },
    addIncome: function(add){
        return this.incomes = add + this.incomes
    },
    addExpense: function(add){
        return this.expenses = add + this.expenses
    },
    accountBalance: function(){
        return console.log(`Account Balance = ${(this.incomes - this.expenses).toFixed(2)} R$`)
    }
}
personAccount.accountInfo()
personAccount.addIncome(34.22)
personAccount.totalExpense()
personAccount.accountBalance()

// segunda questao

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
]
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

function signUp(name, email, password){
    const date = new Date()
    let dateTurn;
    date.getHours() > 12 ? dateTurn = 'PM' : dateTurn = 'AM'
    
    const caracters = [1,'s','u',2,3,4,'w',5,'a',6,7,'t',8,'e','d','x',9,'l',0,'h']
    let id = ''
    for (let i = 1; i < 7; i++){
        id += caracters[Math.floor(Math.random() * 20)]
    }

    users[users.length] = {
        _id: id,
        username: name,
        email: email,
        password: password,
        createdAt: `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()} ${dateTurn}`,
        isLoggedIn: false
    }
}
signUp('Pedro','pedro@pedro.com','123321')
console.log(users[users.length-1])

function signIn(email, password){
    for (let i = 0; i <= Object.keys(users).length; i++){
        if (email === users[i].email && password === users[i].password){
            users[i].isLoggedIn = true
            return 'Login successful'
    } 
    }
}
console.log(signIn('thomas@thomas.com','123333'))

// terceira questao

function rateProduct(name, id, rate){
    for (let i = 0; i < Object.keys(products).length; i++){
        if (products[i].name === name){
            products[i].ratings.push({
                userId: id,
                rate: rate
            })
        } 
    }
}
rateProduct('Laptop','eefamr',4.7)

// ARRUMAR //
function AvaregeRating(name){
    let totalRate = 0.0
    for (let i = 0; i <= Object.keys(products).length; i++){
        if (products[i].name === name){
            for (let c = 0; c < products[i].ratings.length; c++){
                totalRate += products[i].ratings[c].rate
                console.log(totalRate)
            }
            totalRate /= products[i].ratings.length
        }
    }
    return `Media rate = ${totalRate}/5`
}
AvaregeRating('mobile phone')
//        //