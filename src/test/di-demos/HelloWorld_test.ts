describe("A suite", () => {

  var number;

  beforeEach(() => {
    number = 1 + Math.random();
  });

  it("contains spec with an expectation", () => {
    expect(number).toBeGreaterThan(0);
  });
});
