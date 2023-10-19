import { useState } from "react";
import Topping from "../Topping";
import './style.css';

const ToppingsSelect = ({ toppings }) => {
  const [checked, setChecked] = useState(false);

  const handlePick = (index, wanted) => {
    const newPizza = [...toppings];
    newPizza[index].wanted = wanted;
    setChecked(newPizza);
  };
  return (
    <>
      <p>Choose as many toppings as you want</p>
      <p>Selected toppings: 0, total price: 0 Euro</p>

      <div className="toppings">
        {toppings.map((topping) => (
          <Topping topping={topping} key={topping.name} status={topping.selected} onPick={(wanted) => handlePick(index, wanted)} />
        ))}
      </div>
    </>
  );
};

export default ToppingsSelect;
