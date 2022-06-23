window.addEventListener('load', ()=>{
    let header = document.querySelector('header div.bottom')
    window.onscroll = () => {
        if (window.scrollY > 150) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }
})