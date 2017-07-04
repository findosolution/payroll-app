// 1. load organization/department details (salary unit, paying unit, )
// 2. load employee details
// 3. load employee salary package (basic salary, [allawansers], salary unit, paying unit, )
// 4. procrssed leave and attendance ( empId, no pay units, total units, )
// 5. add addition
// 6. remove deduction
// 7. deduct paye tax
// 8. deduct EPF emp contribution

var calculateSalary = (empId, employeeSalary, attendance, additions, diductions) => {

  var toatalAllowances = 0;
  for (allowance : employeeSalary.allowances) {
    //toatalAllowances += allowance.amount; //if paying unit
    toatalAllowances += (allowance.amount * (attendance.totalUnits - attendance.noPayUnits)); //if unit
  }

  var toatalAdditions = 0;
  for (addition : additions) {
    toatalAdditions += addition.amount;
  }

  var toatalDiductions = 0;
  for (diduction : diductions) {
    toatalDiductions += diduction.amount;
  }

  // todo - this should be adoupted for no pay leaves (depend on how data come from attendance)
  var eligibaleSalary = employeeSalary.basic * (attendance.totalUnits - attendance.noPayUnits);

  var grossSalary = eligibaleSalary + toatalAllowances + toatalAdditions - toatalDiductions;

  var epfContribution = (eligibaleSalary * employeeSalary.efp) / 100;

  var payeTax = (grossSalary * employeeSalary.efp) / 100;

  var netSalary = grossSalary - epfContribution - payeTax;
}
