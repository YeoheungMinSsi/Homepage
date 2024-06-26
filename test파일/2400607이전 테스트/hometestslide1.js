const CAROUSEL_LENGTH = document.querySelectorAll(".slideItem").length - 1;
let current = 0;

const nextEvent = () => {
    if (current !== CAROUSEL_LENGTH) {
        $carousel.style.transform = `translateX(${(current + 1) * -370}px)`;
        current++;
    } else {
        current = 0;
        $carousel.style.transform = `translateX(0px)`;
    }
};

const prevEvent = () => {
    if (current !== 0) {
        current--;
        $carousel.style.transform = `translateX(${current * -370}px)`;
    } else {
        current = CAROUSEL_LENGTH;
        $carousel.style.transform = `translateX(${CAROUSEL_LENGTH * -370}px)`;
    }
};

$nextButton.addEventListener("click", nextEvent);
$prevButton.addEventListener("click", prevEvent);