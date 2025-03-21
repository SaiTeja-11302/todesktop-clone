// Mobile Menu Toggle
const navDialog = document.getElementById('nav-dialog')
function handleMenu(){
    navDialog.classList.toggle('hidden');
}

// Animation Configuration
const initialTranslateLTR = -48*4;
const initialTranslateRTL = 36*4;

// Scroll-based Animation System
function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll',scrollHandler);
        }
    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);

    // Scroll Handler for Parallax Effect
    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
        let totalTranslate = 0;
        if(isLTR){
            totalTranslate = translateX + initialTranslateLTR;
        } else {
            totalTranslate = -(translateX + initialTranslateRTL);
        }
        
        element.style.transform = `translateX(${totalTranslate}px)`
    }
}

// Initialize Animated Elements
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

// Configure Animation Presets
setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, 0.8);

const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddArrowIcon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden');
        ddArrowIcon.classList.toggle('-rotate-180');
    })
})