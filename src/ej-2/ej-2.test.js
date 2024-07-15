const { pokemonDuel } = require("./ej-2");

describe("Return if ash wins", () => {
  const pokMovs1 = [
    {
      id: 24,
      damage: 15,
    },
    {
      id: 93,
      damage: 20,
    },
  ];
  const pokMovs2 = [
    {
      id: 45,
      damage: 22,
    },
    {
      id: 5,
      damage: 15,
    },
  ];

  const duelLog = [
    24, //Ash attack / Gary's life: 85
    45, //Gary attack / Ash's life: 78
    24, //Ash attack / Gary's life: 70
    5, //Gary attack / Ash's life: 63
    93, //Ash attack / Gary's life: 50
    45, //Gary attack / Ash's life: 41
    24, //Ash attack / Gary's life: 35
    5, //Gary attack / Ash's life: 26
    93, //Ash attack / Gary's life: 15
    5, //Gary attack / Ash's life: 11
    93, //Ash attack / Gary's life: -5
  ];

  const response = pokemonDuel(pokMovs1, pokMovs2, duelLog);

  it("should return 1 - Ash won", () => {
    expect(response).toEqual(1);
  });

  const duelLog2 = [
    24, //Ash attack / Gary's life: 85
    45, //Gary attack / Ash's life: 78
    24, //Ash attack / Gary's life: 70
    45, //Gary attack / Ash's life: 56
    93, //Ash attack / Gary's life: 50
    45, //Gary attack / Ash's life: 34
    24, //Ash attack / Gary's life: 35
    45, //Gary attack / Ash's life: 12
    93, //Ash attack / Gary's life: 15
    45, //Gary attack / Ash's life: -10
  ];

  const response2 = pokemonDuel(pokMovs1, pokMovs2, duelLog2);

  it("should return 0 - Ash lost", () => {
    expect(response2).toEqual(0);
  });
});
