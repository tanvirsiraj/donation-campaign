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
      <div className="grid grid-cols-2 gap-4">
        {data.map((d) => (
          <DonationCard key={d.id} donatedCardData={d}></DonationCard>
        ))}
      </div>
      {data.length === 12 ? (
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
            className="bg-[#009444] px-7 py-3 rounded-lg text-white text-base font-semibold mt-10"
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
