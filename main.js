'user strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

document.addEventListener('scroll', e => {
  if (navbarHeight < window.scrollY) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// navbar__menu 스크롤 이동

const navbarMenu = document.querySelector('.navbar__menu');

navbarMenu.addEventListener('click', event => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  scrollIntoView(link);
});

// navbar toggle btn 작동

navbarToggleBtn.addEventListener('click', e => {
  navbarMenu.classList.toggle('open');
});

// contact 버튼 to 스크롤 이동

const contactBtn = document.querySelector('.home__contact');

contactBtn.addEventListener('click', event => {
  scrollIntoView('#contact');
});

// 스크롤시 home 투명도
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

//스크롤시 up btn 작동하기

const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add('visible');
  } else {
    arrowUp.classList.remove('visible');
  }
});

//arrow up 버튼
arrowUp.addEventListener('click', () => {
  scrollIntoView('#home');
});

//프로젝트 클릭시 필터링

const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', e => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }

  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach(project => {
      if (filter === '*' || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anim-out');
  }, 300);
});

//project 클릭시 활성화
workBtnContainer.addEventListener('click', e => {
  const active = document.querySelector('.selected');
  active.classList.remove('selected');
  const target =
    e.target.localName === 'button' ? e.target : e.target.parentNode;
  target.classList.add('selected');
});

//up btn 누르면 작동하기

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}
