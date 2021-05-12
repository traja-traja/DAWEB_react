import React, { useState } from "react";
import "./NewShoppingItem.css";

const NewShoppingItem = () => {
  const [enterredTitle, setEnterredTitle] = useState("");
  const [enterredAmount, setEnterredAmount] = useState("");

  const handleTitleChange = (event) => {
    setEnterredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnterredAmount(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(enterredTitle, enterredAmount);
  };

  return (
    <form className="formular" onSubmit={handleSubmitForm}>
      <input
        placeholder="název položky"
        className="formular__nazev-polozky"
        type="text"
        value={enterredTitle}
        onChange={handleTitleChange}
      />
      <input
        placeholder="počet"
        className="formular__pocet-kusu"
        type="number"
        min="1"
        value={enterredAmount}
        onChange={handleAmountChange}
      />
      <button className="formular__tlacitko">Přidat</button>
    </form>
  );
};

export default NewShoppingItem;
