//change navbar style on scroll
window.addEventListener('scroll',() => {
document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

const faqs = document.querySelectorAll('.faq');
faqs.forEach( faq => {
   faq.addEventListener('click',() =>{
   	faq.classList.toggle('open');

      const icon = faq.querySelector('.faq_icon i');
      if(icon.className ==='fa-solid fa-plus'){
          icon.className = "fa-solid fa-minus"
       }else{
         icon.className = "fa-solid fa-plus"
       }


   })
})


///show/hid nav menu
const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
   menu.style.display = "flex";
   closebtn.style.display = "inline-block"
   menuBtn.style.display ="none"
})
///close nav menu
const closeNav =() => {
   menu.style.display ="none"
   closebtn.style.display = "none";
   menuBtn.style.display = "inline-block";
}
closebtn.addEventListener('click', closeNav);


