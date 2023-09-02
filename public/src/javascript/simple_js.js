const overlay = document.querySelector('.overlay');
const navbar = document.querySelector('.navbar');

// ! burası değiştirlimesi gerekebilir
function show_eror(){
    alert("yapım aşamasında");
}

// * overlay ayarları
function close_nav(){
    overlay.style.width = "0%"
} function open_nav(){
    overlay.style.width = "100%"
}

// * scroled ayarları
function scroll_navbar(){
    const scrollY = window.scrollY;
    const shouldApplyStyles = scrollY > 0;

    navbar.style.backgroundColor = shouldApplyStyles ? '#272727be' : 'transparent';

} window.addEventListener('scroll', scroll_navbar);