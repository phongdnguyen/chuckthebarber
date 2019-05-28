"use strict";

// Navigation buttons
var btn = document.querySelectorAll("[data-toggle='tab']");

// Images for auto change
var afterImages = document.getElementsByClassName("after");

// F.Y.I. IE11 does not like foreach function
// Click event for navigation buttons
for (let index = 0; index < btn.length; index++) {
    const element = btn[index];
    element.addEventListener("click", removeActive);
}

// After images mouse event handlers
for (let index = 0; index < afterImages.length; index++) {
    const element = afterImages[index];
    element.addEventListener("mouseenter", togglelock);
    element.addEventListener("mouseleave", togglelock);

    element.addEventListener("mouseenter", changeOpacity);
    element.addEventListener("mouseleave", changeOpacity);
}

function togglelock(){

    if (!this.parentElement.classList.contains("lock")) {
        this.parentElement.classList.add("lock");
        this.style.opacity = 0;
        this.parentElement.children[0].classList.remove("collapse");
    }
    else{
        this.parentElement.classList.remove("lock");
        this.style.opacity = 1;
        // this.parentElement.children[0].classList.add("collapse");
    }

}


function changeOpacity() {
    if (!this.parentElement.classList.contains("lock")) {

        if (this.style.opacity == 1 || this.style.opacity == "") {
            this.parentElement.children[0].classList.remove("collapse");
            this.style.opacity = 0;

        }
        else {
            this.style.opacity = 1;
            this.parentElement.children[0].classList.add("collapse");
        }
    }
}

// Navigation click event handler. Removes active class
function removeActive(e) {
    var sibling = e.target.parentElement.children;
    
    for (let index = 0; index < sibling.length; index++) {
        const element = sibling[index];
        element.classList.remove("active");
    }
}

var timer1 = window.setInterval(imageopacity, 4000);


// Timer function for image switch
function imageopacity() {

    for (let index = 0; index < afterImages.length; index++) {
        const element = afterImages[index];

        if (!element.parentElement.classList.contains("lock")) {
            if (index % 2 != 0) {
                if (element.style.opacity == 1 || element.style.opacity == "") {
                    element.parentElement.children[0].classList.remove("collapse");
                    element.style.opacity = 0;
                } else {
                    element.parentElement.children[0].classList.add("collapse");
                    element.style.opacity = 1;
                }
            }
            else {
                // Even images are delayed 4 seconds. Giving the appearance of alternation
                // window.setTimeout(function () {
                    if (element.style.opacity == 1 || element.style.opacity == "") {
                        element.parentElement.children[0].classList.remove("collapse");
                        element.style.opacity = 0;
                    } else {
                        element.parentElement.children[0].classList.add("collapse");
                        element.style.opacity = 1;
                    }
                // }, 1000);
            }
        }
    }
}

