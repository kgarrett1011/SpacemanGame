
console.log('SpaceMan'); 

console.log("Let'sPlay!"); 





//Helpful hintd and tips//
/*
 Multiple images: const imgPath = `imgs/spaceman-0${wrongGuesses.length}`;
Separate images: spacemanEl.style.backgroundPositionX = `${-SPRITE_WIDTH * wrongGuesses.length}px`;
spaceman {
  width: 504px; /* width of each "frame" of the image */
  //height: 687px; /* height of the image */
  //background-image: url(../imgs/spaceman-filmstrip.png);
  //transform: scale(.5); // scale the side of the element as desired */
//}
/*
what are the state variable? 
    state variables: 
 (in the /*-- app's state (variables) --*/ //section of main.js)? /*


/*
 USING "GUARDS" TO IGNORE CLICKS OR OTHER EVENTS...
There are two approaches we can take:
1. Use removeEventListener to remove the handler function to stop listening for clicks.
2.Examine state variables early in the click handler function and return from the function 
immediately if the click event should be ignored.
(2 is the better option)

*/ 

// make a an event listener for the "Lets Play button"
//Maybe in the future add levels, if in this game event listener to click "pick a level" 
//then an eventlistener to click on "Easy, Challenging, Brainbuster"

