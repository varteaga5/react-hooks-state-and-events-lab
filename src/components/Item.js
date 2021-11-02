import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(true);
  const liClass = cart ? "" : "in-cart";
  function clickHandler(e) {
    console.log("add to cart was clicked");
    console.log("this is cart", cart);
    setCart(!cart);
  }

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={clickHandler}>
        {cart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
