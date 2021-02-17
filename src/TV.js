import Monitor from './Monitor';

// Herencia
class TV extends Monitor {
    constructor(marca, size) {
        super(marca, size);

        this.volume = 0;

        this.html = document.createElement('section');
        document.body.appendChild(this.html);
        this.render();
    }

    render() {
        this.html.innerHTML = `
        <h1> ${this.brand} ++${this.volume} </h1>
        <img src="https://picsum.photos/${10 * this.size}" alt="${this.brand}">
        <button>
            ${this.state ? 'Apagar' : 'Prender'}
        </button>
    `;
    }

    subirVolumen() {
        this.volume += 5;
        this.render();
    }

    bajarVolumen() {
        this.volume -= 5;
        this.render();
    }
}

export default TV;
