const carte = document.querySelectorAll('.carte');

let voltata = false;
let primaCarta, secondaCarta;
let blocco = false;

function voltala() {
    if(blocco) return;
    if(this===primaCarta) return;
    this.classList.add('flip');
    if (!voltata) {
        voltata = true;
        primaCarta = this;
        return;
    } 
        voltata = false;
        secondaCarta = this;

        accoppiata();
    
}
function accoppiata() {
    let coppia = primaCarta.dataset.framework === secondaCarta.dataset.framework;
    coppia ? disabilitaCarta() : ribalta();
}


function disabilitaCarta() {
    primaCarta.removeEventListener('click', voltala);
    secondaCarta.removeEventListener('click', voltala);
    reset();
}
function ribalta() {
    blocco = true;
    setTimeout(() => {
        primaCarta.classList.remove('flip');
        secondaCarta.classList.remove('flip');
        blocco = false;
    }, 1500);
}
function reset(){
    [voltata, blocco] = [false, false];
    [primaCarta, secondaCarta] = [null, null];
}

carte.forEach(carta => carta.addEventListener('click', voltala));

(function mescola (){
    carte.forEach(carta =>{
        let randomPos = Math.floor(Math.random()*8);
        carta.style.order = randomPos;
    });
})();