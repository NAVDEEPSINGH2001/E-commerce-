// navbar

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (scrollY >= 180) {
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg')
    }
})

// image collage

const collageimages = [...document.querySelectorAll('.collage-img')]

collageimages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageimages.map((image, index) => {
            if (index != i) {
                image.style.filter = 'blur(10px)';
                item.style.zIndex = 2;

            }
        })
    })
})