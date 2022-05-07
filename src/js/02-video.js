import Player from '@vimeo/player';

let throttle = require('lodash.throttle');



const iframe = document.querySelector('iframe');

const player = new Player(iframe);

function setingsOfPlayer({seconds}) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
        
};



player.on('timeupdate', throttle(setingsOfPlayer, 1000));


function previousPlayerTime() {
    
    const getCurrentPlayerTime= JSON.parse(localStorage.getItem("videoplayer-current-time"));
if(!getCurrentPlayerTime){
    return
}

    player.setCurrentTime(getCurrentPlayerTime);
    
};


document.addEventListener("DOMContentLoaded", previousPlayerTime);
