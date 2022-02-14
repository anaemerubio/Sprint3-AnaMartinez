var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty',
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty',
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty',
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes',
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes',
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes',
    }
]

var cartList = [];

var cart = [];

var total = 0;

function buy(id) {
    for (let i = 0; i < products.length; i++){
        // Si el id del producto es identico al número de índice del bucle
        if (id === i){
            // Meter producto en cartList
            cartList.push(products[i]);
            console.log("Cart List cantidad items: " + cartList.length);
        }
    }
}

<<<<<<< HEAD
=======

// Exercise 2
>>>>>>> 18f28a68de674077f9c54d003c46ae28bd3fa3e7
function cleanCart() {
    // Borrar todos los elementos de la array
    cartList.length = 0;
}

function calculateTotal() {
    // Cada item se suma al anterior hasta que no hay más
    for (let i = 0; i < cartList.length; i++){
        total += cartList[i].price;
        
    }
    return total;
}

function generateCart() {

    // Comprobar si el producto está en la array
    for (i = 0; i < cartList.length; i++) {
        // variable product igual a item del cartList donde estemos
        var product = cartList[i];
        // Devuelve valor del primer elemento del array (En este caso name)
        var item = cart.find( producteCart => producteCart.name === product.name);
        // Si no existe lo añadimos
        if (item == null) {
            item = product;
            item.quantity = 1;
            cart.push(item);
        }
        // Ya existe, incrementamos cantidad
        else {
            item.quantity = item.quantity ++ ;
        }
        item.calculateTotal = item.price * item.quantity ;
        //
        /* item.applyPromotionsCart = 0; */
    }

}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

/* ***************************************************************************************************************************** */

// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
