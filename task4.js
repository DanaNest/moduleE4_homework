// Родительская функция
function Device(name, power, brand) {
    this.name = name;
    this.power = power;
    this.brand = brand
    this.isTurnedOn = false;
}

// Методы родительской функции
Device.prototype.turnOn = function() {
    this.isTurnedOn = true;
    console.log(`Прибор - ${this.name}: включен.`);
};

Device.prototype.turnOff = function() {
    this.isTurnedOn = false;
    console.log(`Прибор - ${this.name}: выключен.`);
};

// Приборы, наследующиеся от родительской функции
// лампа
function Lamp(name, power, brand, brightness) {
    Device.call(this, name, power, brand);
    this.brightness = brightness;
}
// компьютер
function Computer(name, power, brand) {
    Device.call(this, name, power);
    this.brand = brand;
}

// установка делегирующей связи
Lamp.prototype = Object.create(Device.prototype);
Lamp.prototype.constructor = Lamp;

Computer.prototype = Object.create(Device.prototype);
Computer.prototype.constructor = Computer;

// доп метод лампы
Lamp.prototype.statusBrightness = function(newBrightness) {
    this.brightness = newBrightness;
    console.log(`Яркость лампы установлена на ${this.brightness}`);
};

// доп метод компьютера
Computer.prototype.start = function(newSoftware) {
    this.software = newSoftware;
    console.log(`${this.name} запущен. Приложение ${this.software} установлено.`);
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
