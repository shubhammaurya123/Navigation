import React, { useState } from "react";

import "../App.css";
const CreateNote = () => {
  const [foodName, setFoodName] = useState("");
  const [foodType, setFoodType] = useState("");
  const [delivaryTime, setDelivaryTime] = useState(0);
  const AddFoodValue = () => {
    const obj = [
      { foodName: foodName, foodType: foodType, delivaryTime: delivaryTime },
    ];
    console.log(foodName, foodType, delivaryTime);
    const val = localStorage.getItem("FoodValue");
    localStorage.removeItem("FoodValue");
    const data = JSON.parse(val);
    if (data) {
      const val = data.concat(obj);
      localStorage.setItem("FoodValue", JSON.stringify(val));
    }else {
       localStorage.setItem("FoodValue", JSON.stringify(obj));
    }
    
  
    alert("add Successfully");
    setDelivaryTime("");
    setFoodName("");
    setFoodType("");
  };

  return (
    <div className="addFood">
      <ul className="list-item">
        <li>
          <span>Food Name</span>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          ></input>
        </li>
        <li>
          <span>Food Type</span>
          <select
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
          >
            <option value="Delicious Food">Delicious Food</option>
            <option value="Nutritious Food">Nutritious Food</option>
            <option value="Fast Food">Fast Food</option>
            <option value="Beverages"> Beverages</option>
            <option value="Desserts"> Desserts</option>
          </select>
        </li>
        <li>
          <span>Max Delivary Time</span>
          <input
            type="text"
            value={delivaryTime}
            onChange={(e) => setDelivaryTime(e.target.value)}
          ></input>
        </li>
      </ul>

      <button onClick={AddFoodValue}>Submit</button>
    </div>
  );
};

export default CreateNote;
