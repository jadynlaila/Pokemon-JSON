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
///
const FADE = document.createElement('div');
FADE.setAttribute('id', 'menuOverlay');
screen.appendChild(FADE);
const POPUP = document.createElement('div');
POPUP.setAttribute('id', 'popupStyle');
screen.appendChild(POPUP);



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

  for(let i = 0; i < 9; i++){
    const DPADBUTTON = document.createElement('div');
    DPADBUTTON.setAttribute('id', `dPadButton${i}`);
    DPAD.appendChild(DPADBUTTON);
  }
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
  IMGBORDER.setAttribute('id','imgBorder');

  const BASICINFO = document.createElement('div');
  BASICINFO.setAttribute('id', 'basicInfo');


  const { name, weight, height, base_experience: baseExp } = obj;
  const BASICINFO1 = document.createElement('div');
  BASICINFO1.textContent = `Name: ${name}`;
  BASICINFO1.setAttribute('id', 'name');

  const BASICINFO2 = document.createElement('div');
  BASICINFO2.textContent = `Weight: ${weight}`;
  BASICINFO2.setAttribute('id', 'weight');

  const BASICINFO3 = document.createElement('div');
  BASICINFO3.textContent = `Height: ${height}`;
  BASICINFO3.setAttribute('id', 'height');

  const BASICINFO4 = document.createElement('div');
  BASICINFO4.textContent = `Base Experience: ${baseExp}`;
  BASICINFO4.setAttribute('id', 'baseExperience');

  BASICINFO.appendChild(BASICINFO1);
  BASICINFO.appendChild(BASICINFO2);
  BASICINFO.appendChild(BASICINFO3);
  BASICINFO.appendChild(BASICINFO4);

  ///making tags inside of bottom section 

  // const TABS = document.createElement('div');
  // for (let i = 0; i <= 5; i++) {
  //   const TABSCONTAINER = document.createElement('div');
  //   TABSCONTAINER.setAttribute('id', 'tab-3-container');

  //   const TABS = document.createElement('div');
  //   TABS.setAttribute('class', 'tabs-3');

  //   TABS.setAttribute('id', `stats-${i + 1}`);
  //   const { stats } = obj;

  //   let content = `${stats[i]['stat']['name']}  >`;


  //   const TABTITLE = document.createElement('div');
  //   TABTITLE.setAttribute('id', 'tabTitle');
  //   TABTITLE.textContent = content;

  //   TABS.appendChild(TABTITLE);
  //   TABSCONTAINER.appendChild(TABS);
  //   SECONDTABSHOLDER.appendChild(TABSCONTAINER);
  // }


  const TABSHOLDER = document.createElement("div");
  TABSHOLDER.setAttribute('class', 'tabs-1');

  const SECONDTABSHOLDER = document.createElement('div');
  SECONDTABSHOLDER.setAttribute('id', 'tabs-2');

  const STATSBOX = document.createElement('div');
  STATSBOX.setAttribute('id', 'statsBox');

  const STATNAME = document.createElement('div');
  STATNAME.setAttribute('id', 'statName');
  STATNAME.TEXTCONTENT = 'hp';
  const BASESTAT = document.createElement('div');
  BASESTAT.setAttribute('id', 'baseStat');
  BASESTAT.TEXTCONTENT = 'BASE STAT: 78';

  const EFFORT = document.createElement('div');
  EFFORT.setAttribute('id', 'effort');
  EFFORT.TEXTCONTENT = 'EFFORT: 0';

  const {stats} = obj;
  const TABSCONTAINER1 = document.createElement('div');
  TABSCONTAINER1.setAttribute('id', 'tab-3-container');
  const TAB1 = document.createElement('div');
  TAB1.setAttribute('class', 'tabs-3');
  TAB1.addEventListener('click', tab1Run);
  window.addEventListener('load', tab1Run);
  function tab1Run(){

    STATNAME.textContent = `${stats[0]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[0]['base_stat']}`;
    EFFORT.textContent  =`EFFORT: ${stats[0]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE1 = document.createElement('div');
  TABTITLE1.setAttribute('id','tabTitle');
  TABTITLE1.textContent = `${stats[0]['stat']['name']} >`
  TAB1.appendChild(TABTITLE1);
  TABSCONTAINER1.appendChild(TAB1);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER1);


  const TABSCONTAINER2 = document.createElement('div');
  TABSCONTAINER2.setAttribute('id', 'tab-3-container');
  const TAB2 = document.createElement('div');
  TAB2.setAttribute('class', 'tabs-3');
  TAB2.addEventListener('click', tab2Run)
  function tab2Run(){

    STATNAME.textContent = `${stats[1]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[1]['base_stat']}`;
    EFFORT.textContent  =`EFFORT: ${stats[1]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE2 = document.createElement('div');
  TABTITLE2.setAttribute('id','tabTitle');
  TABTITLE2.textContent = `${stats[1]['stat']['name']} >`
  TAB2.appendChild(TABTITLE2);
  TABSCONTAINER2.appendChild(TAB2);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER2);

  const TABSCONTAINER3 = document.createElement('div');
  TABSCONTAINER3.setAttribute('id', 'tab-3-container');
  const TAB3 = document.createElement('div');
  TAB3.setAttribute('class', 'tabs-3');
  TAB3.addEventListener('click', tab3Run)
  function tab3Run(){

    STATNAME.textContent = `${stats[2]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[2]['base_stat']}`;
    EFFORT.textContent  =`EFFORT: ${stats[2]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE3 = document.createElement('div');
  TABTITLE3.setAttribute('id','tabTitle');
  TABTITLE3.textContent = `${stats[2]['stat']['name']} >`
  TAB3.appendChild(TABTITLE3);
  TABSCONTAINER3.appendChild(TAB3);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER3);

  const TABSCONTAINER4 = document.createElement('div');
  TABSCONTAINER4.setAttribute('id', 'tab-3-container');
  const TAB4 = document.createElement('div');
  TAB4.setAttribute('class', 'tabs-3');
  TAB4.addEventListener('click', tab4Run)
  function tab4Run(){

    STATNAME.textContent = `${stats[3]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[3]['base_stat']}`;
    EFFORT.textContent  =`EFFORT: ${stats[3]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE4 = document.createElement('div');
  TABTITLE4.setAttribute('id','tabTitle');
  TABTITLE4.textContent = `${stats[3]['stat']['name']} >`
  TAB4.appendChild(TABTITLE4);
  TABSCONTAINER4.appendChild(TAB4);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER4);

  const TABSCONTAINER5 = document.createElement('div');
  TABSCONTAINER5.setAttribute('id', 'tab-3-container');
  const TAB5 = document.createElement('div');
  TAB5.setAttribute('class', 'tabs-3');
  TAB5.addEventListener('click', tab5Run)
  function tab5Run(){

    STATNAME.textContent = `${stats[4]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[4]['base_stat']}`;
    EFFORT.textContent  =`EFFORT: ${stats[4]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE5 = document.createElement('div');
  TABTITLE5.setAttribute('id','tabTitle');
  TABTITLE5.textContent = `${stats[4]['stat']['name']} >`
  TAB5.appendChild(TABTITLE5);
  TABSCONTAINER5.appendChild(TAB5);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER5);

  const TABSCONTAINER6 = document.createElement('div');
  TABSCONTAINER6.setAttribute('id', 'tab-3-container');
  const TAB6 = document.createElement('div');
  TAB6.setAttribute('class', 'tabs-3');
  TAB6.addEventListener('click', tab6Run)
  function tab6Run(){

    STATNAME.textContent = `${stats[5]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[5]['base_stat']}`;
    EFFORT.textContent  =`EFFORT: ${stats[5]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE6 = document.createElement('div');
  TABTITLE6.setAttribute('id','tabTitle');
  TABTITLE6.textContent = `${stats[5]['stat']['name']} >`
  TAB6.appendChild(TABTITLE6);
  TABSCONTAINER6.appendChild(TAB6);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER6);

  TABSHOLDER.appendChild(SECONDTABSHOLDER);



  const ABILITYBOX = document.createElement("div");
  ABILITYBOX.setAttribute('id', 'abilityBox');

  const ABILITYTITLE = document.createElement('div');
  ABILITYTITLE.setAttribute('id', 'abilityTitle');
  const ABILITYBOX1 = document.createElement('div');
  ABILITYBOX1.setAttribute('id', 'ability1');
  const ABILITYBOX2 = document.createElement('div');
  ABILITYBOX2.setAttribute('id', 'ability2');

  ABILITYTITLE.textContent = 'ABILITIES';
  ABILITYBOX1.textContent = '>- BLAZE';
  ABILITYBOX2.textContent = '>- SOLAR-POWER';

  ABILITYBOX.appendChild(ABILITYTITLE);
  ABILITYBOX.appendChild(ABILITYBOX1);
  ABILITYBOX.appendChild(ABILITYBOX2);
  ///appending everything together
  TOP.appendChild(IMGBORDER);
  TOP.appendChild(BASICINFO);

  BOTTOM.appendChild(TABSHOLDER);
  //append tabs here when done
  BOTTOM.appendChild(STATSBOX);
  BOTTOM.appendChild(ABILITYBOX);
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
  for(let i = 0; i < 9; i++){
    const ABXY = document.createElement('div');
    DPADBUTTON.setAttribute('id', `aBXY${i}`);
    DPAD.appendChild(ABXY);
  }
}

// const {}

///popup menu

let menuHeading = document.createElement('h1');
menuHeading.textContent = ' MENU ';

let button1 = document.createElement('a');
button1.setAttribute('id', 'button1');
button1.textContent = 'Charmeleon';
button1.href = '../charmeleon/charmeleon.html'

let button2 = document.createElement('a');
button2.setAttribute('id', 'button2');
button2.textContent = 'Charmander';
button2.href = '../charmander/charmander.html'

let button3 = document.createElement('a');
button3.addEventListener('click', closeMenu);
button3.style.cursor = 'pointer';
button3.setAttribute('id', 'button3');
button3.textContent = 'Charizard';
// button3.href = 'charizard.html'


let close = document.createElement('a');
close.addEventListener('click', closeMenu);
close.style.cursor = 'pointer';
close.setAttribute('id', 'closeButton');
close.textContent = 'Close';
// close.href = 'charizard.html'

function closeMenu() {
  POPUP.style.display = 'none';
  FADE.style.display = 'none'
}


function openMenu() {
  POPUP.style.display = 'block';
  FADE.style.display = "block";
  POPUP.appendChild(menuHeading);
  POPUP.appendChild(button1);
  POPUP.appendChild(button2);
  POPUP.appendChild(button3);
  POPUP.appendChild(close);
  // let closeDom = document.getElementById('closeButton');
  // let button3Dom = document.getElementById('button3');
  // closeDom.addEventListener('click','closeMenu');
  // button3Dom.addEventListener('click','closeMenu');
}

