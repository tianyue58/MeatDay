import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

import './App.css';
import { db } from "./core/firebase";

function App() {
  const [food, setFood] = useState([]);

  const foodRef = collection(db, "food");

  useEffect(() => {
    getDocs(foodRef).then((data) => {
      const food = data.docs.map((doc) => ({...doc.data()}));
      setFood(food);
    }).catch((err) => {
      console.log(err);
    });
  }, [foodRef]);

  return (
    <div className="App">
      <h1>Schools</h1>
      {food.map((food) => 
        <div key = {food.id}>
          <h2>{food.title}</h2>
          <p>{food.desc}</p>
        </div>
      )}
    </div>
  );
}

export default App;
