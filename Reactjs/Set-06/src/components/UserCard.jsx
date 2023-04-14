import { fakeFetch, url } from "../apis/fakeFetch10";
import { useEffect, useState } from "react";

const UserCard = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isFollowed, setIsFollowed] = useState(false);
  const { age, gender, email, occupation, followers, followedBy } = user;

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    setIsLoading(true);
    try {
      const { data } = await fakeFetch(url);
      setUser(data.profile);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (error) return <h1>{error} </h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const followHandler = () => {
    setUser({ ...user, followers: user.followers + 1 });
    setIsFollowed(true);
  };

  return (
    <div>
      <h1>Profiles</h1>
      <ul>
        <li>
          <p>
            <strong>Email</strong> : {email}
          </p>
          <p>
            <strong>Age</strong> : {age}
          </p>
          <p>
            <strong>Gender</strong> : {gender}
          </p>
          <p>
            <strong>Occupation</strong> : {occupation}
          </p>
          <p>
            <strong>Followers</strong> : {followers}
          </p>
          <p>
            <strong>Followed By</strong> : {followedBy}
          </p>
          <button disabled={isFollowed} onClick={followHandler}>
            Follow John
          </button>
        </li>
      </ul>
    </div>
  );
};
export default UserCard;
