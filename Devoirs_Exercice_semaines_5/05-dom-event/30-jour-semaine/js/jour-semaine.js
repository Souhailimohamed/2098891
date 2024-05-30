
'use strict';

const JOURS_FR = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
const JOURS_EN = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


document.addEventListener("DOMContentLoaded", function() {
    
    const languageCheckbox = document.getElementById("language");
    const dayNumberRange = document.getElementById("dayNumber");
    const dayNumberLabel = document.querySelector("label[for=dayNumber]");

   
    function updateDayDisplay() {
        
      const language = languageCheckbox.checked ? "en" : "fr";
      const dayNumber = dayNumberRange.value;
        
        if (language === "en") {
          dayNumberLabel.textContent = JOURS_EN[dayNumber];
        } else {
          dayNumberLabel.textContent = JOURS_FR[dayNumber];
        }

    }
   
    languageCheckbox.addEventListener("change", updateDayDisplay);
    dayNumberRange.addEventListener("input", updateDayDisplay);

    updateDayDisplay();

});