import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationCard = ({ donatedCardData }) => {
  const {
    id,
    title,
    rectangleImg,
    card_bg,
    category,
    category_bg,
    text_color,
    button_bg,
    price,
  } = donatedCardData;
  return (
    <div className="card card-side" style={{ background: card_bg }}>
      <figure>
        <img src={rectangleImg} alt={title} />
      </figure>
      <div className="p-6 space-y-2">
        <h2
          style={{
            color: text_color,
            background: category_bg,
            display: "inline-block",
          }}
          className="text-sm px-2  rounded-sm"
        >
          {category}
        </h2>
        <p style={{ color: text_color }} className="font-semibold text-lg">
          {title}
        </p>
        <p className="text-md font-semibold" style={{ color: text_color }}>
          {price}
        </p>
        <div className="card-actions ">
          <Link
            to={`/donationDetails/${id}`}
            className="px-6 py-3 rounded-md text-white text-xl"
            style={{ background: button_bg }}
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  donatedCardData: PropTypes.object,
  id: PropTypes.number,
  title: PropTypes.string,
  rectangleImg: PropTypes.string,
  card_bg: PropTypes.string,
  category: PropTypes.string,
  category_bg: PropTypes.string,
  text_color: PropTypes.string,
  button_bg: PropTypes.string,
  price: PropTypes.string,
};
export default DonationCard;
