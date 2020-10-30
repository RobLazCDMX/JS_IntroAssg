'use strict';

const toneOfVoice = prompt("Please use one word to state how you feel");

if(toneOfVoice === toneOfVoice.toUpperCase()) {
    console.log('Shouting');
} else if (toneOfVoice === toneOfVoice.toLowerCase()){
    console.log('Whispering');
} else {
    console.log('Talking Normally');
}