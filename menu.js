document.addEventListener("DOMContentLoaded", function(event) {

  const navBtn = document.querySelector('.nav-btn');
  const navigation = document.querySelector('.nav');

  navBtn.addEventListener('click', () => {
    navigation.classList.toggle('nav-open');
    if (navigation.classList.contains('nav-open')) {
      navBtn.src = 'img/header/cross.png';
      document.querySelector(".nav-list").setAttribute("style", "margin-block-start:5em;");

    } else {
      navBtn.src = 'img/header/three-lines.png'
      document.querySelector(".nav-list").setAttribute("style", "margin-block-start:0em;");
    }
  });
});