    let pokemonSelection = document.getElementById('difPokis');
    let frontDS = document.getElementById('dsFront');
    let body = document.getElementById('body');
    function makeLanding(){
    
        //CREATES GAME CARDS FOR EACH POKEMON
        let names = ['charizard', 'charmeleon', 'charmander'];
        const POKEMONCARDS = document.createElement('div');
        POKEMONCARDS.classList.add('allPokemonCards');
        POKEMONCARDS.setAttribute('id', 'allPokemons');
        for(let j in names){
            const BACKGROUND = document.createElement('div');
            BACKGROUND.classList.add('gameCard');
            BACKGROUND.classList.add('gamecardHover');
            BACKGROUND.setAttribute('id', `gameCard`);
            BACKGROUND.setAttribute('id', `${names[j]}`);
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
            // INNERPART.setAttribute('id', `${names[j]}`);
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

    function makeScreenBlack (){
        const BLACKSCREEN = document.createElement('div');
        BLACKSCREEN.classList.add('blackScreen');
        body.appendChild(BLACKSCREEN);
        BLACKSCREEN.style.transition = `2s`;
        setTimeout(function(){
            BLACKSCREEN.style.backgroundColor = 'black';
        }, 1000)
    };

    let selectPokemon = function(){
        let arr = this.classList;
        console.log(arr)
        const POKENAME = arr[2];
        console.log(POKENAME);
        let names = ['charizard', 'charmeleon', 'charmander'];
        for(let i of names){
            //PROBLEMS BUT THIS IS THE ONLY PLACE
            document.getElementById(i).removeEventListener('click', selectPokemon);
            document.getElementById(i).classList.remove('gamecardHover');
        }
        if(POKENAME == 'charmander'){
            document.getElementById(POKENAME).style.transform = 'scale(1.2)'
            document.getElementById(POKENAME).style.transition = '1.5s'
            document.getElementById(POKENAME).style.boxShadow = '0 0 0 100000px rgba(0,0,0,.2)';
            setTimeout(function(){
                document.getElementById(POKENAME).style.transition = '2.5s'
                document.getElementById(POKENAME).style.margin = '500px 0 0 0';   
                makeScreenBlack();
            }, 1501)
            return;
        }else{
            document.getElementById(POKENAME).style.transition = '2.5s'
            document.getElementById(POKENAME).style.transform = 'scale(1.2)'
            document.getElementById(POKENAME).style.boxShadow = '0 0 0 100000px rgba(0,0,0,.2)';
            document.getElementById(POKENAME).style.zIndex = '100';
            if(POKENAME == 'charmeleon'){
                document.getElementById(POKENAME).style.left = '-65px';
            }if(POKENAME == 'charizard'){
                document.getElementById(POKENAME).style.right = '-65px';
            }

            setTimeout(function(){
                document.getElementById(POKENAME).style.margin = '500px 0 0 0';   
                makeScreenBlack();
            }, 2600)
        }

    }

    
    
    document.getElementById("charizard").addEventListener('click', selectPokemon);

    document.getElementById('charmander').addEventListener('click', selectPokemon);

    document.getElementById('charmeleon').addEventListener('click', selectPokemon);
