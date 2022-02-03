import Developers from './developer.data.js';

const toggle = document.querySelector('button.bar');
const mobileMenu = document.querySelector('#mobile-main-menu');
const navbar = document.querySelector('.main-menu-container');
const coders = document.querySelector('#coders>.card-container');
const closeBtn = document.querySelector('.closebtn');
const sticky = navbar.offsetTop;
const openNav = () => {
  mobileMenu.style.width = '100%';
};
const closeNav = () => {
  mobileMenu.style.width = '0%';
};
toggle.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
window.onscroll = () => {
  if (window.pageYOffset >= sticky) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = '5%';
  }
};
const renderDevelopers = () => {
  let developers = '';
  Developers.forEach((developer) => {
    developers += `<div class="coders-card my-20">
   <img src="assets/images/chess.jpg" alt="" class="chess-img">
   <img src="${developer.image}" alt="${developer.username} image" class="coder-img">
   <div class="coder-container">
       <h4 class="username lato font-bold font-big">${developer.username}</h4>
       <h5 class="expertise lato color-pink font-small italic">${developer.position}</h5>
       <h6 class="coder-quote lato font-small font-light my-10 italic">
       ${developer.quote}
       </h6>
   </div>
</div>`;
  });
  coders.innerHTML = developers;
};

renderDevelopers();
