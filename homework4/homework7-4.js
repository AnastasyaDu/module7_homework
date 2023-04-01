function Device(name) {
    this.device = 'electrical appliance'
	this.name = name
}

Device.prototype.getPower = function (power, on, t) {
	let turnOn = on;
	if(on === 1){
		turnOn = 'included';
	}else{
		turnOn = 'switched off';
};

console.log(`electricity consumption ${this.name} per  ${t} hour = ${power * t}W ${this.name}: ${turnOn}`);
};

function  specific (name, color) {
	this.name = name,
	this.color = color
}

specific.prototype = new Device();

const deckLamp = new  specific('deckLamp', 'white');
const computer = new  specific('computer', 'gray');

console.log(deckLamp, computer);
deckLamp.getPower(100, 2, 6);
computer.getPower(300, 6, 1);

