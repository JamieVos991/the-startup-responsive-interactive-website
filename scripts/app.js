document.addEventListener("DOMContentLoaded", () => {
    const hamburgerKnop = document.querySelector("#hamburgerKnop");
    const hamburgerSluitKnop = document.querySelector("#hamburgerSluitKnop");
    const hamburgerMenu = document.querySelector("#hamburgerMenu");
   
    hamburgerKnop?.addEventListener("click", () => {
      hamburgerMenu.classList.add("show");
    });
  
    hamburgerSluitKnop?.addEventListener("click", () => {
      hamburgerMenu.classList.remove("show");
    });

    const toggle = document.getElementById("sliderKnop");
    const infoSection = document.getElementById("infoSection");
    const fmSection = document.getElementById("fmSection");
  
    if (!toggle || !infoSection || !fmSection) return;
  
    let isFM = fmSection.classList.contains("actief");
  
    toggle.classList.toggle("actief", isFM);
  
    toggle.addEventListener("click", () => {
      isFM = !isFM;
  
      toggle.classList.toggle("actief", isFM);
      infoSection.classList.toggle("actief", !isFM);
      fmSection.classList.toggle("actief", isFM);
    });
  });
  