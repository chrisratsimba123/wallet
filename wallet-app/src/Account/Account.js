class BankAccount {
    constructor(type, money, transactions, backupAccount = null) {
        this.type = type
        this.money = money
        this.transactions = transactions
        this.backupAccount = backupAccount
    }
    withdraw(amount) {
        if(this.amount < amount) {
            const negAmount = amount - this.money
            this.money -= this.money
            this.backupAccount.withdraw(negAmount)
            this.transactions.push(`-$${amount - negAmount}`)
        } else {
            this.money -= amount
            this.transactions.push(`-$${amount}`)
        }
    }
    deposit(amount) {
        this.money += amount
        this.transactions.push(`+$${amount}`)
    }
    showBalance() {
        console.log(this.money)
    }
}

const backup = new BankAccount("Checking", 1000, [])
const Chase = new BankAccount("Checking", 500, [], backup)
const Fidelity = new BankAccount("Investments", 5000, [], Chase)

Chase.withdraw(1000)
Chase.showBalance()
backup.showBalance()