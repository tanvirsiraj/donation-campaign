import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationCard = ({ donatedCardData }) => {
  const {
    id,
    title,
    picture,
    card_bg,
    category,
    category_bg,
    text_color,
    button_bg,
    price,
  } = donatedCardData;
  return (
    <div
      className="card card-side mx-2 lg:mx-0"
      style={{ background: card_bg }}
    >
      <figure>
        <img
          className="w-[150px] h-[150px] lg:w-[220px] lg:h-[200px]"
          src={picture}
          alt={title}
        />
      </figure>
      <div className="p-3 md:p-4 space-y-1 md:space-y-2">
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
        <p
          style={{ color: text_color }}
          className="lg:font-semibold text-sm lg:text-lg"
        >
          {title}
        </p>
        <p
          className="text-base lg:text-md lg:font-semibold"
          style={{ color: text_color }}
        >
          {price}
        </p>
        <div className="card-actions ">
          <Link
            to={`/donationDetails/${id}`}
            className="px-2 py-1 lg:px-6 lg:py-3 rounded-md text-white text-xs  lg:text-xl"
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
