
function playSound(k) {

    switch (k) {
        
        case 'w':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case 'k':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case 'l':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
    
        default:
            console.log(k);
            break;
    }
}

var numberOfDrums = document.querySelectorAll(".drum").length;
for(var i=0; i < numberOfDrums; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonClick = this.innerHTML;
        buttonAnimation(buttonClick);
        playSound(buttonClick);
    });
}

// we need to add event listener to whole document, bcoz key can de pressed
// independent of objects and at anytime, whereas click happens w.r.t objects
document.addEventListener("keydown", function(event) {

    buttonAnimation(event.key);
    playSound(event.key);
});

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}