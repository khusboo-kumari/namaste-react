// import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ info, showItems, setShowIndex }) => {
  // console.log(info);
  
  //  NOW, LETS CREATE A STATE VARIABLE TO SHOW ITEMS 
  // const [showItems, setShowItems] = useState(false) ; 

    const  handleClick = () =>{
      // setShowItems(!showItems) ; 
      setShowIndex() ;    
    }  

  return (
    <div>
      {/* Header  */}
      <div className="w-6/12  mx-auto my-4 bg-gray-50 shadow-lg p-4  " >
        <div className="flex justify-between cursor-pointer " onClick={handleClick}> 
          <span className="font-bold text-lg "> 
            {info.title} ({info.itemCards.length}) 
          </span>
          <span> 🔽 </span>   
        </div>
          {showItems && <ItemList items={info.itemCards} /> }  
      </div>

      {/* Accordion Body */} 
    </div>
  );
};

export default RestaurantCategory;
