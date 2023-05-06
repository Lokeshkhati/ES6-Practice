//0. Create a React app that displays a list of employees with their name, age, position, and salary. Implement a feature that allows users to input a salary value and filters the displayed list of employees to show only those whose salary is greater than or equal to the input value, using the filter() function.

import { useState } from "react";
import { employees } from "../../data/employeeData";

const EmployeeList = () => {
  const [salary, setSalary] = useState("");

  const filteredEmployees = employees.filter(
    (employee) => employee.salary >= salary
  );

  return (
    <div>
      <div>
        <label htmlFor="salary"> Enter minimum salary:</label>
        <input
          id="salary"
          type="number"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
          placeholder="Enter salary..."
        />
      </div>
      <ul>
        {filteredEmployees.map(({ name, age, position, salary }, index) => (
          <li key={index} style={{ border: "1px solid black", margin: "1rem" }}>
            <h3> Name : {name}</h3>
            <p> Age : {age}</p>
            <p> Position : {position}</p>
            <h3> Salary : {salary}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList