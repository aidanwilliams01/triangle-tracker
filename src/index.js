import determineTriangle from "./triangle";

function onPageLoad() {
  let form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);
    document.querySelector("p").innerText = determineTriangle(side1, side2, side3);
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);