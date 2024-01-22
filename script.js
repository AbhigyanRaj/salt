function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}

document.querySelectorAll('.menu-links a, .menu-links2 a, .menu-links3 a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var targetSection = this.getAttribute('href').substring(1);
    scrollToSection(targetSection);
  });
});

function swiperAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.left = "-100%"; 
  }, 4500);
}

function toggleMenu() {
  const menuLinks = document.querySelectorAll('.menu-links a, .menu-links2 a');

  menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      menuLinks.forEach(otherLink => {
        otherLink.classList.remove('underline');
      });

      link.classList.add('underline');
    });

    link.addEventListener('mouseleave', () => {
      link.classList.remove('underline');
    });
  });
}

function menuAnimation() {
  const menu = document.querySelector("nav h3");
  const full = document.querySelector("#full-scr");
  const navImg = document.querySelector("nav img");
  let flag = false;

  menu.addEventListener("click", () => {
    flag = !flag;
    const topValue = flag ? 0 : "-100%";

    full.style.top = topValue;
    navImg.style.opacity = flag ? 0 : 1;
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}

swiperAnimation()
menuAnimation()
loaderAnimation()
