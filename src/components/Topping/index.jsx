
import Check from "../Check";
import './style.css';

const Topping = ({ topping, status, onPick }) => {


  return (
    <div className="topping">
      <Check status={status} onChange={onPick} />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
