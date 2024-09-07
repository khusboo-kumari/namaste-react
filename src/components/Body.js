import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"; // importing the hook
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local  State Variable  -> Super  Powerful Variable .
  const [listOfRestaurants, setListOfRestaurant] = useState([]); // pass resList as Default .
  //  For updating the search for restaurants names even after being filtered .
  const [filteredRest, setFilteredRest] = useState([]);

  const RestaurantCardPromotedddd = withPromotedLabel(RestaurantCard);

  // data binding for the searchbox
  const [searchText, setSearchText] = useState(""); // setSearchText for updated restaurant card .
  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component) .
  // console.log("See body is being rendered ", listOfRestaurants);
  useEffect(() => {
    // console.log("useEffect Called ");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139298&lng=77.2088282&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    setListOfRestaurant(
      //  Optional Chaining in JS
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
    );
    setFilteredRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //  Fast Loading Logic   -> This Concept  is known as Conditional Rendering :) ...
  // if (listOfRestaurants.length === 0) {
  //   return  <Shimmer/> ;
  // }

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        {" "}
        This app runs on internet and your smile, but you failed to smile so i
        failed to run{" "}
      </h1>
    );
  }

  const  { loggedInUser, setUserName } = useContext(UserContext) ;  

  return !listOfRestaurants ? (
    <Shimmer />
  ) : listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);
              const filteredRest = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRest(filteredRest);
            }}
          >
            Search
          </button>
        </div>

        <div className="search m-4 p-4  flex items-center">
          <button
            className="px-4 py-2 bg-slate-400 rounded-lg"
            onClick={() => {
              //  Filter Logic here ,
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setListOfRestaurant(filteredList);
            }}
          >
            Top Rated restaurants{" "}
          </button>
        </div>

        <div className="search m-4 p-4  flex items-center">
          <label> User Name : </label>
          <input
            className="border border-black p-2 "
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* <RestaurantCard resData={resList[0]} />
          
          
            {/* // * looping through the <RestaurentCard /> components Using Array.map() method */}

        {filteredRest.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {/* If the restaurant is promoted, then add a promoted lavel to it.  */}

            {restaurant.info.promoted ? (
              <RestaurantCardPromotedddd resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
