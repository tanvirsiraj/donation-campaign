import { useContext, useEffect, useState } from "react";
import AllCards from "../AllCards/AllCards";
import Banner from "../Banner/Banner";
import { dataContext } from "../Root/Root";

const Home = () => {
  const [displayData, setDisplayData] = useState([]);
  const { cardData } = useContext(dataContext);
  useEffect(() => {
    if (cardData) {
      setDisplayData(cardData);
    }
  }, [cardData]);

  const handleSearch = (id) => {
    // console.log(id);
    const inputField = document.getElementById(id);

    const inputFieldValue = inputField.value;
    inputField.value = "";

    let filteredData = cardData.filter(
      (singleData) =>
        singleData.category.toLowerCase() === inputFieldValue.toLowerCase()
    );
    if (filteredData.length != 0) {
      setDisplayData(filteredData);
    } else {
      setDisplayData(cardData);
    }
  };

  const handleShowAll = () => {
    setDisplayData(cardData);
  };

  return (
    <div className="">
      <Banner handleSearch={handleSearch}></Banner>
      <div className="lg:max-w-7xl mx-auto mt-[340px] lg:mt-[600px] relative">
        <AllCards handleShowAll={handleShowAll} data={displayData}></AllCards>
      </div>
    </div>
  );
};

export default Home;
