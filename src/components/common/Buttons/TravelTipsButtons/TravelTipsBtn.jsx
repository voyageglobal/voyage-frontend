const TravelTipsBtn = ({ text, className, isActive, onClick }) => {
  return (
    <button
      className={`inline-block h-10 w-auto rounded-10px border px-2 text-center font-fourth text-lg/9 font-normal ${
        isActive
          ? 'border-dark-color bg-orange-color text-white'
          : 'border-dark-color text-dark-color'
      } ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default TravelTipsBtn;
