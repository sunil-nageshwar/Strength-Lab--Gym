  video = document.getElementById("video1");
  video.addEventListener("click", () => {
    if (video.paused) {
      video1.play();   // play if paused
    } else {
      video2.pause();  // pause if already playing
    }
  });
 
  video = document.getElementById("video");
  video.addEventListener("click", () => {
    if (video.paused) {
      video2.play();   // play if paused
    } else {
      video1.pause();  // pause if already playing
    }
  });





 // Dynamic year
    document.getElementById("year").textContent =
      "© " + new Date().getFullYear() + " StrengthLab Gym";

    // Motivational words cycling
    const words = ["Push Limits", "Build Power", "Stay Focused", "Never Quit"];
    let index = 0;
    const motivationEl = document.getElementById("motivation");

    function changeWord() {
      motivationEl.textContent = words[index];
      index = (index + 1) % words.length;
    }

    changeWord(); // initial
    setInterval(changeWord, 2000); // change every 2s



     window.addEventListener("load", function() {
      document.body.classList.add("loaded");
    });






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