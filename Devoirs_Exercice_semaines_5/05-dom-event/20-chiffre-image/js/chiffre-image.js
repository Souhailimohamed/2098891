"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("numberInput");
  const numberDiv = document.getElementById("numberDiv");
  const imgElement = numberDiv.querySelector("img");

  numberInput.addEventListener("input", function () {
    const inputValue = numberInput.value;

    if (inputValue >= 0 && inputValue <= 9) {
      imgElement.src = `image/${inputValue}.jpg`;
      imgElement.alt = `Image chiffre ${inputValue}`;
    }
  });
});
