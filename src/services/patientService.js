const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId',
};

export const getDepartmentCollection = () => [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' },
];

export function insertEmployee(data) {
  let employees = getAllPatients();
  data['id'] = generatePatientId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function updatePatient(data) {
  let employees = getAllPatients();
  let recordIndex = employees.findIndex((x) => x.id === data.id);
  employees[recordIndex] = { ...data };
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function deletePatient(id) {
  let employees = getAllPatients();
  employees = employees.filter((x) => x.id !== id);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generatePatientId() {
  if (localStorage.getItem(KEYS.employeeId) == null)
    localStorage.setItem(KEYS.employeeId, '0');
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllPatients() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  //map departmentID to department title
  let departments = getDepartmentCollection();
  // return employees.map((x) => ({
  //   ...x,
  //   department: departments[x.departmentId - 1].title,
  // }));
  return employees;
}
