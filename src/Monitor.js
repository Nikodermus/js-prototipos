class Monitor {
    constructor(marca, size) {
        this.brand = marca;
        this.size = size;

        // Clase decide
        this.state = false;
    }

    prender() {
        this.state = true;
    }

    apagar() {
        this.state = false;
    }
}

export default Monitor;
