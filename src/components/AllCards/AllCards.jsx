import Card from "../Card/Card";
const AllCards = ({ data, handleShowAll }) => {
  // console.log(data);
  return (
    <div>
      <div
        className={`grid gap-6  pb-6 ${
          data.length === 12
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {data.map((singleCardData) => (
          <Card key={singleCardData.id} singleCardData={singleCardData}></Card>
        ))}
      </div>
      <div className="flex justify-center pb-20">
        <button
          onClick={handleShowAll}
          className={`bg-[#FF444A] px-7 py-3 rounded-lg text-white text-base font-semibold mt-10 ${
            data.length === 3 ? "block" : "hidden"
          }`}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default AllCards;
