const watchAgainBtn = document.getElementById("watchAgain");
const clickMeBtn = document.getElementById("clickMe");

const imgMe = document.getElementById("imgMe");
const imgJS = document.getElementById("imgJS");

const textboxMe = document.getElementById("textbox1");
const textboxJS = document.getElementById("textbox2");


let meIndex = 0
let jsIndex = 0

const meImages = [
    "img/2.1.gif",
    "img/3.1.gif",
    "img/4.1.gif",
    "img/5.1.gif",
    "img/6.1.gif",
    "img/7.1.gif",
    "img/8.gif",
    "img/9.1.gif",
    "img/10.1.gif",
    "img/11.1.gif",
    "",
    ""
    
]

const jsImages = [
    "img/2.2.gif",
    "img/3.2.gif",
    "img/4.2.gif",
    "img/5.2.gif",
    "img/6.2.gif",
    "img/7.2.gif",
    "img/8.gif",
    "img/9.2.gif",
    "img/10.2.gif",
    "img/11.2.gif", 
];

const meText = [
    "Don't know how to Start",
    "Will you be my Valentine 🙈",
    "I got Flowers for You",
    "Look, I'm Crying",
    "JS, why you are doing this with Me",
    "Oh My GOD 😍",
    "Let's Dance",
    "So Cute",
    "So, You will not give errors now. Right?",
    "Game Over",
    "",
    ""
];

const jsText = [
    "Say, I'm Listening ",
    "Waitt Whattt?? ",
    "Huhh, so What 🫨",
    "Look, I'm laughing",
    "Ok ok, stop Drama. Look I got bouquet for you",
    "Yeah! yeah",
    "🥳😍🥳",
    "Less than you Cutie 🤗",
    "😡😡",
    "Yeah 😎",
    " ",
];

clickMeBtn.addEventListener("click", Talking);

function Talking(){

    clickMeBtn.style.backgroundColor = "brown"
    const currentIndex = parseInt(imgMe.src.match(/(\d+)\.gif$/)[1]) - 1;
    const nextIndex = (currentIndex + 1) % meImages.length;

    imgMe.src = meImages[meIndex];
    textboxMe.textContent = meText[meIndex];
    
    setTimeout(function() {
        clickMeBtn.style.backgroundColor = "pink";
        
        
        if (meIndex === meImages.length) {
            imgJS.src = jsImages[jsImages.length-1];
            textboxJS.textContent = jsText[jsText.length-1];
            
        }
        else if(meIndex === meImages.length-2){
            clickMeBtn.disabled = true;
            clickMeBtn.textContent = "Over";
            clickMeBtn.style.backgroundColor = "white";
          setInterval((watchAgainBtn.style.visibility = "visible"),2000)  
            
        }
         else {
            imgJS.src = jsImages[meIndex-1];
            textboxJS.textContent = jsText[meIndex-1];
        }
    }, 1000);
    
    meIndex = (meIndex + 1) % meImages.length;
}

watchAgainBtn.addEventListener("click", function() {
    window.location.reload();
});