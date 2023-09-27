import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBackToBack = () => {
    navigate("/");
  };
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center  relative mt-0">
      <img className="w-60 h-60 md:w-80 md:h-80" src="notFound.webp" />
      <button
        onClick={handleBackToBack}
        className="btn mt-8 btn-warning font-bold text-lg"
      >
        Back To Home
      </button>
    </div>
  );
};

export default NotFound;
