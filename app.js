let imgs = document.querySelectorAll('.img')
let current = document.querySelector('#current')

imgs.forEach(i => i.addEventListener('click', imgClick))

function imgClick(e) {
    current.src = e.target.src
}