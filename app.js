const insults = [
    "You're as bright as a black hole!",
    "I'd agree with you but then we'd both be wrong.",
    "You have the charm of a soggy toast.",
    "Are you always this stupid or are you making a special effort today?",
    "I'd explain it to you but I left my crayons at home."
  ];

function showHidden() {
    const outerCircle = document.querySelector('.circle-outer');
    const middleCircle = document.querySelector('.circle-middle');
    
    outerCircle.style.opacity = '1';
    middleCircle.style.opacity = '1';
    
    setTimeout(() => {
        outerCircle.style.opacity = '0';
        middleCircle.style.opacity = '0';
    }, 4000);
}