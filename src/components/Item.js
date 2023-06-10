import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(true);

  function handleCart() {
    setInCart((inCart) => !inCart);
  }

  const cartState = inCart ? "add" : "in-cart"
  const cartButtonColor = inCart ? "add" : "remove"


  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartButtonColor} onClick={handleCart}>{inCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
