import FizzBuzz from "./FizzBuzz";

describe("FizzBuzz", () => {
  it("deberia retornar 1", () => {
    expect(FizzBuzz(1)).toEqual(1);
  });
});

describe("FizzBuzz", () => {
    it("deberia retornar FizzBuzz", () => {
      expect(FizzBuzz(3)).toEqual("FizzBuzz");
    });
  });
  