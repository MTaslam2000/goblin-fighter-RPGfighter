/* Imports */

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
        hp: 5
    },
    {    
        name: 'small ears',
        hp: 3
    },
    {    
        name: 'Ginormous ears',
        hp: 10
    },
];

/* Events */

/* Display Functions */
function displayGoblins() {
    goblinsEl.textContent = '';

    for (let goblin of goblins) {
        const newGoblinsEl = document.createElement('li');
        const nameEl = document.createElement('div');
        const emojiEl = document.createElement('div');
        const hpEl = document.createElement('div');

        nameEl.textContent = goblin.name;
        hpEl.textContent = goblin.hp;

        if (goblin.hp > 0) {
            emojiEl.textContent = '🤣';
        } else {
            emojiEl.textContent = '🙃';
        }

        newGoblinsEl.classList.add('newGoblin');

        newGoblinsEl.append(nameEl, hpEl, emojiEl);
    }
}



// (don't forget to call any display functions you want to run on page load!)
displayGoblins();