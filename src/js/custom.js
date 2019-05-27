"use strict";

var btn = document.querySelectorAll("[data-toggle='tab']");

// IE11 does not like foreach function
for (let index = 0; index < btn.length; index++) {
    const element = btn[index];
    element.addEventListener("click", removeActive);
}

function removeActive(e) {
    var sibling = e.target.parentElement.children;
    
    for (let index = 0; index < sibling.length; index++) {
        const element = sibling[index];
        element.classList.remove("active");
    }
}

var afterImages = document.getElementsByClassName("after");

var timer = window.setInterval(imageopacity, 4000);

function imageopacity() {

    for (let index = 0; index < afterImages.length; index++) {
        const element = afterImages[index];
        if (element.style.opacity == 1 || element.style.opacity == "") {
            element.style.opacity = 0;
        } else {
            element.style.opacity = 1;
        }
    }

}


// var img = document.querySelectorAll(".card-img-overlay");

// for (let index = 0; index < img.length; index++) {
//     const element = img[index];
//     element.addEventListener("mouseenter", showBeforePicture);
//     element.addEventListener("mouseout", showAfterPicture);
// }

// function showBeforePicture(e){
//     var pictureUrl = e.target.nextElementSibling.src.split("/");
//     var beforePictureName = pictureUrl[5].split(".")[0] + "-before.jpg";
//     var beforePictureUrl = "";
    
//     for (let index = 0; index < pictureUrl.length-1; index++) {
//         const section = pictureUrl[index];
//         beforePictureUrl = beforePictureUrl + section + "/";
//     }
    
//     beforePictureUrl = beforePictureUrl + beforePictureName;
    
//     e.target.nextElementSibling.src = beforePictureUrl;
// }

// function showAfterPicture(e){
//     var pictureUrl = e.target.nextElementSibling.src.split("-before");

//     var beforePictureUrl = "";
    
//     beforePictureUrl = pictureUrl[0] + pictureUrl[1];
        
//     e.target.nextElementSibling.src = beforePictureUrl;
// }

