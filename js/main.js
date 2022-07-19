/************  Header bg Reveal *************/

const headerBg = () => {
    const header = document.querySelector('.header-js');

    window.addEventListener("scroll", () => {
        if (this.scrollY > 0) {
            header.classList.add('bg-reveal');
        } else {
            header.classList.remove('bg-reveal');
        }
    })
}
headerBg();