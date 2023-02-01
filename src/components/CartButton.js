import CartIcon from "../cart/CartIcon";
import classes from "./CartButton.module.css";
import { useContext, useState, useEffect } from "react";
import CartContext from "../store/cart-context";

const CartButton = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.items.reduce((curItem, item) => {
    return curItem + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnHighlighted(true);

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button onClick={props.onShow} className={btnClasses}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numItems}</span>
    </button>
  );
};

export default CartButton;
