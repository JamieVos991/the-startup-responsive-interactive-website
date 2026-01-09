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

     // Elementen defineren
    const toggle = document.getElementById("sliderKnop");
    const infoSection = document.getElementById("infoSection");
    const fmSection = document.getElementById("fmSection");
  
    // Is de FM section actief?
    let isFM = fmSection.classList.contains("actief");
  
    // Hierdoor staat de knop meteen goed bij het laden van de pagina.
    toggle.classList.toggle("actief", isFM);
  
    toggle.addEventListener("click", () => {
      // State omdraaien
      isFM = !isFM;
  
      // Classes aanpassen op basis van nieuwe state
      toggle.classList.toggle("actief", isFM);
      infoSection.classList.toggle("actief", !isFM);
      fmSection.classList.toggle("actief", isFM);
    });
  });
  