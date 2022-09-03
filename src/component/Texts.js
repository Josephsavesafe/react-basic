import PropTypes from "prop-types";
import "./Text.css";
// import DataContext from "../data/DataContext";
// import { useContext } from "react";

const Text = (props) => {
  const { title, amount } = props;
  const status = amount < 0 ? "expense" : "income";
  const symbol = amount > 0 ? "+" : "";
  // const symbol = amount < 0 ? "-" : "+";
  // const name = useContext(DataContext);
  return (
    <li className={status}>
      {title}
      {/* <span>{symbol}{Math.abs(amount)}</span> */}
      <span>
        {symbol}
        {amount}
      </span>
      {/* {name} */}
      {/* <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer> */}
    </li>
  );
};

Text.propTypes = {
  title: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Text;
