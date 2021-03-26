const showMenu =(toggleId, navId) =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId)


    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')


const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')


    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sr= ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.home_title',{})
sr.reveal('.button',{delay:200})
sr.reveal('.home_social',{interval:200})

sr.reveal('.sobre_img',{})
sr.reveal('.sobre_text',{delay: 200})

sr.reveal('habilidades_sub',{})
sr.reveal('.habilidades_img',{delay:200})
sr.reveal('.habilidades_text',{delay: 200})
sr.reveal('.habilidades_data',{interval:200})

sr.reveal('trabalho_img',{interval: 200})
