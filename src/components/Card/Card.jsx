import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ singleCardData }) => {
  const navigate = useNavigate();

  const { id, picture, title, category, category_bg, card_bg, text_color } =
    singleCardData;
  const handleCard = (id) => {
    navigate(`/donationDetails/${id}`);
  };
  return (
    <div
      onClick={() => handleCard(id)}
      className="card  rounded-lg cursor-pointer m-2 lg:m-0"
    >
      <img className="w-full" src={picture} alt={title} />

      <div style={{ background: card_bg }} className="p-4 rounded-b-lg">
        <h2
          style={{
            color: text_color,
            background: category_bg,
            display: "inline-block",
          }}
          className="text-sm  px-2 py-1 rounded-sm my-3"
        >
          {category}
        </h2>
        <p style={{ color: text_color }} className="font-semibold text-lg">
          {title}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  singleCardData: PropTypes.object,
};

export default Card;
