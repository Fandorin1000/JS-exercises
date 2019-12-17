var passengers = [{
    name: "Jane Doloop",
    paid: true,
    ticket: "coach",
}, {
    name: "Dr. Evel",
    paid: true,
    ticket: "firstclass",
}, {
    name: "Sue Property",
    paid: false,
    ticket: "lighteconomy",
}, {
    name: "John Funcall",
    paid: true,
    ticket: "coach",
}];

function createDinnerOrder(passenger) {
    let orderDinnerFunction;
    if (passenger.ticket === "firstclass") {
        orderDinnerFunction = () => {
            alert(passenger.name + " Что желаете отобедать печень трески или красную икру ложкой?")
        }
    } else if (passenger.ticket === "coach") {
        orderDinnerFunction = () => {
            alert(passenger.name + " Что желаете отобедать печень свиньи или икру баклажанную?")
        };
    } else {
        orderDinnerFunction = () => {
            alert(passenger.name + " Что желаете отобедать печень муравья или баклажан?")
        }
    }
    return orderDinnerFunction;
}

function createDrinkOrder(passenger) {
    let orderDrinkFunction;
    if (passenger.ticket === "firstclass") {
        orderDrinkFunction = () => {
            alert(passenger.name + " Что желаете выпить виски или коктейль?");
        }
    } else if (passenger.ticket === "coach") {
        orderDrinkFunction = () => {
            alert(passenger.name + " Что желаете віпить колу или лимонад?");
        }
    } else {
        orderDrinkFunction = () => {
            alert(passenger.name + " Что желаете выпить воду или водичку?");
        }
    }
    return orderDrinkFunction;
};

function serveCustomer(passenger) {
    let getDrinkOrder = createDrinkOrder(passenger);
    let getDinnerOrder = createDinnerOrder(passenger);

    getDinnerOrder();
    getDrinkOrder();
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
};

servePassengers(passengers);