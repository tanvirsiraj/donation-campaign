import { useContext } from "react";
import { dataContext } from "../Root/Root";
import Card from "../Card/Card";
const AllCards = () => {
  const { cardData } = useContext(dataContext);
  //   console.log(cardData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  pb-20">
      {cardData.map((singleCardData) => (
        <Card key={singleCardData.id} singleCardData={singleCardData}></Card>
      ))}
    </div>
  );
};

export default AllCards;
