class Device {
    constructor(name, power, brand) {
        this.name = name;
        this.power = power;
        this.brand = brand
        this.isTurnedOn = false;
    }
    turnOn() {
        this.isTurnedOn = true;
        console.log(`Прибор - ${this.name}: включен.`);
    }
    turnOff() {
        this.isTurnedOn = false;
        console.log(`Прибор - ${this.name}: выключен.`);
    }
}


class Lamp extends Device {
    constructor(name, power, brand, brightness) {
        super(name, power, brand);
        this.brightness = brightness;
    }
    statusBrightness(newBrightness) {
        this.brightness = newBrightness;
        console.log(`Яркость лампы установлена на ${this.brightness}`);
    }
}

class Computer extends Device {
    constructor(name, power, brand, software) {
        super(name, power, brand)
        this.software = software;
    }
    start(newSoftware) {
        this.software = newSoftware;
        console.log(`${this.name} запущен. Приложение ${this.software} установлено.`);
    }
}

// создание экземпляров
const lamp = new Lamp("Лампа", 60, "LG");
const computer = new Computer("Компьютер", 500, "Apple");


// включение в розетку
lamp.turnOn();
computer.turnOn();

// вычисление потребляемой мощности
const totalPower = lamp.power + computer.power;
console.log(`Общая мощность приборов: ${totalPower} Вт'`);

// использование дополнительных методов
lamp.statusBrightness(80);
computer.start('Telegram');

// выключение приборов
lamp.turnOff();
computer.turnOff();
