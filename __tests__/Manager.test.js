const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("create a manager", () => {
    const manager = new Manager(
      "Charnay",
      1,
      "coding26fig@gmail.com",
      "215-555-5555"
    );
    expect(manager.name).toEqual("Charnay");
    expect(manager.id).toEqual(1);
    expect(manager.email).toEqual("coding26fig@gmail.com");
    expect(manager.officeNumber).toEqual("215-555-5555");
  });
  it("get manager role", () => {
    const manager = new Manager(
      "Charnay",
      1,
      "coding26fig@gmail.com",
      "215-555-5555"
    );
    expect(manager.getRole()).toEqual("Manager");
  });
});
