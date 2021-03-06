import Cells from "./cells";

describe("Cells: Initialiser", () => {
  test("guard clause, only accepts a number", () => {
    expect(Cells("IV")).toBe(undefined);
  });
});

describe("Array of cells", () => {
  const arrayOfCells = Cells(10);

  test("object is array", () => {
    expect(Array.isArray(arrayOfCells)).toBeTruthy();
  });

  test("array length matches number input", () => {
    expect(arrayOfCells.length).toEqual(10);
  });

  test("object of array has valid properties", () => {
    expect(arrayOfCells[0]).toMatchObject({
      id: "A1",
      type: "div",
      class: "cell",
    });
  });
});
