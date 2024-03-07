
const loadCoffeeTypes = () => {
    const coffeeTypesJSON = localStorage.getItem('coffeeTypes')
    if (coffeeTypesJSON != null) {
        coffeeTypes = JSON.parse(coffeeTypesJSON)
    }
}

loadCoffeeTypes()


const coffeeOrders = document.querySelector('#coffeeOrders')


const createOrderItem = (coffeeTypes) => {
    return `<div class="coffee">
    <div class="orderCoffeeName">${coffeeTypes.name} </div>
    <div class="orderCoffeePrice">${coffeeTypes.price * coffeeTypes.amount} kr</div>
</div>
<div class="amountNr">
    <div class="up" type="button"><img src="img/upp.png" alt="upp button"></div>
    <div class="amount">${coffeeTypes.amount}</div>
    <div class="down" type="button"><img src="img/down.png" alt="down button"></div>
</div>`
}

for (let i = 0; i < coffeeTypes.length; i++) {
    if (coffeeTypes[i].amount > 0) {
        coffeeOrders.innerHTML += createOrderItem(coffeeTypes[i])
    }
}



const totalAmount = document.querySelector('#totalAmount')


let sum = 0

for (let i = 0; i < coffeeTypes.length; i++) {
    sum += coffeeTypes[i].amount * coffeeTypes[i].price
}

console.log(sum)

totalAmount.innerHTML = `${sum} kr`





