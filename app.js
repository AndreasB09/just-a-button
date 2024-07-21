const insults = [
    "You're as bright as a black hole!",
    "I'd agree with you but then we'd both be wrong.",
    "You have the charm of a soggy toast.",
    "Are you always this stupid or are you making a special effort today?",
    "I'd explain it to you but I left my crayons at home.",
    "You're the reason they put instructions on shampoo bottles.",
    "If I had a dollar for every brain you don't have, I'd have one dollar.",
    "You bring everyone so much joy when you leave the room.",
    "You're like a cloud. When you disappear, it's a beautiful day.",
    "You're like a software update. Whenever you're around, I get annoyed and want to ignore you.",
    "I would ask how old you are, but I know you can't count that high.",
    "You have the perfect face for radio.",
    "You're like a cookie without any chocolate chips – just a bit plain.",
    "You must have been born on a highway, because that's where most accidents happen.",
    "I've seen sharper spaghetti noodles."
];

function randomInsult() {
    const randomInsultIndex = Math.floor(Math.random() * insults.length);
    return insults[randomInsultIndex];
}

function showHidden() {
    const outerCircle = document.querySelector('.circle-outer');
    const middleCircle = document.querySelector('.circle-middle');
    const insultContainer = document.querySelector('.insult-container');
    
    outerCircle.style.opacity = '1';
    middleCircle.style.opacity = '1';
    insultContainer.style.opacity = '1';

    insultContainer.textContent = randomInsult();
    
    setTimeout(() => {
        outerCircle.style.opacity = '0';
        middleCircle.style.opacity = '0';
        insultContainer.style.opacity = '0';
    }, 4000);
}