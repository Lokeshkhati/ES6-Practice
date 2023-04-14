// 5.Create a react component that calls the social media api when the page is loaded completely and display all the posts on the screen. And on click of show bakery button, show only the posts with category as bakery.

import { fakeFetch, url } from "../apis/fakeFetch05";
import { useEffect, useState } from "react";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getPosts = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setPosts(data.posts);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (error) return <h1>{error} </h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const showBakeryHandler = (category) => {
    const filteredPosts = posts.filter((post) => post.category === category);
    setPosts(filteredPosts);
  };

  return (
    <div>
      <button onClick={() => showBakeryHandler("Bakery")}>Show Bakery</button>
      <ul style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {posts.length > 0 &&
          posts.map(({ src, caption, views, likes }) => (
            <li>
              <img src={src} alt="" />
              <h3> {caption} </h3>
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
export default PostsList;
