const   navMenu = document.getElementById('navmenu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')


if (navToggle) {
    navToggle.addEventListener('click', ()=>{
        document.querySelector(".navbar").style = "display: block"
        document.querySelector(".toggle_menu").style = "display: none"
        document.querySelector(".close_menu").style = "display: block"
    })
}

if (navClose) {
    navClose.addEventListener('click', ()=>{
        document.querySelector(".navbar").style = "display: none"
        document.querySelector(".toggle_menu").style = "display: block"
        document.querySelector(".close_menu").style = "display: none"
    })
}

function showsubmenu_cat() {
    document.querySelector(".submenu").style = "display: inline"
    document.querySelector(".submenu-closed").style = "display: none"
    document.querySelector(".submenu-opened").style = "display: inline"
  }
  function hidesubmenu_cat() {
    document.querySelector(".submenu").style = "display: none"
    document.querySelector(".submenu-closed").style = "display: inline"
    document.querySelector(".submenu-opened").style = "display: none"
  }