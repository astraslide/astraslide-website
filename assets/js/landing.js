
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".container__right h4", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".container__right h2", {
    ...scrollRevealOption,
    delay: 2000,
});
ScrollReveal().reveal(".container__right h3", {
    ...scrollRevealOption,
    delay: 2500,
});
ScrollReveal().reveal(".container__right p", {
    ...scrollRevealOption,
    delay: 3000,
});

ScrollReveal().reveal(".container__right .tent-1", {
    duration: 500,
    delay: 3500,
});
ScrollReveal().reveal(".container__right .tent-2", {
    duration: 500,
    delay: 4000,
});

ScrollReveal().reveal(".location", {
    ...scrollRevealOption,
    origin: "left",
    delay: 4500,
});

ScrollReveal().reveal(".socials span", {
    ...scrollRevealOption,
    origin: "top",
    delay: 5000,
    interval: 500,
});
