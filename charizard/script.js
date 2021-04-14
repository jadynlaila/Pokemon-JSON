let input =
  `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,
    "stats": [
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 84,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 109,
        "effort": 3,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "flying"
        }
      }
    ],
    "weight": 905
}`


let leftSide = document.getElementById("leftSide");
let screen = document.getElementById("screen");
let rightSide = document.getElementById("rightSide");
const POPUP = document.createElement('div');
POPUP.setAttribute('id', 'popup');
screen.appendChild(POPUP);
const FADE = document.createElement('div');
FADE.setAttribute('id','menuOverlay');
screen.appendChild(FADE);

init(input);
function init(input) {
  let object = JSON.parse(input);
  createLeftSide(object);
  createScreen(object);
  createRightSide(object);
}

function createLeftSide(obj) {
  const DPAD = document.createElement('div');
  const SELECT = document.createElement('div');
  SELECT.classList.add('topButtons');
  DPAD.setAttribute('id', 'dpad');
  SELECT.setAttribute('id', 'select');

  SELECT.addEventListener('click', openMenu);

  leftSide.appendChild(DPAD);
  leftSide.appendChild(SELECT);

}

function createScreen(obj) {
  ///making top and bottom sections and adding IDs to them
  const TOP = document.createElement('div');
  TOP.setAttribute('id', 'top');
  const BOTTOM = document.createElement('div');
  BOTTOM.setAttribute('id', 'bottom');

  ///making the tags inside of the top section, need to add url to image src two lines below once we find an image
  //also added IDs
  const IMGBORDER = document.createElement('div');

  const IMAGE = document.createElement('img');
  IMAGE.setAttribute('src', '');
  IMGBORDER.appendChild(IMAGE);
  const BASICINFO = document.createElement('div');
  BASICINFO.setAttribute('id', 'basicInfo');

  ///making tags inside of bottom section 
  const TABSHOLDER = document.createElement("div");
  TABSHOLDER.setAttribute('class', 'tabs-1');
  // const TABS = document.createElement('div');
  for(let i = 1; i <= 6; i++){
    const TABS = document.createElement('div');
    TABS.setAttribute('class', 'tabs-3');
    TABS.setAttribute('id', `stats-${i}`);
    TABSHOLDER.appendChild(TABS);
  }

  const STATSBOX = document.createElement('div');
  STATSBOX.setAttribute('id', 'statsBox');
  const ABILITYBOX1 = document.createElement("div");
  ABILITYBOX1.setAttribute('id', 'abilityBox1');
  const ABILITYBOX2 = document.createElement('div');
  ABILITYBOX2.setAttribute('id', 'abilityBox2');

  ///appending everything together
  IMGBORDER.appendChild(IMAGE);
  TOP.appendChild(IMGBORDER);
  TOP.appendChild(BASICINFO);

  BOTTOM.appendChild(TABSHOLDER);
  //append tabs here when done
  BOTTOM.appendChild(STATSBOX);
  BOTTOM.appendChild(ABILITYBOX1);
  BOTTOM.appendChild(ABILITYBOX2);
  screen.appendChild(TOP);
  screen.appendChild(BOTTOM);
}

function createRightSide(obj) {
  const DPAD = document.createElement('div');
  const START = document.createElement('div');
  START.classList.add('topButtons');
  DPAD.setAttribute('id', 'dpad');
  START.setAttribute('id', 'start');


  rightSide.appendChild(DPAD);
  rightSide.appendChild(START);
}

function openMenu(){
  POPUP.style.display = 'block';
  FADE.style.display="block";
}

