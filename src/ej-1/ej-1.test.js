const { getSavings, getTotalSavings } = require("./ej-1");

describe("Calculate Pepito's monthly savings", () => {
  const profits = [
    123, -340, 456, 78, -290, 312, -450, 234, 567, -123, 400, -500,
  ];
  const bills = [
    111, -320, 460, 90, -280, 310, -460, 230, 570, -130, 390, -480,
  ];
  const diff = [12, -20, -4, -12, -10, 2, 10, 4, -3, 7, 10, -20];

  const response = getSavings(profits, bills);

  it("should return an Array", () => {
    expect(typeof response).toBe("object");
  });

  it("should return the savings for each month of the year", () => {
    expect(response).toEqual(diff);
  });
});

describe("Calculate Pepito's annual savings", () => {
  const profits = [
    123, -340, 456, 78, -290, 312, -450, 234, 567, -123, 400, -500,
  ];
  const bills = [111, 320, 460, 90, 280, 310, 460, 230, 570, 130, 390, 480];

  const response = getTotalSavings(profits, bills);

  it("should return a Number", () => {
    expect(typeof response).toBe("number");
  });

  it("should return the Total savings of the year", () => {
    expect(response).toBe(-3364);
  });
});
