/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useId } from "react";

function Select({ options, classname = "", label, ...props }, ref) {
   const id = useId();

   return (
      <div className="w-full">
         $
         {label && (
            <label htmlFor={id}>
               <select
                  {...props}
                  id={id}
                  ref={ref}
                  className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`}
               >
                  $
                  {options?.map((option) => (
                     <option key={option} value={option}>
                        {option}
                     </option>
                  ))}
               </select>
            </label>
         )}
      </div>
   );
}

export default React.forwardRef(Select);
