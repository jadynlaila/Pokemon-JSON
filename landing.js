let pokemonSelection = document.getElementById('difPokis');

function makeLanding(){
    let names = ['charizard', 'charmeleon', 'charmander']
    for(let j in names){
        const BACKGROUND = document.createElement('div');
        BACKGROUND.classList.add('gameCard');
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
        const POKNAME = document.createElement('p');
        POKNAME.textContent = `${names[j]}`;
        POKNAME.classList.add('name');
        const IMGSDIV = document.createElement('div');
        IMGSDIV.classList.add('innerIms');
        const POKIIMG = document.createElement('img');
        POKIIMG.src = `images/${names[j]}GameCard.png`;
        const RATINGIMG = document.createElement('img');
        RATINGIMG.src = `images/rating.png`;
        RATINGIMG.classList.add('ratingImg');
        console.log(POKIIMG.src)
        //NOT WORKIND ASK HOW TO FIX THIS
        INNERPART.classList.add(`${names[j]}`)
        INNERPART.appendChild(NINTENLOGOTOP);
        // INNERPART.appendChild(POKNAME);
        INNERPART.appendChild(POKIIMG);
        // IMGSDIV.appendChild(RATINGIMG);
        // INNERPART.appendChild(IMGSDIV)
        BACKGROUND.appendChild(INNERPART);
        pokemonSelection.appendChild(BACKGROUND);
    }
}

makeLanding();
// function init(string){
//     let superStr = JSON.parse(string);
//     makeLanding(string);
// }