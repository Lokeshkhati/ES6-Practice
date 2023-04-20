//9.  Create a React component that calls the video api and display all the details of the video on the screen. And on click of add label button, add a label property to the object and display the details on the screen

import { fakeFetch, url } from "../apis/fakeFetch09";
import { useContext, useEffect, useState } from "react";

const VideoCard = () => {
  const [video, setVideo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { title, thumbnail, views, likes, label } = video;

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setVideo(data.videos);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (error) return <h1>{error} </h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const addLabelHandler = () => {
    setVideo({ ...video, label: "Self Motivational" });
  };

  return (
    
      <ul>
        <li>
          <img src={thumbnail} alt="" />
          <h3> {title} </h3>
          <p>
            <strong>Likes</strong> : {likes}
          </p>
          <p>
            <strong>Views</strong> : {views}
          </p>
          {label && (
            <p>
              <strong>Label</strong> : {label}
            </p>
          )}
          <button onClick={addLabelHandler}>Add Label</button>
        </li>
      </ul>

  );
};
export default VideoCard;

