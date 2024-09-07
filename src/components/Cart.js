import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";

const Cart = () => {
  //  Subscribe to the store using useSelector which comes from react-redux
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch(); 
  const handleCart = () => {
    dispatch(clearCart());   
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">See your Cart :) </h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-slate-500 rounded-xl"
          onClick={handleCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 && (
          <h1>Your cart is Empty bro, why are u here, Go back </h1>
        )}

        <ItemList items={cartItems} />   
      </div>
    </div>
  );
};
export default Cart;
