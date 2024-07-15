const { decodeMessage } = require("./ej-4");

describe("Return followers", () => {
  const message =
    "elefante serpiente tigre oso yak ? ardilla tigre rinoceronte ardilla pingüino ardilla delfín oso ? elefante nutria ? león ardilla ? ardilla vaca elefante nutria iguana delfín ardilla ? serpiente iguana elefante mono pingüino rinoceronte elefante vaca iguana vaca ardilla ? serpiente elefante tigre elefante canguro iguana elefante nutria tigre oso serpiente ? canguro urraca ardilla rinoceronte elefante nutria tigre ardilla ? yak ? delfín oso serpiente";

  const response = decodeMessage(message);

  it("should return the decoded message", () => {
    expect(response).toEqual(
      "estoy atrapado en la avenida siempreviva setecientos cuarenta y dos"
    );
  });
});
