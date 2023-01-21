

export function renderGoblin(goblin) {
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
    return newGoblinsEl;
}

