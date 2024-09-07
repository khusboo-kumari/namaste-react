import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // The initial "state" is an Empty Array .
  },
  reducers: {
    addItem: (state, action) => {
      // We will modify the "state" based on the action .
      //  we are Mutating the state over here .
      state.items.push(action.payload);

      //  Vanilla Redux says -> Dont Mutate State .
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // state = ["Khus Dytto "] ;  // Magically, Simply this will also work i.e. cler the carts .
      // state.items.length = 0 ;  // state = [] .
      //  OR
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer ;      
