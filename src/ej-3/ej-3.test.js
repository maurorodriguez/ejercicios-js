const { countFollowersNames } = require("./ej-3");

describe("Return followers", () => {
  const followers = [
    "000soFIA",
    "leomessi",
    "taylorswift",
    "001soFIA",
    "002soFIa",
    "003sOfIa",
    "004sofia",
    "miraquetecomohermano",
    "sofia.",
  ];

  const response = countFollowersNames(followers);

  it("should return the amount of sofia's followed in instagram", () => {
    expect(response).toEqual(6);
  });
});
