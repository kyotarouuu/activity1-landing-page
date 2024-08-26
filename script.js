const scrollRevealOption = {
    distance:"50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".himage img",{
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".hcontent h1",{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".hcontent p",{
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".hcontent form",{
    ...scrollRevealOption,
    delay: 500,
});