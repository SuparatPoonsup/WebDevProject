/*These are the cart items*/
var cart=[]
/*These are the products*/

var sweater={
    "name":"sweater",
    "price":"49.99"
}

var knittedSweater={
    "name":"knittedSweater",
    "price":"49.99"
}
var knittedSweater={
    "name":"whiteSweater",
    "price":"49.99"
}
/*Add items to cart*/

function addSweaterToCart() {
    console.log("buttonClick")
    cart.push(sweater)
    console.log(cart)
}
function addKnittedToCart() { /*must match on click name*/
    console.log("buttonClick")
    cart.push(knittedSweater) /*must match var*/
    console.log(cart)
}
function addWhiteSweaterToCart() { /*must match on click name*/
    console.log("buttonClick")
    cart.push(whiteSweater) /*must match var*/
    console.log(cart)
}