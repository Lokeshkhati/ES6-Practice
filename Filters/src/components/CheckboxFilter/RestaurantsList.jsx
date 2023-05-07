import { Fragment, useState } from "react";
import { restaurants, cuisines } from "../../data/restaurantsData";

const RestaurantsList = () => {
  const [selectedCuisines, setSelectedCuisines] = useState([]);

  const checkboxHandler = (event) => {
    const { value, checked } = event.target;
    checked
      ? setSelectedCuisines([...selectedCuisines, value])
      : setSelectedCuisines(
          selectedCuisines.filter((cuisine) => cuisine !== value)
        );
  };

  const filteredRestaurants =
    selectedCuisines.length > 0
      ? restaurants.filter(({ cuisine }) => selectedCuisines.includes(cuisine))
      : restaurants;

  return (
    <div>
      <h1>Restaurants</h1>
      <div>
        {cuisines.map((cuisine) => (
          <Fragment key={cuisine}>
            <input
              id={cuisine}
              type="checkbox"
              value={cuisine}
              onChange={checkboxHandler}
            />
            <label htmlFor={cuisine}> {cuisine} </label>
          </Fragment>
        ))}
      </div>
      <ul>
        {filteredRestaurants.map((restaurant) => (
          <li key={restaurant.name}>
            <div>Name: {restaurant.name}</div>
            <div>Cuisine: {restaurant.cuisine}</div>
            <div>Location: {restaurant.location}</div>
            <div>Rating: {restaurant.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantsList;
