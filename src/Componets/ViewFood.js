import React, { useEffect, useState } from "react";
import "../App.css"
const ViewNote = () => {
  const [foodType, setFoodType] = useState("Delicious Food");
  const[values , setValues] = useState();
  useEffect(() => {
    const val = localStorage.getItem("FoodValue");
    const data = JSON.parse(val);
    const foodData = data.filter((item)=> item.foodType == foodType);
      console.log(foodData);
     setValues(foodData);
  }, [foodType]);
  return (
    <div className="fef">
      <div>
        <h1>Filter Data</h1>
        <span>Food Type</span>
        <select value={foodType} onChange={(e) => setFoodType(e.target.value)}>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages"> Beverages</option>
          <option value="Desserts"> Desserts</option>
        </select>
      </div>
       {
          values && values.map((item)=>{
              return <div className="listvalue"> 
                   <ul> <li>Food Name :{item.foodName}</li>
                   <li>Food Type :{item.foodType}</li>
                   <li>Food Time :{item.delivaryTime}</li>
                   </ul>
               </div>
          })
       }
    </div>
  );
};

export default ViewNote;
