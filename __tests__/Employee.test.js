const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("should create an employee", () => {
    const employee = new Employee("Charnay", 1, "coding26fig@gmail.com");
    expect(employee.name).toEqual("Charnay");
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual("coding26fig@gmail.com");
  });
  it("gets employee name", () => {
    const employee = new Employee("Charnay", 1, "coding26fig@gmail.com");
    expect(employee.getName()).toEqual("Charnay");
  });
  it("get employee id", () => {
    const employee = new Employee("Charnay", 1, "coding26fig@gmail.com");
    expect(employee.getId()).toEqual(1);
  });
  it("get employee email", () => {
    const employee = new Employee("Charnay", 1, "coding26fig@gmail.com");
    expect(employee.getEmail()).toEqual("coding26fig@gmail.com");
  });
  it("get employee role", () => {
    const employee = new Employee("Charnay", 1, "coding26fig@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
  });
});
