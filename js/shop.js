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

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};

var total = 0;

function buy(id) {

    for (let i = 0; i < products.length; i++){
        if (id === i){
            cartList.push(products[i-1]);
        }
    }

}

function cleanCart() {
    cartList.length = 0;
}

function generateCart(cartList) {

    for (i = 0; i < cartList.length; i++) {

        let product = cartList[i];
        let item = cart.find(productCart => productCart.name === product.name);

        if (item == null) {
            item = product;
            item.quantity = 1;
            cart.push(item);
        } else {
            item.quantity ++;
        }

        item.calculateTotal = item.price * item.quantity;
        item.subtotalWithDiscount = 0;

    }
}

function applyPromotionsCart(cart) {

    for (let item of cart) {

        if ((item.id == 1) && (item.quantity >= 3)) {

            item.subtotalWithDiscount = ((item.price) - (item.price * 0.05)) * item.quantity;

        } else if ((item.id == 3) && (item.quantity >= 10)) {

            item.subtotalWithDiscount = ((item.price) - (item.price * 0.33)) * item.quantity;

        }
    }

}

function calculateSubtotals() {

    for (let key in subtotal) {
        subtotal[key].value = 0;
    }

    for (let item of cart) {

        switch(item.type) {

            case "grocery":
                subtotal.grocery.value += item.subtotalWithDiscount;
                break;

            case "beauty":
                subtotal.beauty.value += item.subtotalWithDiscount;
                break;

            case "clothes":
                subtotal.clothes.value += item.subtotalWithDiscount;
                break;

        }

    }
    
}

function calculateTotal() {

    var total = 0;

    for (let i = 0; i < cartList.length; i++){
        total += cartList[i].price;
    }

    return total; 

}

function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
