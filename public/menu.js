
//MENU

let coffeeTypes = [{
    name: "Bryggkaffe",
    price: 49,
    desc: "Bryggd på månadens bönor",
    amount: 0
},
{
    name: "Caffè Doppio",
    price: 49,
    desc: "Bryggd på månadens bönor",
    amount: 0
},
{
    name: "Cappuchino",
    price: 49,
    desc: "Bryggd på månadens bönor",
    amount: 0
},
{
    name: "Latte Macchiato",
    price: 49,
    desc: "Bryggd på månadens bönor",
    amount: 0
},
{
    name: "Kaffe Latte",
    price: 49,
    desc: "Bryggd på månadens bönor",
    amount: 0
},
{
    name: "Cortado",
    price: 39,
    desc: "Bryggd på månadens bönor",
    amount: 0
}];

const saveCoffeeTypes = () => {
    localStorage.setItem('coffeeTypes', JSON.stringify(coffeeTypes))
}


const loadCoffeeTypes = () => {
    const coffeeTypesJSON = localStorage.getItem('coffeeTypes')
    if (coffeeTypesJSON != null) {
        coffeeTypes = JSON.parse(coffeeTypesJSON)
    }
}

const updateCartNr = () => {
    let total = 0
    for (let i = 0; i < coffeeTypes.length; i++) {
        total += coffeeTypes[i].amount;
    }
    document.getElementById('number').value = total;
}

const incrementValue = (index) => {
    coffeeTypes[index].amount++
    updateCartNr();
    saveCoffeeTypes();
    console.log(coffeeTypes);
    console.log(coffeeTypes[index])

}

const menuItems = document.querySelector("#menuItems");

loadCoffeeTypes();

updateCartNr();

const createMenuItem = (coffeeType, index) => {
    return `<div class="menuItem">
    <div><input type="button" class="plusBtn" id="plusCoffeeType1" onclick="incrementValue(${index})" value="+" /></div>
   <div class="coffeeType">${coffeeType.name} <br> <span class="smallFont">${coffeeType.desc}</div>
   <div>${coffeeType.price} kr</div>
</div >`;
};

for (let i = 0; i < coffeeTypes.length; i++) {
    menuItems.innerHTML += createMenuItem(coffeeTypes[i], i)

};


//ORDER










