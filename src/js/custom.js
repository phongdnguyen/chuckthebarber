"use strict";

// Navigation buttons
var btn = document.querySelectorAll("[data-toggle='tab']");

// F.Y.I. IE11 does not like foreach function
// Click event for navigation buttons
for (let index = 0; index < btn.length; index++) {
    const element = btn[index];
    element.addEventListener("click", removeActive);
}

// Navigation click event handler. Removes active class
function removeActive(e) {
    var sibling = e.target.parentElement.children;
    
    for (let index = 0; index < sibling.length; index++) {
        const element = sibling[index];
        element.classList.remove("active");
    }
}

// Objects for auto change
var afterObjects = document.getElementsByClassName("after");

// Create timer
var timer = window.setInterval(changeImage, 3000);

// Generate random numbers based on length of after objects
var randomNumbers = generateRandomNumbers(afterObjects.length);

// Track iteration in after objects
var loopCount = 1;
var previousLoopCount = 0;
var loopMax = randomNumbers.length - 1;

// Register events for object switching / change
for (let index = 0; index < afterObjects.length; index++) {
    const element = afterObjects[index];
    element.parentElement.addEventListener("mouseenter", togglelockon);
    element.parentElement.addEventListener("mouseleave", togglelockoff);

    element.addEventListener("mouseenter", changeOpacity);
    element.addEventListener("mouseleave", changeOpacity);
}

function generateRandomNumbers(length) {
    let randomIndex = [];

    while (randomIndex.length < length) {
        let randomNumber = Math.round(Math.random() * length);

        if (randomNumber < length) {

            if (randomIndex.length == 0) {
                randomIndex.push(randomNumber);
            }
            else {
                let match = false;

                for (let index = 0; index < randomIndex.length; index++) {
                    const element = randomIndex[index];
                    if (element == randomNumber) {
                        match = true;
                    }
                }

                if (!match) {
                    randomIndex.push(randomNumber);
                }
            }
        }
    }
    return randomIndex;
}

function togglelockon(){
    this.classList.add("lock");
    this.children[0].classList.remove("collapse");
    this.children[1].style.opacity = 1;
}

function togglelockoff(){
    this.classList.remove("lock");
    this.children[0].classList.add("collapse");
    this.children[1].style.opacity = 1;
}

function changeOpacity() {
    if (this.style.opacity == 1 || this.style.opacity == "") {
        this.parentElement.children[0].classList.remove("collapse");
        this.style.opacity = 0;
    }
    else {
        this.style.opacity = 1;
        this.parentElement.children[0].classList.add("collapse");
    }
}

function changeImage() {
    previousLoopCount = loopCount - 1;

    if (loopCount > loopMax) {
        loopCount = 0;
        randomNumbers = generateRandomNumbers(afterObjects.length);
    }

    let random = randomNumbers[loopCount];
    let previousRandom = randomNumbers[previousLoopCount];

    const element = afterObjects[random];
    const previousElement = afterObjects[previousRandom];

    // stores how many times interval has been called
    loopCount++;

    // Skips over if parent element contains a lock which is activated or mouseenter and removed on mouseleave
    if (!element.parentElement.classList.contains("lock")) {
        if (element.style.opacity == 1 || element.style.opacity == "") {
            element.parentElement.children[0].classList.remove("collapse");
            element.style.opacity = 0;

        } else {
            element.parentElement.children[0].classList.add("collapse");
            element.style.opacity = 1;

        }
    }

    if (!previousElement.parentElement.classList.contains("lock")) {
        if (previousElement.style.opacity == 1 || previousElement.style.opacity == "") {
            previousElement.parentElement.children[0].classList.remove("collapse");
            previousElement.style.opacity = 0;

        } else {
            previousElement.parentElement.children[0].classList.add("collapse");
            previousElement.style.opacity = 1;
        }
    }

}
