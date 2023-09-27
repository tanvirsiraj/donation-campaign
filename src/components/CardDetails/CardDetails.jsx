import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataContext } from "../Root/Root";
import "./CardDetails.css";
import { savedToLocalStorage } from "../../utility/localStorage";
import Swal from "sweetalert2";
const CardDetails = () => {
  const { id } = useParams();
  const { cardData } = useContext(dataContext);
  const [selectedCard, setSelectedCard] = useState([]);
  // console.log(parseInt(id), cardData);

  useEffect(() => {
    if (cardData.length > 0) {
      const selectedCardData = cardData.find(
        (singleData) => singleData.id === parseInt(id)
      );
      setSelectedCard(selectedCardData);
    }
  }, [cardData]);

  //   console.log(selectedCard);
  const handleDonate = (id) => {
    // console.log(id);
    savedToLocalStorage(id);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "You have successfully donated",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div className="lg:max-w-7xl mx-auto mt-10 pb-20">
      <div className="relative mx-2 lg:mx-0">
        <img
          className="h-[400px] lg:h-[700px] w-full rounded-2xl"
          src={selectedCard.picture}
        />
        <button
          onClick={() => handleDonate(id)}
          className="absolute left-5 bottom-[40px] z-10 px-6 py-3 rounded-md text-white text-xl"
          style={{ background: selectedCard.button_bg }}
        >
          Donate {selectedCard.price}
        </button>
        <div className="overlay"></div>
      </div>
      <h2 className=" text-xl md:text-4xl font-bold my-12 mb-4 text-black mx-2 lg:mx-0">
        {selectedCard.title}
      </h2>
      <p className="text-sm md:text-base text-black mx-2 lg:mx-0">
        {selectedCard.description}
      </p>
    </div>
  );
};

export default CardDetails;
