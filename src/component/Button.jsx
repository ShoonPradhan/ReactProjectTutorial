const colorClasses = {
  blue: "bg-blue-500 hover:bg-blue-600",
  red: "bg-red-500 hover:bg-red-600",
  green: "bg-green-500 hover:bg-green-600",
};

export const Button = ({ children, color = "blue", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${colorClasses[color]} text-white px-4 py-2 rounded cursor-pointer`}
    >
      {children}
    </button>
  );
};
