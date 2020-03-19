const breakfastEntreePrices = {
    1: 13.99,
    2: 12.99,
    3: 10.99,
    4: 11.99
}

const breakfastSidePrices = {
    1: 2.99,
    2: 1.99,
    3: 3.99
}

let sideMenuWaitressComments = [
    "Good choice!!",
    "That's my favorite meal",
    "Do you want spicy sauce?"
]

let entreeMenuWaitressComments = [
    "Good choice!!",
    "That's my favorite meal",
    "Do you want spicy sauce?"
]


function entreeClientOrders(){
var entreeCb1 = document.getElementById('entreeCb1');
var entreeCb2 = document.getElementById('entreeCb2');
var entreeCb3 = document.getElementById('entreeCb3');
var entreeCb4 = document.getElementById('entreeCb4');
var comment = document.getElementById("m-comment");
let orders = [];

    if (entreeCb1.checked){
        orders.push(1);
        comment.innerHTML = `${sideMenuWaitressComments[0]}. You have two sides choices including in your meal!` 
        comment.style.display = "block";
    } else {
        comment.style.display = "none";
    }

    if (entreeCb2.checked){
        orders.push(2);
    }

    if (entreeCb3.checked){
        orders.push(3);
    }

    if (entreeCb4.checked){
        orders.push(4);
    }

    return orders
}

function sideClientOrders(){
var sideCb1 = document.getElementById('sideCb1');
var sideCb2 = document.getElementById('sideCb2');
var sideCb3 = document.getElementById('sideCb3'); 
let orders = [];
    
    if (sideCb1.checked){
        orders.push(1);
    }
    
    if (sideCb2.checked){
        orders.push(2);
    }
    
    if (sideCb3.checked){
        orders.push(3);
    }
    
    return orders
}


class clientOrders{
    constructor(entreePrices, sidePrices, entreeClientOrders, sideClientOrders){
        this.entreePrices = entreePrices;
        this.sidePrices = sidePrices;
        this.entreeClientOrders = entreeClientOrders;
        this.sideClientOrders = sideClientOrders;
    }

    totalCalculating = () => {
        let entreeTotal = 0;
        let sideTotal = 0;
        let total = 0;
        const totalUp = document.getElementById("total");      
        
        for (const entreeKey in this.entreePrices){       
            for (const i in this.entreeClientOrders){
                if (parseInt(entreeKey) === this.entreeClientOrders[i]){                    
                    entreeTotal += this.entreePrices[entreeKey];
                }
            }
        } 
        
        for (const sideKey in this.sidePrices){       
            for (const j in this.sideClientOrders){
                if (parseInt(sideKey) === this.sideClientOrders[j]){                    
                    sideTotal += this.sidePrices[sideKey];
                }
            }
        }

        total = entreeTotal + sideTotal;
        totalUp.innerHTML = `$${total}`;        
    }
}

const clientOne = new clientOrders(breakfastEntreePrices, breakfastSidePrices, entreeClientOrders(), sideClientOrders());
clientOne.totalCalculating();

