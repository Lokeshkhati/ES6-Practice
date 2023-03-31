import { studentData } from "../utils/studnetsData";

const Certificate = () => {
  return (
    <div>
      {studentData.map(({ id, name, marks }) => (
        <li key={id}>
          <h3>{name} </h3>
          <h3>{marks} </h3>

          <h1>
            {marks > 80
              ? "Certification Approved"
              : "Certification Not Approved"}{" "}
          </h1>
        </li>
      ))}
    </div>
  );
};
export default Certificate;
