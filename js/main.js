// listen for a keypress; if we press the right key, then find the matching audio file and play it. if the key doesnt show up on the kyboard, the script shouldn't do anything

(() => {
  console.log('drumkit file loaded');

//remove highlight from each element after a keypress/ transition event
  function removeHighlight(e) {
    console.log(e);
    //if this isnt the transform transition, then quit
    if (e.propertyName !== 'transform'){
      return;
    } else { //it IS the transform transition do stuff
      e.target.classList.remove('playing');
    }
  }

//this should fire every time a key is pushed; do something interesting inside this function
  function playSound(e) {
    //debugger;

    console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

//adds a highlight to the element on the screen (the keyboard key pressed)
    key.classList.add('playing');

    // if we press a key that doesnt have a corresonding audio element, then quit and dont do anything else
    if (!audio) {return; }

    //rewind and audio files b4 playing it
    audio.currentTime = 0;
    audio.play();
    //debugger;
  }
//tell the browser to listen for a keypress event
 window.addEventListener('keydown', playSound);

 //loop through all the keys and take the kighlight back off when the transition is done
 const keys = Array.from(document.querySelectorAll('.key')); //select all the key divs
 keys.forEach(key => key.addEventListener('transitionend', removeHighlight));
})();
