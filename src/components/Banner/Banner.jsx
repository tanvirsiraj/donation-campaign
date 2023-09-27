import "./Banner.css";
const Banner = ({ handleSearch }) => {
  return (
    <div
      className="hero h-[400px] lg:h-[600px] w-full"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/h1zLrxb/people-meeting-community-center.jpg)",
        position: "absolute",
        top: "0",
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content mt-14 lg:mt-0">
        <div>
          <h1 className="mb-6 md:mb-10 text-base md:text-3xl lg:text-5xl font-semibold md:font-bold text-[#0B0B0B]">
            I Grow By Helping People In Need
          </h1>
          <div className="form-control">
            <div className="input-group  flex justify-center">
              <input
                id="searchText"
                type="text"
                placeholder="Search…"
                className="input p-2 md:px-4 text[#BBB666] text-sm md:text-base"
              />
              <button
                onClick={() => handleSearch("searchText")}
                className="btn p-2 md:px-4 md:font-semibold text-xs md:text-base text-white bg-[#FF444A] border-0"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
