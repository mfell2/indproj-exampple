
//script page for orders, made an array and new calcTotal Function

var products = ["6-Count Chocolate-Covered Strawberries ($5)" , "12-Count Chocolate-Covered Strawberries ($10)", "6-Count Chocolate-Covered Pretzels ($15)", "12-Count Chocolate-Covered Strawberries ($20)"];


var labels = document.getElementsByTagName("label");
// function to have corresponding array names

  function processProducts() {
    for (var i=0; i < 4; i++) {
      labels[i].innerHTML=products[i]; 
    }
}
if (window.addEventListener){
    window.addEventListener("load", processProducts, false);
  } else if (window.attachEvent) {
      window.attachEvent("onload", processProducts);
  }
  
 
// new function for calculating total

function calcTotal(){

  var itemTotal = 0
  var salesRate = .06 // stores the sales rate
  var items = document.getElementsByTagName("input"); 
  
  for (var i=0; i<5; i++) { //change from i + 1
    if(items[i].checked){
      itemTotal += (items[i].value * 1);
    }
  }
  
itemTotal *= 1+ salesRate;
  document.getElementById("total").innerHTML = "Your order total is $" + itemTotal.toFixed(2); 
}
//add backward compatible event listener to Submit button, adds loop
        var submitButton = document.getElementById ("sButton");
        if(submitButton.addEventListener) {
          submitButton.addEventListener("click", calcTotal, false);
        } else if (submitButton.attachEvent)  {
          submitButton.attatchEvent("onclick", calcTotal)
        }


