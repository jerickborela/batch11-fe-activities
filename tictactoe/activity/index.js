const store = {
    store: "Alice Bakeshop",
    inventoryList: [],
    earnings: 0,
    addBook: function (title, quantity, value) {
        const book1 = new Book(title, quantity, value)
        this.inventoryList.push(book1)
    },
    restockBook: function (title, quantity) {
        for (let i = 0; i < this.inventoryList.length; i++) {
            if (this.inventoryList[i].title == title) {
                this.inventoryList[i].quantity += quantity
            } else {
                console.log('Book does not exist')
            }
        }
    },
    sellBook: function (title, quantity) {
        for (let i = 0; i < this.inventoryList.length; i++) {
            if (this.inventoryList[i].title == title) {
                if (this.inventoryList[i].quantity >= quantity) {
                    this.inventoryList[i].quantity -= quantity
                    this.earnings += this.inventoryList[i].value * quantity
                    console.log("Successful Transaction!")
                    break;
                } else {
                    console.log(Sorry, we only have ${this.inventoryList[i].quantity} left)
                }
            } else {
                console.log(title + " is out of stock.")
            }
        }
    },
    totalEarnings: function () {
        console.log(This ${this.store} has earnings of ${this.earnings})
    },
    listInventory: function () {
        for (let i = 0; i < this.inventoryList.length; i++) {
            console.log(Title:${this.inventoryList[i].title}, Quantity:${this.inventoryList[i].quantity} Value:${this.inventoryList[i].value})
        }
    }
}



class Book {
  constructor(title, quantity, value) {
    this.title = title;
    this.quantity = quantity;
    this.value = value;
  }
}


store.addBook("Moby Dick", 5, 500)
store.addBook("Harry Potter", 3, 1000)
store.addBook("Percy Jackson", 5, 1500)