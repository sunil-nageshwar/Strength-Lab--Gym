
 
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





  function adjustMainSize() {
    const main = document.getElementById('main');
    if (window.innerWidth <= 768) {
      // Mobile
      main.style.minHeight = "auto";
      main.style.padding = "30px";
    } else if (window.innerWidth <= 1024) {
      // Tablet
      main.style.minHeight = "90vh";
      main.style.padding = "40px";
    } else {
      // Desktop
      main.style.minHeight = "100vh";
      main.style.padding = "60px";
    }
  }

  window.addEventListener('load', adjustMainSize);
  window.addEventListener('resize', adjustMainSize);






  function adjustHeadingSize() {
    const h1 = document.querySelector('h1');
    if (!h1) return;

    if (window.innerWidth <= 768) {
      h1.style.fontSize = "2.3rem"; // mobile
    } else if (window.innerWidth <= 1024) {
      h1.style.fontSize = "3rem";   // tablet
    } else {
      h1.style.fontSize = "2.5rem"; // desktop
    }
  }

  window.addEventListener('load', adjustHeadingSize);
  window.addEventListener('resize', adjustHeadingSize);







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










  const openBtn = document.getElementById("openRegBtn");
const popup = document.getElementById("popupForm");
const closeBtn = document.getElementById("closePopup");

openBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});










const form = document.querySelector("#popupForm form");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload

  // Show success message
  const msg = document.createElement("div");
  msg.className = "success-msg";
  msg.innerText = "🎉 Registration successful! Thank you.";

  // Clear old messages if any
  const oldMsg = form.querySelector(".success-msg");
  if (oldMsg) oldMsg.remove();

  form.appendChild(msg);

  // Optional: close popup after 5 seconds
  setTimeout(() => {
    document.getElementById("popupForm").style.display = "none";
    msg.remove();
    form.reset();
  }, 5000);
});
