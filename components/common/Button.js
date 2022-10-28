const Button = ({ label, onClick, icon }) => {
  return (
    <button
      className="flex gap-2 justify-center items-center md:text-lg lg:text-xl xl:text-2xl px-8 py-2 w-full md:w-fit text-black font-semibold bg-gradient-to-r from-blue-400 to-white rounded-lg"
      onClick={onClick}
    >
      {icon}
      <div>{label}</div>
    </button>
  );
};

export default Button;
