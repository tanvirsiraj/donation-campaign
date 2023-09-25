import PropTypes from "prop-types";

const Card = ({ singleCardData }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg,
    card_bg,
    text_color,
    button_bg,
    description,
  } = singleCardData;
  return (
    <div className="card rounded-lg">
      <figure>
        <img src={picture} alt={title} />
      </figure>
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
