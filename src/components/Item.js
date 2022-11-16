import React, { useState } from "react";

function Item({ name, category }) {

  const [addItem, setAddItem] = useState(true)

  function  handleItems() {
    setAddItem((addItem) => !addItem)
  }

  const appItems = addItem ? "" : "in-cart"

  // function selectItems() {
  //   return (
  //     <li className="in-cart">
  //       hi
  //     </li>
  //   )
  // }

  return (
    <li className={appItems}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={(handleItems)}>{addItem ? "Add to Cart" : "Remove from Cart"}</button>
      {/* onClick={selectItems} */}
    </li>
  );
}

export default Item;
