const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Should create an engineer", () => {
    const engineer = new Engineer(
      "Charnay",
      1,
      "coding26fig@gmail.com",
      "coding26fig"
    );
    expect(engineer.name).toEqual("Charnay");
    expect(engineer.id).toEqual(1);
    expect(engineer.email).toEqual("coding26fig@gmail.com");
    expect(engineer.github).toEqual("coding26fig");
  });
  it("get engineers github", () => {
    const engineer = new Engineer(
      "Charnay",
      1,
      "coding26fig@gmail.com",
      "coding26fig"
    );
    expect(engineer.getRole()).toEqual("Engineer");
  });
});
