/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/config";

const LogoutBtn = () => {
   const dispatch = useDispatch();

   const logOutHandler = () => {
      authService.logout().then(() => {
         dispatch(logout());
      });
   };

   return (
      <button
         className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
         onClick={logOutHandler}
      >
         Logout
      </button>
   );
};

export default LogoutBtn;
