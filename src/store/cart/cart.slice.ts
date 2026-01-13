import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ICartState, ICartProduct } from "../../interfaces";

const initialState: ICartState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartProduct>) => {
      const item = state.items.find(
        (i) => i.productId === action.payload.productId
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.productId !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    changeQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const item = state.items.find(
        (i) => i.productId === action.payload.productId
      );
      if (item) item.quantity = action.payload.quantity;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart(state) {
      state.items = [];
      localStorage.setItem("cart", "[]");
    },
  },
});

export const {addToCart, removeFromCart, changeQuantity, clearCart} = cartSlice.actions