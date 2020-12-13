// Section 1
const icons = document.querySelectorAll('.section-1-icons i')
let i = 1
setInterval(() => {
    i++
    const icon = document.querySelector('.section-1-icons .active')
    icon.classList.remove('active')
    if (i > icons.length) {
        icons[0].classList.add('active')
        i = 1
    } else {
        icon.nextElementSibling.classList.add('active')
    }
},4000)
// End of Section 1

