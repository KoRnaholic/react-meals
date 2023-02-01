import React from "react";
import img from "../assets/meals.jpg";
import classes from "./Header.module.css";
import { Fragment } from "react";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <CartButton onShow={props.onShow} />
      </header>
      <div className={classes["main-image"]}>
        <img src={img} alt="A table of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
