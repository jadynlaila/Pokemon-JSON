$(function(){


let pokemonSelection = document.getElementById('difPokis');
let frontDS = document.getElementById('dsFront');

function makeLanding(){

    //CREATES GAME CARDS FOR EACH POKEMON
    let names = ['charizard', 'charmeleon', 'charmander'];
    const POKEMONCARDS = document.createElement('div');
    POKEMONCARDS.classList.add('allPokemonCards');
    for(let j in names){
        const BACKGROUND = document.createElement('div');
        BACKGROUND.classList.add('gameCard');
        BACKGROUND.setAttribute('id', `${names[j]}`);
        BACKGROUND.setAttribute('id', `gameCard`);
        BACKGROUND.classList.add(`${names[j]}`);
        const INNERPART = document.createElement('div');
        INNERPART.classList.add('innsideArea');
        const NINTENLOGOTOP = document.createElement('div');
        NINTENLOGOTOP.classList.add('nintenLogo');
        const NINTENDO = document.createElement('div');
        NINTENDO.textContent = `Nintendo\no`;
        NINTENDO.classList.add('nintendoTxt')
        const DS = document.createElement('div');
        DS.textContent = `DS`;
        DS.classList.add('DSTxt')
        const TM = document.createElement('div');
        TM.textContent = `TM`;
        TM.classList.add('TMTxt');
        NINTENLOGOTOP.appendChild(NINTENDO);
        NINTENLOGOTOP.appendChild(DS);
        NINTENLOGOTOP.appendChild(TM);
        const IMGSDIV = document.createElement('div');
        IMGSDIV.classList.add('innerIms');
        const POKIIMG = document.createElement('img');
        POKIIMG.src = `images/${names[j]}GameCard.png`;
        console.log(POKIIMG.src)
        //NOT WORKIND ASK HOW TO FIX THIS
        INNERPART.classList.add(`${names[j]}`);
        INNERPART.setAttribute('id', `${names[j]}`)
        INNERPART.appendChild(NINTENLOGOTOP);
        // INNERPART.appendChild(POKNAME);
        INNERPART.appendChild(POKIIMG);
        // INNERPART.appendChild(IMGSDIV)
        BACKGROUND.appendChild(INNERPART);
        POKEMONCARDS.appendChild(BACKGROUND);
    }

    //CREATES NINTENDO DS THING
    const MAINNINTENDO = document.createElement('div');
    MAINNINTENDO.classList.add('wholeNintendo');

    //THIS IS THE MAIN RECTANGLE
    const NINTENBLOCK = document.createElement('div');
    NINTENBLOCK.classList.add('mainNintendo');
    const ONERECT = document.createElement('a');
    const TWORECT = document.createElement('a');
    ONERECT.textContent = `o`;
    TWORECT.textContent = `o`;
    NINTENBLOCK.appendChild(ONERECT);
    NINTENBLOCK.appendChild(TWORECT);

    //PEN STYLING
    const PENNINTENDO = document.createElement('div');
        PENNINTENDO.classList.add('pen');
        const LEFTPEN = document.createElement('div');
        LEFTPEN.classList.add('leftPen');
        const MIDPEN = document.createElement('div');
        MIDPEN.classList.add('midPen');
        const RIGHTPEN = document.createElement('div');
        RIGHTPEN.textContent = `||`
        RIGHTPEN.classList.add('rightPen');
        PENNINTENDO.appendChild(LEFTPEN);
        PENNINTENDO.appendChild(MIDPEN);
        PENNINTENDO.appendChild(RIGHTPEN);

    MAINNINTENDO.appendChild(PENNINTENDO);
    MAINNINTENDO.appendChild(NINTENBLOCK);

    pokemonSelection.appendChild(POKEMONCARDS);
    frontDS.appendChild(MAINNINTENDO);
}



makeLanding();
let selectPokemon = function(){
    let arr = this.classList;
    const POKENAME = arr[1];

    if(POKENAME == 'charizard'){
        document.getElementById(POKENAME).style.left = `700px`;
    }else if(POKENAME == 'charmander'){
        document.getElementById(POKENAME).style.right =  `700px`;
    }
    document.getElementById(POKENAME).style.top = '330px';
}





document.getElementById('charizard').addEventListener('click', selectPokemon);
document.getElementById('charmander').addEventListener('click', selectPokemon);
document.getElementById('charmeleon').addEventListener('click', selectPokemon);

});
// function init(string){
//     let superStr = JSON.parse(string);
//     makeLanding(string);
// }})
