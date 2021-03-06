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
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "charmeleon",
    "order": 6,
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
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
      }
    ],
    "weight": 190
  }`


  $(window).on("load",function(){
    $(".loader-wrapper").fadeOut(400)
})

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

// $(window).on('load', function () {
//   const HTML = document.getElementById('html');
//   HTML.style.opacity = '1';
// });

init(input);
function init(input) {
  let object = JSON.parse(input);
  createRightSide(object);
  createLeftSide(object);
  createScreen(object);
  
}

function createLeftSide(obj) {
  const DPAD = document.createElement('div');
  const SELECT = document.createElement('div');
  SELECT.classList.add('topButtons');
  DPAD.setAttribute('id', 'dpad');
  SELECT.setAttribute('id', 'select');

  SELECT.addEventListener('click', openMenu);




  const DPADBUTTON0 = document.createElement('div');
  DPADBUTTON0.setAttribute('id', `dPadButton0`);
  DPAD.appendChild(DPADBUTTON0);

  const DPAD1WRAP = document.createElement('a');
  const DPADBUTTON1 = document.createElement('div');
  DPADBUTTON1.setAttribute('id', `dPadButton1`);
  DPADBUTTON1.addEventListener('click', dpadUp);
  function dpadUp() {

  }
  DPAD1WRAP.appendChild(DPADBUTTON1);
  DPAD.appendChild(DPAD1WRAP)


  const DPADBUTTON2 = document.createElement('div');
  DPADBUTTON2.setAttribute('id', `dPadButton2`);
  DPAD.appendChild(DPADBUTTON2);

  const DPAD3WRAP = document.createElement('a');
  const DPADBUTTON3 = document.createElement('div');
  DPADBUTTON3.setAttribute('id', `dPadButton3`);
  DPADBUTTON3.addEventListener('click', dpadLeft);
  function dpadLeft() {
    DPAD3WRAP.href = '../charmander/charmander.html'
  }
  DPAD3WRAP.appendChild(DPADBUTTON3);
  DPAD.appendChild(DPAD3WRAP);


  const DPADBUTTON4 = document.createElement('div');
  DPADBUTTON4.setAttribute('id', `dPadButton4`);
  DPAD.appendChild(DPADBUTTON4);

  const DPAD5WRAP = document.createElement('a');
  const DPADBUTTON5 = document.createElement('div');
  DPADBUTTON5.setAttribute('id', `dPadButton5`);
  DPADBUTTON5.addEventListener('click', dpadRight);
  DPAD.appendChild(DPADBUTTON5);
  function dpadRight() {
    DPAD5WRAP.href = '../charizard/charizard.html';
  }
  DPAD5WRAP.appendChild(DPADBUTTON5);
  DPAD.appendChild(DPAD5WRAP);

  const DPADBUTTON6 = document.createElement('div');
  DPADBUTTON6.setAttribute('id', `dPadButton6`);
  DPAD.appendChild(DPADBUTTON6);

  const DPADBUTTON7 = document.createElement('div');
  DPADBUTTON7.setAttribute('id', `dPadButton7`);
  DPADBUTTON7.addEventListener('click', dpadDown);
  function dpadDown() {

  }
  DPAD.appendChild(DPADBUTTON7);

  const DPADBUTTON8 = document.createElement('div');
  DPADBUTTON8.setAttribute('id', `dPadButton8`);
  DPAD.appendChild(DPADBUTTON8);

  leftSide.appendChild(DPAD);
  leftSide.appendChild(SELECT);
  ///popup menu

  let menuHeading = document.createElement('h1');
  menuHeading.textContent = ' MENU ';

  let button1 = document.createElement('a');
  button1.addEventListener('click', closeMenu);
  button1.style.cursor = 'pointer';
  button1.setAttribute('id', 'button1');
  button1.textContent = 'Charmeleon';

  let button2 = document.createElement('a');
  button2.setAttribute('id', 'button2');
  button2.textContent = 'Charmander';
  button2.href = '../charmander/charmander.html'

  let button3 = document.createElement('a');
  button3.setAttribute('id', 'button3');
  button3.textContent = 'Charizard';
  button3.href = '../charizard/charizard.html'
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
  IMGBORDER.setAttribute('id', 'imgBorder');

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

  const { stats } = obj;
  const TABSCONTAINER1 = document.createElement('div');
  TABSCONTAINER1.setAttribute('id', 'tab-3-container');
  const TAB1 = document.createElement('div');
  TAB1.setAttribute('class', 'tabs-3');
  TAB1.addEventListener('click', tab1Run);
  window.addEventListener('load', tab1Run);
  function tab1Run() {
    
    STATNAME.textContent = `${stats[0]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[0]['base_stat']}`;
    EFFORT.textContent = `EFFORT: ${stats[0]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE1 = document.createElement('div');
  TABTITLE1.setAttribute('id', 'tabTitle');
  TABTITLE1.classList.add('hp');
  TABTITLE1.textContent = `${stats[0]['stat']['name']} >`;

  TAB1.appendChild(TABTITLE1);
  TABSCONTAINER1.appendChild(TAB1);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER1);


  const TABSCONTAINER2 = document.createElement('div');
  TABSCONTAINER2.setAttribute('id', 'tab-3-container');
  const TAB2 = document.createElement('div');
  TAB2.setAttribute('class', 'tabs-3');
  TAB2.addEventListener('click', tab2Run)
  function tab2Run() {
    STATNAME.textContent = `${stats[1]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[1]['base_stat']}`;
    EFFORT.textContent = `EFFORT: ${stats[1]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE2 = document.createElement('div');
  TABTITLE2.setAttribute('id', 'tabTitle');
  TABTITLE2.textContent = `${stats[1]['stat']['name']} >`
  TAB2.appendChild(TABTITLE2);
  TABTITLE2.classList.add('attack');
  TABSCONTAINER2.appendChild(TAB2);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER2);

  const TABSCONTAINER3 = document.createElement('div');
  TABSCONTAINER3.setAttribute('id', 'tab-3-container');
  const TAB3 = document.createElement('div');
  TAB3.setAttribute('class', 'tabs-3');
  TAB3.addEventListener('click', tab3Run)
  function tab3Run() {

    STATNAME.textContent = `${stats[2]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[2]['base_stat']}`;
    EFFORT.textContent = `EFFORT: ${stats[2]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE3 = document.createElement('div');
  TABTITLE3.setAttribute('id', 'tabTitle');
  TABTITLE3.textContent = `${stats[2]['stat']['name']} >`
  TAB3.appendChild(TABTITLE3);
  TABTITLE3.classList.add('defense');
  TABSCONTAINER3.appendChild(TAB3);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER3);

  const TABSCONTAINER4 = document.createElement('div');
  TABSCONTAINER4.setAttribute('id', 'tab-3-container');
  const TAB4 = document.createElement('div');
  TAB4.setAttribute('class', 'tabs-3');
  TAB4.addEventListener('click', tab4Run)
  function tab4Run() {

    STATNAME.textContent = `${stats[3]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[3]['base_stat']}`;
    EFFORT.textContent = `EFFORT: ${stats[3]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE4 = document.createElement('div');
  TABTITLE4.setAttribute('id', 'tabTitle');
  TABTITLE4.textContent = `${stats[3]['stat']['name']} >`
  TAB4.appendChild(TABTITLE4);
  TABTITLE4.classList.add('special-attack');
  TABSCONTAINER4.appendChild(TAB4);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER4);

  const TABSCONTAINER5 = document.createElement('div');
  TABSCONTAINER5.setAttribute('id', 'tab-3-container');
  const TAB5 = document.createElement('div');
  TAB5.setAttribute('class', 'tabs-3');
  TAB5.addEventListener('click', tab5Run)
  function tab5Run() {

    STATNAME.textContent = `${stats[4]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[4]['base_stat']}`;
    EFFORT.textContent = `EFFORT: ${stats[4]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE5 = document.createElement('div');
  TABTITLE5.setAttribute('id', 'tabTitle');
  TABTITLE5.textContent = `${stats[4]['stat']['name']} >`
  TAB5.appendChild(TABTITLE5);
  TABTITLE5.classList.add('special-defense');
  TABSCONTAINER5.appendChild(TAB5);
  SECONDTABSHOLDER.appendChild(TABSCONTAINER5);

  const TABSCONTAINER6 = document.createElement('div');
  TABSCONTAINER6.setAttribute('id', 'tab-3-container');
  const TAB6 = document.createElement('div');
  TAB6.setAttribute('class', 'tabs-3');
  TAB6.addEventListener('click', tab6Run)
  function tab6Run() {

    STATNAME.textContent = `${stats[5]['stat']['name']}`;
    BASESTAT.textContent = `BASE STAT: ${stats[5]['base_stat']}`;
    EFFORT.textContent = `EFFORT: ${stats[5]['effort']}`;
    STATSBOX.appendChild(STATNAME);
    STATSBOX.appendChild(BASESTAT);
    STATSBOX.appendChild(EFFORT);
  }
  const TABTITLE6 = document.createElement('div');
  TABTITLE6.setAttribute('id', 'tabTitle');
  TABTITLE6.textContent = `${stats[5]['stat']['name']} >`
  TAB6.appendChild(TABTITLE6);
  TABTITLE4.classList.add('speed');
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
  ABILITYBOX1.textContent = '- BLAZE';
  ABILITYBOX2.textContent = '- SOLAR-POWER';

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

  function changeTabScreen(){
    if(traits == 1){
      tab1Run();
    }else if(traits == 2){
      tab2Run();
    }else if(traits == 3){
      tab3Run();
    }else if(traits ==4){
      tab4Run();
    }else if(traits ==5){
      tab5Run();
    }else if(traits ==6){
      tab6Run();
    }
  }
  
  let chooseTraitUp = function(){
      traits++;
      if(traits > 6){
        traits = 1;
      }
    changeTabScreen();
  };
  

  let chooseTraitDown = function(){
    console.log('piwe')
      traits--;
      if(traits < 1){
        traits = 6;
      }
      changeTabScreen();
  }

  let traits = 1;

  document.getElementById('dPadButton1').addEventListener('click', chooseTraitUp);
  document.getElementById('dPadButton7').addEventListener('click', chooseTraitDown);

}

function createRightSide(obj) {
  const STARTWRAP = document.createElement('a');
  const START = document.createElement('div');
  const RIGHTBUTTONS = document.createElement('div');
  START.classList.add('topButtons');
  START.setAttribute('id', 'start');
  RIGHTBUTTONS.setAttribute('id', 'rightButtons');

  START.addEventListener('click', homePage);
  function homePage(){
    STARTWRAP.href = '../index.html';
  }

  STARTWRAP.appendChild(START)
  rightSide.appendChild(STARTWRAP);
  rightSide.appendChild(RIGHTBUTTONS);
  for (let i = 0; i < 9; i++) {
    const ABXY = document.createElement('div');
    const BOOTEN = document.createElement('div');

    ABXY.setAttribute('id', `aBXY${i}`);
    BOOTEN.setAttribute('id', `booten${i}`);

    RIGHTBUTTONS.appendChild(ABXY);
    ABXY.appendChild(BOOTEN);
  }

}

booten1.textContent = 'Y'
booten3.textContent = 'X'
booten5.textContent = 'A'
booten7.textContent = 'B'

aBXY1.addEventListener('click',changePink);
function changePink(){
  // background coloring
  html.style.backgroundColor = 'pink';
  leftSide.style.backgroundColor = 'pink';
  rightSide.style.backgroundColor = 'pink';
  body.style.backgroundColor = 'pink';

  // dpad coloring
  dPadButton0.style.backgroundColor = 'pink';
  dPadButton1.style.backgroundColor = 'rgb(216, 162, 171)';
  dPadButton2.style.backgroundColor = 'pink';
  dPadButton3.style.backgroundColor = 'rgb(216, 162, 171)';
  dPadButton4.style.backgroundColor = 'rgb(216, 162, 171)';
  dPadButton5.style.backgroundColor = 'rgb(216, 162, 171)';
  dPadButton6.style.backgroundColor = 'pink';
  dPadButton7.style.backgroundColor = 'rgb(216, 162, 171)';
  dPadButton8.style.backgroundColor = 'pink';

  // abxy coloring
  aBXY1.style.backgroundColor = 'rgb(216, 162, 171)';
  aBXY3.style.backgroundColor = 'rgb(216, 162, 171)';
  aBXY5.style.backgroundColor = 'rgb(216, 162, 171)';
  aBXY7.style.backgroundColor = 'rgb(216, 162, 171)';

  // start and select coloring
  start.style.backgroundColor = 'rgb(216, 162, 171)';
  select.style.backgroundColor = 'rgb(216, 162, 171)';
}


aBXY3.addEventListener('click',changeBlue);
function changeBlue(){
  // background coloring
  html.style.backgroundColor = 'rgb(0, 0, 161)';
  leftSide.style.backgroundColor = 'rgb(0, 0, 161)';
  rightSide.style.backgroundColor = 'rgb(0, 0, 161)';
  body.style.backgroundColor = 'rgb(0, 0, 161)';

  // dpad coloring
  dPadButton0.style.backgroundColor = 'rgb(0, 0, 161)';
  dPadButton1.style.backgroundColor = 'aqua';
  dPadButton2.style.backgroundColor = 'rgb(0, 0, 161)';
  dPadButton3.style.backgroundColor = 'aqua';
  dPadButton4.style.backgroundColor = 'aqua';
  dPadButton5.style.backgroundColor = 'aqua';
  dPadButton6.style.backgroundColor = 'rgb(0, 0, 161)';
  dPadButton7.style.backgroundColor = 'aqua';
  dPadButton8.style.backgroundColor = 'rgb(0, 0, 161)';

  // abxy coloring
  aBXY1.style.backgroundColor = 'aqua';
  aBXY3.style.backgroundColor = 'aqua';
  aBXY5.style.backgroundColor = 'aqua';
  aBXY7.style.backgroundColor = 'aqua';

  // start and select coloring
  start.style.backgroundColor = 'aqua';
  select.style.backgroundColor = 'aqua';
}


aBXY5.addEventListener('click',changeRed);
function changeRed(){
  // background coloring
  html.style.backgroundColor = 'rgb(168, 0, 0)';
  leftSide.style.backgroundColor = 'rgb(168, 0, 0)';
  rightSide.style.backgroundColor = 'rgb(168, 0, 0)';
  body.style.backgroundColor = 'rgb(168, 0, 0)';

  // dpad coloring
  dPadButton0.style.backgroundColor = 'rgb(168, 0, 0)';
  dPadButton1.style.backgroundColor = 'rgb(80, 0, 0)';
  dPadButton2.style.backgroundColor = 'rgb(168, 0, 0)';
  dPadButton3.style.backgroundColor = 'rgb(80, 0, 0)';
  dPadButton4.style.backgroundColor = 'rgb(80, 0, 0)';
  dPadButton5.style.backgroundColor = 'rgb(80, 0, 0)';
  dPadButton6.style.backgroundColor = 'rgb(168, 0, 0)';
  dPadButton7.style.backgroundColor = 'rgb(80, 0, 0)';
  dPadButton8.style.backgroundColor = 'rgb(168, 0, 0)';

  // abxy coloring
  aBXY1.style.backgroundColor = 'rgb(80, 0, 0)';
  aBXY3.style.backgroundColor = 'rgb(80, 0, 0)';
  aBXY5.style.backgroundColor = 'rgb(80, 0, 0)';
  aBXY7.style.backgroundColor = 'rgb(80, 0, 0)';

  // start and select coloring
  start.style.backgroundColor = 'rgb(80, 0, 0)';
  select.style.backgroundColor = 'rgb(80, 0, 0)';
}


aBXY7.addEventListener('click',changeClear);
function changeClear(){
  // background coloring
  html.style.backgroundColor = '';
  leftSide.style.backgroundColor = '';
  rightSide.style.backgroundColor = '';
  body.style.backgroundColor = '';

  // dpad coloring
  dPadButton0.style.backgroundColor = '';
  dPadButton1.style.backgroundColor = '';
  dPadButton2.style.backgroundColor = '';
  dPadButton3.style.backgroundColor = '';
  dPadButton4.style.backgroundColor = '';
  dPadButton5.style.backgroundColor = '';
  dPadButton6.style.backgroundColor = '';
  dPadButton7.style.backgroundColor = '';
  dPadButton8.style.backgroundColor = '';

  // abxy coloring
  aBXY1.style.backgroundColor = '';
  aBXY3.style.backgroundColor = '';
  aBXY5.style.backgroundColor = '';
  aBXY7.style.backgroundColor = '';

  // start and select coloring
  start.style.backgroundColor = '';
  select.style.backgroundColor = '';
}

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

