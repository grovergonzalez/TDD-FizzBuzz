import { VerificarFizzBuzz, FizzBuzz } from "./FizzBuzz";

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

describe("FizzBuzz", () => {
    it("deberia retornar Buzz con 5", () => {
      expect(FizzBuzz(5)).toEqual("Buzz");
    });
});

describe("FizzBuzz", () => {
    it("deberia retornar Buzz con multiplo de 5", () => {
      expect(FizzBuzz(10)).toEqual("Buzz");
    });
});

describe("FizzBuzz", () => {
    it("deberia retornar FizzBuzz con multiplo de 3 y 5", () => {
      expect(FizzBuzz(15)).toEqual("FizzBuzz");
    });
});

describe("FizzBuzz", () => {
    it("deberia retonar todo lo correspondiente con un array", () => {
        expect(VerificarFizzBuzz(10)).toEqual("1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz");
    });
})
  