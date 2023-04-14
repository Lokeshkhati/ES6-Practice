// 4. Create a React component that calls the video library api when the page is loaded completely and display all the videos on the screen. And on click of delete button, delete the first video in the list.

import { fakeFetch, url } from "../apis/fakeFetch04";
import { useEffect, useState } from "react";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getVideos = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setVideos(data.videos);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  if (error) return <h1>{error} </h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const deleteVideoHandler = (videoObj) => {
    const updatedVideos = videos.filter((video) => video !== videoObj);
    setVideos(updatedVideos);
  };
  return (
    <div>
      <button onClick={() => deleteVideoHandler(videos[0])}>
        Delete Video
      </button>
      <ul>
        {videos.length > 0 &&
          videos.map(({ title, thumbnail, views, likes }) => (
            <li>
              <img src={thumbnail} alt="" />
              <h3> {title} </h3>
              <p>
                <strong>Likes</strong> : {likes}
              </p>
              <p>
                <strong>Views</strong> : {views}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default VideoList;
