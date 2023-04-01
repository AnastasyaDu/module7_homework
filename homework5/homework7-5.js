class Device {
    constructor(name) {
        this.device = 'electrical appliance';
        this.name = name;
    }
    getPower(power, on, t) {
        let turnOn = on;
        if (on === 1) {
            turnOn = 'included';
        } else {
            turnOn = 'switched off';
        };

        console.log(`electricity consumption ${this.name} per  ${t} hour = ${power * t}W ${this.name}: ${turnOn}`);
    }
}


class specific extends Device{
    constructor(name, color) {
        super(name);
        this.color = color;
    }
}



const deckLamp = new  specific('deckLamp', 'white');
const computer = new  specific('computer', 'gray');

console.log(deckLamp, computer);
deckLamp.getPower(100, 2, 6);
computer.getPower(300, 6, 1);
