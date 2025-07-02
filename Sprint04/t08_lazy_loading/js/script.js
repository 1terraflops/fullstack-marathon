const label = document.querySelector('.header');

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    let index = 0;

    const loadImage = (image) => {
        const dataSrc = image.getAttribute('data-src');
        if (dataSrc) {
            index++;
            label.textContent = `${index} images loaded from 20`;
            if (index === 20) {
                label.style.backgroundColor = 'lightgreen';
                setTimeout(() => {
                    label.style.display = 'none'
                }, 3000);
            }


            image.src = dataSrc;
            image.removeAttribute('data-src');
        }
    };

    const isInView = (image) => {
        const rect = image.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    };

    const loadImagesOnScroll = () => {
        images.forEach(image => {
            if (isInView(image)) {
                loadImage(image);
            }
        });
    };

    loadImagesOnScroll();

    window.addEventListener('scroll', loadImagesOnScroll);
});