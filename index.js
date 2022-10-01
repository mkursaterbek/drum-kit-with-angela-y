//detecting Button Press
var numberOfDurmButtons = document.querySelectorAll(".drum").length

for( let i=0; i< numberOfDurmButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick () {
    let buttonInnerHTML = this.innerHTML
    
        makeSound(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML)
    })
}

// Detecting Keyboard Press

document.addEventListener("keypress", function(event) { 
    makeSound(event.key)
    buttonAnimation(event.key)
})




function makeSound (key) {

    switch (key) {
        case "w":  
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
        break;

        case "a":  
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
        break;

        case "s":  
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
        break;

        case "d":  
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
        break;

        case "j":  
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
        break;

        case "k":  
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
        break;

        case "l":  
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
        break;

    default: console.log(buttonInnerHTML);
    
        

    }
}

function buttonAnimation (currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed")
    setTimeout(() => {
        activeButton.classList.remove("pressed")
        
    }, 100);

}



// ****************************************************************************************************

// function bellBoy (name, age, experience, languages ) {
//     this.name = name ;
//     this.age = age;
//     this.yearsOfExperience = experience;
//     this.languages = languages;
//     this.clean = function() {
//         alert("cleans")
//     }

// }

// var belBoy1 = new bellBoy("timmy", 21, 43, ["french", "turkish"])
// belBoy1.clean()