//  Now, Lets build the restaurant card component .
import { useContext } from "react";
import { CDN_URL } from "../utils/constants"; // Named export is imported like this .
import UserContext from "../utils/UserContext";

const styleCard = {
  backgroundColor: "#f5b041",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {loggedInUser} = useContext(UserContext) ;  

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    sla,
  } = resData?.info;
  return (
    <div className="m-4 p-4 w-[360px] rounded-lg bg-orange-100 hover:bg-orange-300"> 
      <img
        className="rounded-lg"
        // alt="res-logo"
        // src={CDN_URL + resData.data.cloudinaryImageId}
        src={CDN_URL + cloudinaryImageId}
        alt="Biryani"
      />

      <h3 className="font-bold py-4 test-lg">{name}</h3>  
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla?.slaString}</h4>
      <h4>{deliveryTime} minutes</h4> 
      <h4> User: {loggedInUser}</h4>
    </div>
  );
};


//  Lets create a Higher Order Component, for the Promoted Label on rthe Swiggy Restaurant Cards . 
// It takes input as Restaurant Card and output as Restuarant Card Promoted . 

export const withPromotedLabel = (RestaurantCard) =>{
  return (props) =>{
    //  Now, This Component will return some piece of JSX . 
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2"> Promoted.... </label>
        <RestaurantCard {...props} />  
      </div>
    )
  }
}

export default RestaurantCard;
