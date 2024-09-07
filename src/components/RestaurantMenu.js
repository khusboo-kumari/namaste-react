import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //  Custom Hook
  const resInfo = useRestaurantMenu(resId);
  
  //  At a time only one Accordions should be open, Expand And Collapse . 
  const [showIndex, setShowIndex] = useState(null) ; 

  if (resInfo === null) return <Shimmer />;

  // Extracting name, cuisines, and costForTwoMessage safely
  const restaurant = resInfo?.cards[2]?.card?.card?.info;

  if (!restaurant) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } = restaurant;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  console.log(itemCards);

  //  Now lets make categories for the Recommended Items  of a Restaurant .
  const categories =
    // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.cards?.filter(
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        // "type.googleapis.com/swiggy.presentation.food.v2.Dish"
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>

      <p className=" font-semibold my-3 text-lg">
        {cuisines.join(" , ")} - {costForTwo}{" "}
      </p>

      {/* <ul>
        {itemCards ? (
          itemCards.map((item) => (
            <div key={item.card.info.id}>
              <p>
                {item.card.info.name} - {" Rs. "}{" "}
                {item.card.info.price / 100 || item.card.defaultPrice / 100}
              </p> 
            </div>
          ))
        ) : (
          <p>No items available</p> 
        )}
      </ul> */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          info={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex = { () => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
