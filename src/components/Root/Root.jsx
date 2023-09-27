import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext([]);
const Root = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);
  return (
    <div className="">
      <dataContext.Provider value={{ cardData, setCardData }}>
        <Header></Header>
        <Outlet></Outlet>
      </dataContext.Provider>
    </div>
  );
};

export default Root;
