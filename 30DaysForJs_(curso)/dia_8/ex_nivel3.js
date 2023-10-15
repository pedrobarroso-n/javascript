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
