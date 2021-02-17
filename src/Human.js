// Planos de un humano
function Human(nombrecito, edad, genero) {
    // this ---> humanito de verdad
    this.name = nombrecito;
    this.age = edad;
    this.gender = genero;

    this.hi = function () {
        console.log(`Hi, my name is ${this.name}`);
        console.log(`Hi, my name is${this.name}`);
    };

    this.stomach = [];

    this.crecer = function () {
        this.age += 1;
    };
}

export default Human;

// syntax sugar
