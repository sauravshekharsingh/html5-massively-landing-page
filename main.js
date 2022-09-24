// Menu

const menuBtn = document.getElementsByClassName("menu-btn")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuCloseBtn = document.getElementsByClassName("menu-close-btn")[0];

menuBtn.addEventListener("click", (e) => {
  menu.style.display = "block";
  menu.style.right = "0px";
  document.documentElement.scrollTop = 0;
  document.body.height = "100vh";
  document.body.style.overflowY = "hidden";
});

menuCloseBtn.addEventListener("click", (e) => {
  menu.style.display = "none";
  menu.style.right = "-320px";
  document.body.style.height = "inherit";
  document.body.height = "100vh";
  document.body.style.overflowY = "scroll";
});

const mainElement = document.getElementsByTagName("main")[0];

document.addEventListener("scroll", (e) => {
  const top = mainElement.getBoundingClientRect().top;

  if (top < 32) {
    menuBtn.classList.add("menu-btn-bg");
  } else {
    menuBtn.classList.remove("menu-btn-bg");
  }
});
