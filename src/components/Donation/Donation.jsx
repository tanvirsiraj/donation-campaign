import { useContext, useEffect, useState } from "react";
import { dataContext } from "../Root/Root";
import { getStoredCard } from "../../utility/localStorage";
import DonationCard from "../DonationCard/DonationCard";

const Donation = () => {
  const [data, setData] = useState([]);
  const { cardData } = useContext(dataContext);

  useEffect(() => {
    const storedCard = getStoredCard();
    const donatedCard = [];
    if (cardData.length > 0) {
      for (const id of storedCard) {
        const card = cardData.find(
          (singleCard) => singleCard.id === parseInt(id)
        );
        if (card) {
          donatedCard.push(card);
        }
      }
    }
    setData(donatedCard);
  }, [cardData]);
  return (
    <div className="lg:max-w-7xl mx-auto  mt-10 pb-64 ">
      {data.length > 0 ? (
        <div className="mb-56">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.map((d) => (
              <DonationCard key={d.id} donatedCardData={d}></DonationCard>
            ))}
          </div>
          {(data.length >= 1 && data.length <= 4) || data.length === 12 ? (
            <div className="flex justify-center hidden">
              <button
                onClick={() => setData(cardData)}
                className="bg-[#009444] px-7 py-3 rounded-lg text-white text-base font-semibold mt-10"
              >
                See All
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button
                onClick={() => setData(cardData)}
                className="bg-[#009444] px-7 py-3 rounded-lg text-white text-base font-semibold mt-20"
              >
                See All
              </button>
            </div>
          )}
        </div>
      ) : (
        <h2 className="flex justify-center mt-20 mb-32  md:mt-44 md:mb-96 md:text-4xl  font-semibold">
          You do not donate any amount...
        </h2>
      )}
    </div>
  );
};

export default Donation;
