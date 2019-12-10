var fiat = {
    make: "Fiat",
    model: "500",
    started: false,
    fuel: 0,
    start: function () {
        if (this.fuel > 0) {
            this.started = true;
            alert(this.make + " " + this.model + " is started");
        } else {
            alert(" You need a fuel!!!")
        }
    },
    stop: function () { this.started = false; },
    drive: function () {
        if (this.fuel > 0) {
            alert(this.make + " " + this.model + " goes zoom zoom!");
            this.fuel = thie.fuel - 1;
        }
        else {
            alert("You need a fuel");
            this.stop();
        }
    },
    addFuel: function (amount) { this.fuel = this.fuel + amount; }
};