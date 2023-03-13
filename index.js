// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: 'value',
}
 // updateEmployeeWithKeyAndValue function
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  }
  
  // destructivelyUpdateEmployeeWithKeyAndValue function
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  // deleteFromEmployeeByKey function
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // destructivelyDeleteFromEmployeeByKey function
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }