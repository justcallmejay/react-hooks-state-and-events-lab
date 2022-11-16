import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [selectCategory, setSelectCategory] = useState('All')

const filterItems = selectCategory === 'All' ? items : items.filter(item => item.category === selectCategory)
// console.log(filterItems)

// function renderItems(items) {
//   items.filter((item) => {
//         if (selectCategory === 'All') return true;
        
//         return item.category === selectCategory 
//   })
// }

function handleChange(e) {
  setSelectCategory(e.target.value)
}

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select value={selectCategory} name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {
    filterItems.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))
}
      </ul>
    </div>
  );
}

export default ShoppingList;

// function itemz(e){
//   if (e.target.value === 'All') {
//   {
//     items.map((item) => (
//     <Item key={item.id} name={item.name} category={item.category} />
//   ))
// }
// }
// }

//   const ClickMe = (event) => {
//     items.map(item => {
//     if (event.target.value === item.category) {
//       console.log(item.name)
//     }
//   })
// }