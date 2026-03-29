
  const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });



    const menuIcon2= document.querySelector('.menu-icon');
const nav2 = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
});





const goTopBtn = document.getElementById("goTopBtn");

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Show button only when scrolled down
  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  });



