document.addEventListener("DOMContentLoaded", () => {
    // Elementen defineren
    const hamburgerKnop = document.querySelector("#hamburgerKnop");
    const hamburgerSluitKnop = document.querySelector("#hamburgerSluitKnop");
    const hamburgerMenu = document.querySelector("#hamburgerMenu");
   
    // Class toevoegen wanneer er op de knop is gedrukt
    hamburgerKnop?.addEventListener("click", () => {
      hamburgerMenu.classList.add("show");
    });
  
    // Class toevoegen wanneer er op de knop is gedrukt
    hamburgerSluitKnop?.addEventListener("click", () => {
      hamburgerMenu.classList.remove("show");
    });
    

    const infoSection = document.getElementById("infoSection");
    const fmSection = document.getElementById("fmSection");
    
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    
    // true = info visible, false = fm visible
    let showInfo = true;
    
    function updateSections() {
      infoSection.classList.toggle("actief", showInfo);
      fmSection.classList.toggle("actief", !showInfo);
    }
    
    // Right chevron → go to FM
    nextBtn.addEventListener("click", () => {
      showInfo = false;
      updateSections();
    });
    
    // Left chevron → go to Info
    prevBtn.addEventListener("click", () => {
      showInfo = true;
      updateSections();
    });
  })