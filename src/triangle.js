export default function determineTriangle(side1, side2, side3) {
  const sum1 = side1 + side2;
  const sum2 = side2 + side3;
  const sum3 = side1 + side3;
  if (sum1 <= side3 || sum2 <= side1 || sum3 <= side2) {
    return "This is not a triangle.";
  }
  else if (side1 === side2 && side2 === side3) {
    return "The triangle is equilateral.";
  }
  else if (side1 === side2 && side2 != side3 || side1 === side3 && side2 != side3) {
    return "The triangle is isoceles.";
  }
  else if (side1 != side2 && side2 != side3 && side1 != side3) {
    return "The triangle is scalene.";
  }
}