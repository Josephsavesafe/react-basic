import "./FormComponent.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FormComponent = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (event) => {
    setTitle(event.target.value);
  };
  const inputAmount = (event) => {
    setAmount(event.target.value);
  };
  const addItem = (event) => {
    event.preventDefault();
    const itemData = {
      id: uuidv4(),
      title: title,
      amount: Number(amount),
    };
    props.onAddItem(itemData);
    // console.log(itemData);
    setTitle("");
    setAmount(0);
  };
  useEffect(() => {
    const checkData = title.trim().length > 0 && amount !== 0;
    // if (checkData) {
    //   setFormValid(true);
    // }
    setFormValid(checkData);
    // console.log(checkData)
  }, [title, amount]);
  return (
    <div>
      <form onSubmit={addItem}>
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="ระบุชื่อรายการ"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="ระบุจำนวน"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className="btn" disabled={!formValid}>
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
