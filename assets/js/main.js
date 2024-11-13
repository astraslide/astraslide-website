/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
   const toggle = document.getElementById(toggleId),
         nav = document.getElementById(navId)

   toggle.addEventListener('click', () =>{
       // Add show-menu class to nav menu
       nav.classList.toggle('show-menu')

       // Add show-icon to show and hide the menu icon
       toggle.classList.toggle('show-icon')
   })
}

showMenu('nav-toggle','nav-menu');

var className = "inverted";
var scrollTrigger = 170;

window.onscroll = function () {
    if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
        document.getElementsByTagName("header")[0].classList.add(className);
    } else {
        document.getElementsByTagName("header")[0].classList.remove(className);
    }
};

function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbwGBo54Kviagl0kyspcmCwMBA3QvhbR5vB5mj0s_PujXVmAvJcxwjMMtVaha-1fnzn-uA/exec';
const form = document.forms['newsletter'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();

    const userInput = form.email.value;

    if (!isValidEmail(userInput)) {
        msg.innerHTML = "Invalid email address.";
        setTimeout(function () {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
        return;
    }

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                msg.innerHTML = "Message Sent Successfully!";
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
                // window.location.href = "success.html";
            } else {
                console.error('Error!', response.statusText);
            }
        })
        .catch(error => console.error('Error!', error.message));
});

function delayer() {
    setTimeout(downLoad, 500)
}

function downLoad() {
    if (document.all) {
        document.all["preloader"].style.display = "none";
        document.all["layer2"].style.display = "block";
    } else if (document.getElementById) {
        node = document.getElementById("preloader").style.display = 'none';

        node = document.getElementById("layer2").style.visibility = 'visible';

    }
}

var imgs = Array.from(document.getElementsByClassName("portfolioImg"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var boxContent = document.getElementById("boxContent");
var closeBtn = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentIndex = 0;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {
        showLightBox(i);
        currentIndex = imgs.indexOf(e.target);
        console.log(currentIndex);
    });
}
closeBtn.addEventListener("click", hideLightBox);
next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);
document.addEventListener("keydown", function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 27) {
        hideLightBox();
    } else if (e.keyCode == 39) {
        showNext();
    } else if (e.keyCode == 37) {
        showPrev();
    }
});
document.addEventListener("click", function (e) {
    if (e.target == lightBoxContainer) {
        hideLightBox();
    }
});

function showLightBox(index) {
    var picSrc = imgs[index].getAttribute("src");
    boxContent.style.cssText = `background-image:url(${picSrc})`;
    lightBoxContainer.classList.remove("d-none");
    document.querySelector("body").classList.add("overflow-hidden");
}
function hideLightBox() {
    lightBoxContainer.classList.add("d-none");
    document.querySelector("body").classList.remove("overflow-hidden");
}
function showNext() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }
    var picSrc = imgs[currentIndex].getAttribute("src");
    boxContent.style.cssText = `background-image:url(${picSrc})`;
}

function showPrev() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }
    var picSrc = imgs[currentIndex].getAttribute("src");
    boxContent.style.cssText = `background-image:url(${picSrc})`;
}