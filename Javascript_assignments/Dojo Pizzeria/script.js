function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza={};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses=cheeses;
    pizza.toppings=toppings;
    return pizza;

}
var p1 = pizzaOven("deep dish", "traditional", "mozzarella" ,["pepperoni", "sausage"]);
console.log(p1);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"],["mushrooms", "olives", "onions"]);
console.log(p2);
var p3 =pizzaOven("glutin-free", "tomato sauce", "mozzerella", ["olive", "muchroome"]);
console.log(p3);
var p4 = pizzaOven("flatbread", "white sauce", "mozzerella", ["onion", "muchroom", "oregano"]);
console.log(p4);

function randomPizza(){
    var crustType = ["deep dish", "hand tossed", "glutin-free", "flatbread"];
        var randomcrust=crustType[Math.floor(4*Math.random() )];

    var sauceType = ["traditional", "marinara", "tomato sauce", "white sauce"];
        var randomsauce=sauceType[Math.floor(4*Math.random() )];

    var cheeses= ["mozzarella", ["mozzerella", "feta"]];
        var randomcheese= cheeses[Math.floor(2*Math.random() )];

    var toppings = [["pepperoni", "sausage"], ["mushrooms", "olives", "onions"], ["olive", "muchroome"], ["onion", "muchroom", "oregano"]];
        var randomtopping= toppings[Math.floor(4*Math.random() )];

    // return randomPizza(crustType, sauceType, cheeses, toppings);

var newpizza=randomcrust+","+randomsauce+","+randomcheese+","+randomtopping;
console.log(newpizza);
}
randomPizza();

