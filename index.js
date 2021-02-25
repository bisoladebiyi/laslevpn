
let images = document.querySelectorAll(".images")
 let requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;


function moveBoxes() {
    for(let i=0; i<4; i++){
        images[i].classList.remove("img"+[i])
        images[i].classList.add("image"+[i])
        let id = setInterval(animate, 700)
        function animate() {
            if(images[i].classList.contains("image"+[i])) {
            images[i].classList.remove("image"+[i])
            images[i].classList.add("imagea"+[i])
            }
            else if(images[i].classList.contains("imagea"+[i])) {
                images[i].classList.remove("imagea"+[i])
                images[i].classList.add("image"+[i])
            }
            else{
                clearInterval(id)
            }
        }

    }
}
moveBoxes()

let getStartedBtn = document.querySelector(".btn")

function animateButtonHover () {
    getStartedBtn.style.width = "270px"
    getStartedBtn.style.transition = "width ease .2s"
}
function animateButtonOut () {
    getStartedBtn.style.width = "240px"
    getStartedBtn.style.transition = "width ease .2s"
}

let hearts = document.querySelectorAll(".hearts")
let percentageAdded = []
let style2 = []

for(let i=0; i<5;i++) {
    let style = hearts[i].offsetTop;
    style2.push(style)
    percentageAdded.push(style)
}


function animateHearts() {

   for(let i=0; i<5; i++) {
    percentageAdded[i] -=1;
    hearts[i].style.top = percentageAdded[i]  + "px";
    hearts[i].classList.add("fadeOut")
    if(percentageAdded[i]<= -20) {
        
        percentageAdded[i] = 90
        hearts[i].classList.remove("fadeOut")
    }
   }
    requestAnimationFrame(animateHearts)
}
animateHearts()