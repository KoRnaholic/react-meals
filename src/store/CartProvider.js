import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCart = {
  items: [],
  totalAmount: 0,
};
const reducerFunction = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAMount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAMount,
    };
  }
  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(reducerFunction, defaultCart);

  const addItemTocart = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const removeItemFromCart = (id) => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems: addItemTocart,
    removeItems: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
