// 7. Create a React component that calls the projects api and list all the projects when the page loads with titles and description. Create buttons saying “Show Details” for each project. On click of the button show title, description, technologies, completed of that project only.

import { fakeFetch, url } from "../apis/fakeFetch07";
import { useEffect, useState } from "react";

const ProjectsList = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const { title, description, technologies, completed } = project;

  const getProjects = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setProjects(data.projects);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  if (error) return <h1>{error} </h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const showDetailHandler = (title) => {
    const project = projects.find((project) => project.title === title);
    setProject(project);
  };

  return (
    <div>
      <h3> Projects </h3>
      <ul>
        {projects?.length > 0 &&
          projects?.map(({ title, description }) => (
            <li>
              <p>
                <strong>Name</strong> : {title}
              </p>
              <p>
                <strong>Description</strong> : {description}
              </p>
              <button onClick={() => showDetailHandler(title)}>
                Show Details
              </button>
            </li>
          ))}
      </ul>

      {project?.title?.length > 0 && (
        <div>
         
          <p>
            <strong>Name</strong> : {title}
          </p>
          <p>
            <strong>Description</strong> : {description}
          </p>
          <p>
            <strong>Technologies</strong> :{" "}
            {technologies.map((technology) => technology)}
          </p>
          <p>
            <strong>Completed </strong> : {completed ? "true" : "false"}
          </p>
        </div>
      )}
    </div>
  );
};
export default ProjectsList;
