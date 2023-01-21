/* Imports */
import { renderGoblin } from "./render-utils.js";

/* Get DOM Elements */
const goblinsEl = document.getElementById('goblins');
const goblinsBeatenEl = document.getElementById('goblins-beaten');
const goblinInputEl = document.getElementById('goblin-input');
const summonButtonEl = document.getElementById('summon-button');
const playerHpEl = document.getElementById('player-hp');

/* State */
let goblinsBeaten = 0;
let playerHp = 5; 
let goblins = [
    {    
        name: 'big ears',
        hp: 5,
    },
    {    
        name: 'small ears',
        hp: 3,
    },
    {    
        name: 'Ginormous ears',
        hp: 10,
    },
];

/* Events */
summonButtonEl.addEventListener('click', () => {
    const newGuyName = goblinInputEl.value;
    // goblins.push(newGuyName);
    const newGuy = {
        name: newGuyName || `New Guy ${Math.floor(Math.random() * 100)}`,
        hp: 2,
    };
    goblins.push(newGuy);

    goblinInputEl.value = '';

    displayGoblins();

});

/* Display Functions */
function displayGoblins() {
    goblinsEl.textContent = '';

    for (let goblin of goblins) {
        const newGoblinsEl = renderGoblin(goblin);

        goblinsEl.append(newGoblinsEl);


    }
}



// (don't forget to call any display functions you want to run on page load!)
displayGoblins();
