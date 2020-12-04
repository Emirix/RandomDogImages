// Coded By Emir Tanır
// Instagram: emirtnr355
// Whatsapp: +90 544 381 6590
// emirtanir55@gmail.com

// ×××××××××××××××××××××××××××××××××××××××××××

// Today is 04.12.2020 23:11, hi to future

import "./App.css";
import Header from "./Components/Header";

import { useState, useEffect } from "react";

function App() {
  const [dogData, setDogData] = useState([]);

  function getDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((json) => setDogData(json));
  }

  useEffect(() => {
    getDogImage();
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="container w-50 border mx-auto p-2 mt-2">
        <img src={dogData.message} />
        <div className="d-flex justify-content-center mt-2">
          <button onClick={() => getDogImage()} className="btn btn-primary">
            New Dog
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
