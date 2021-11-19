
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

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
var whiteSweater={
    "name":"whiteSweater",
    "price":"49.99"
}
var greySweater={
  "name":"greySweater",
  "price":"49.99"
}
var crewneckSweater={
  "name":"crewneckSweater",
  "price":"49.99"
}
var pinkSweater={
  "name":"pinkSweater",
  "price":"49.99"
}
var blueJeans={
  "name":"blueJeans",
  "price":"49.99"
}
var jeans={
  "name":"jeans",
  "price":"49.99"
}
var slimJeans={
  "name":"slimJeans",
  "price":"49.99"
}
var hairPin={
  "name":"hairPin",
  "price":"10.99"
}
var sunglasses={
  "name":"sunglasses",
  "price":"99.99"
}
var earrings={
  "name":"earrings",
  "price":"19.99"
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
function addGreySweaterToCart() { /*must match on click name*/
  console.log("buttonClick")
  cart.push(greySweater) /*must match var*/
  console.log(cart)
}
function addCrewneckSweaterToCart() { /*must match on click name*/
  console.log("buttonClick")
  cart.push(crewneckSweater) /*must match var*/
  console.log(cart)
}
function addPinkSweaterToCart() { /*must match on click name*/
  console.log("buttonClick")
  cart.push(pinkSweater) /*must match var*/
  console.log(cart)
}
function addBlueJeansToCart() { /*must match on click name*/
  console.log("buttonClick")
  cart.push(blueJeans) /*must match var*/
  console.log(cart)
}
function addJeansToCart() { /*must match on click name*/
  console.log("buttonClick")
  cart.push(jeans) /*must match var*/
  console.log(cart)
}
function addSlimJeansToCart() { /*must match on click name*/
  console.log("buttonClick")
  cart.push(slimJeans) /*must match var*/
  console.log(cart)
}
function addHairPinToCart() { /*must match on click name*/
  console.log("buttonClick")
  cart.push(hairPin) /*must match var*/
  console.log(cart)
}
function addSunglassesToCart() { /*must match on click name*/
  console.log("buttonClick")
  cart.push(sunglasses) /*must match var*/
  console.log(cart)
}
function addEarringsToCart() { /*must match on click name*/
  console.log("buttonClick")
  cart.push(earrings) /*must match var*/
  console.log(cart)
}