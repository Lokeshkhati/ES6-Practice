import { useEffect, useState } from "react";
import { fakeFetch, url } from "../constants/fakeFetch06";
const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getComments = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setComments(data.comments);
      setError("");
    } catch (error) {
      setError(error.message);
      setComments([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getComments(url);
  }, []);

  const deleteHandler = (name) => {
    const updatedComments = comments.filter((comment) => comment.name !== name);
    setComments(updatedComments);
  };
  return (
    <div>
      {error && <h1>{error} </h1>}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {comments.map(({ name, text }) => (
            <>
              <h1>{name} </h1>
              <p>{text} </p>
              <button onClick={() => deleteHandler(name)}>Delete</button>
            </>
          ))}
        </>
      )}
    </div>
  );
};
export default Comments;



