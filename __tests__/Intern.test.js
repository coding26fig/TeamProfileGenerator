const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("should create intern", () => {
    const intern = new Intern("Charnay", 1, "coding26fig@gmail.com", "school");

    expect(intern.name).toEqual("Charnay");
    expect(intern.id).toEqual(1);
    expect(intern.email).toEqual("coding26fig@gmail.com");
    expect(intern.school).toEqual("school");
  });
  it("get interns school", () => {
    const intern = new Intern("Charnay", 1, "coding26fig@gmail.com", "school");
    expect(intern.getSchool()).toEqual("school");
    expect(intern.getRole()).toEqual("Intern");
  });
});
