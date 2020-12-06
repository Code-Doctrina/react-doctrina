import React from "react";
import classes from "./index.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  // console.log("This are the received Props ------> ", props.ingredients);
  // console.log(
  //   "This is the transformed Object ------> ",
  //   Object.keys(props.ingredients)
  // );
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
 if (transformedIngredients.length === 0){
    transformedIngredients =<p>Please start adding ingredients!!</p>
 }
  console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
