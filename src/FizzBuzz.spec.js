import FizzBuzz from "./FizzBuzz";

describe("FizzBuzz", () => {
  it("deberia retornar 1", () => {
    expect(FizzBuzz(1)).toEqual(1);
  });
});

describe("FizzBuzz", () => {
    it("deberia retornar 2", () => {
      expect(FizzBuzz(2)).toEqual(2);
    });
});

describe("FizzBuzz", () => {
    it("deberia retornar Fizz con 3", () => {
      expect(FizzBuzz(3)).toEqual("Fizz");
    });
});

describe("FizzBuzz", () => {
    it("deberia retornar Fizz con multiplo de 3", () => {
      expect(FizzBuzz(6)).toEqual("Fizz");
    });
});
  