function onPageLoad() {
  let form = document.querySelector("form");
  function formSubmission(event) {
    event.preventDefault();
    const side1 = parseInt(document.querySelector("input#side1").value);
    const side2 = parseInt(document.querySelector("input#side2").value);
    const side3 = parseInt(document.querySelector("input#side3").value);
    const sum1 = side1 + side2;
    const sum2 = side2 + side3;
    const sum3 = side1 + side3;
    if (sum1 <= side3 || sum2 <= side1 || sum3 <= side2) {
      document.querySelector("p").innerText = "This is not a triangle.";
    }
    else if (side1 === side2 && side2 === side3) {
      document.querySelector("p").innerText = "The triangle is equilateral.";
    }
    else if (side1 === side2 && side2 != side3 || side1 === side3 && side2 != side3) {
      document.querySelector("p").innerText = "The triangle is isoceles.";
    }
    else if (side1 != side2 && side2 != side3 && side1 != side3) {
      document.querySelector("p").innerText = "The triangle is scalene.";
    }
  }
  form.addEventListener("submit", formSubmission);
}

window.addEventListener("load", onPageLoad);