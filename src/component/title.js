import Text from "./Texts.js";
import "./title.css";
// import DataContext from "../data/DataContext.js";
// import { useContext } from "react";

const Title = (props) => {
  const { items } = props;
  // const { income, expense } = useContext(DataContext);
  // const {name} = useContext(DataContext);

  return (
    <div>
      <ul className="Item-list">
        {items.map((e) => (
          <Text {...e} key={e.id} />
          // <Text {...e} key={uuidv4()} />
          // <Text title={e.title} amount={e.amount} key={e.id} />
          // <li key={uuidv4()}>{e.title}<span>{e.amount}</span></li>
        ))}
      </ul>
      {/* <p>รายรับ : {income}</p>
      <p>รายจ่าย : {expense}</p> */}
      {/* {name}  */}
    </div>
  );
};

export default Title;
