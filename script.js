document.addEventListener('DOMContentLoaded', function () {

    // --- Hero Slider Logic ---
    const sliderContainer = document.getElementById('sliderContainer');
    const sliderNav = document.getElementById('sliderNav');
    const dots = document.querySelectorAll('.slider-dot');
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    let currentIndex = 0;

    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Automatic sliding
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }, 5000); // Change slide every 5 seconds

    // Navigation dots
    sliderNav.addEventListener('click', (e) => {
        if (e.target.classList.contains('slider-dot')) {
            const slideIndex = parseInt(e.target.getAttribute('data-slide'));
            currentIndex = slideIndex;
            updateSlider();
        }
    });

    // --- Tab Navigation Logic ---
    const tabs = document.querySelectorAll('.tab');
    const contentSections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Update active state for tabs
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update active state for content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Initialize first state
    updateSlider();
});