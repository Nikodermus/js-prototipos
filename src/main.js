import Human from './Human';
import Monitor from './Monitor';
import TV from './TV';

let pedro = new Human('pedro', 15, 'h');
let juanita = new Human('juanita', 20, 'm');

let lg = new Monitor('LG', 23);

window.addEventListener('DOMContentLoaded', function () {
    let samsung = new TV('samsung', 75);

    samsung.bajarVolumen();

    console.log(samsung);
});
