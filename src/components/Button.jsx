/* eslint-disable react/prop-types */
const Button = ({
   children,
   type = "button",
   bgColor = "bg-blue-600",
   textColor = "text-white",
   classname = "",
   ...props
}) => {
   return (
      <button
         className={`px-4 py-2 ${bgColor} ${textColor} ${type} ${classname}`}
         {...props}
      >
         {children}
      </button>
   );
};

export default Button;
