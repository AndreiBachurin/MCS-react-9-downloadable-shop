import React, { useState, useEffect } from "react";
import Item from "./Item.js";

export default function Shop() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await response.json();
        if (data) {
          console.log(data);
          setItems(data);
        }
      }
      catch(error) {
        console.error(error);
      }
    })()
  }, [])



  //return <div className="shop"></div>;
  return (
    <>
    <ul className="ui-list">
        {items.map((item, index) => (
          <p className="ui-item-list" key={index}>
            <Item info={item} />
            {/* <button name={item.name} onClick={props.onDelClick}
              className="item-button">
              Удалить
            </button> */}
          </p>
        ))}
      </ul>
      {/* <Item name={items[0].name} desc={items[0].desc} image={items[0].image} />
      <Item name={items[1].name} desc={items[1].desc} image={items[1].image} /> */}
    </>
  );
};



// function Item(props) {
//   return
// }

