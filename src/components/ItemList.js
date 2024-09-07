import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
// import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // const dispatch = useDispatch(); // Just like the hook  which comes from "react-redux" .

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-3 m-2  border-gray-400 border-b-4 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className=" py-2 border-2 drop-shadow-sm">
              <span>{item.card.info.name}</span>
              <span className="text-lg font-semibold">
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="p-4 w-3/12">
            <div className="">
              <button
                className=" mx-5 rounded-lg p-2 bg-slate-400 shadow-lg absolute "
                onClick={() => handleAddItem(item)}
                // onClick={ handleAddItem} // Passing a call back function .
              >
                Add +{" "}
              </button>
            </div>
            <img
              src={CDN_URL + item.card.info.imageId}
              className="  border-black box-border  m-4  h-40 w-32"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
