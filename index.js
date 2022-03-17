const employee = {
    name: "Brad",
    streetAddress: "14 Lagger Rd",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
};
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
};
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee}
    return newEmployee;
};