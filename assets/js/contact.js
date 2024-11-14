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

const scriptURL = 'https://script.google.com/macros/s/AKfycbxpRp3S6NKweoNn5unjNpS0YAYgWbtj6wnsaGEuIPJFHrMY2YK4gEoZlEB3sEOtnyVh/exec'
const form = document.forms['astraslide-contact']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                msg.innerHTML = "Message Sent Successfully!";
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
                window.location.href = "thank-you";
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