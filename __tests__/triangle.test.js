import determineTriangle from "../src/triangle";

describe('determineTriangle', () => {
  
  test('correctly identifies a non-triangle', () => {
    expect(determineTriangle(3, 3, 9)).toEqual('This is not a triangle.');
  });

  test('correctly identifies an equilateral triangle', () => {
    expect(determineTriangle(3, 3, 3)).toEqual('The triangle is equilateral.');
  });

  test('correctly identifies an isoceles triangle', () => {
    expect(determineTriangle(3, 3, 4)).toEqual('The triangle is isoceles.');
  });

  test('correctly identifies a scalene triangle', () => {
    expect(determineTriangle(3, 4, 2)).toEqual('The triangle is scalene.');
  });
});