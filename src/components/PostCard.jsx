/* eslint-disable react/prop-types */
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
   return (
      <Link to={`/port/${$id}`}>
         <div className="w-full rounded-xl bg-gray-400 p-4">
            <div className="justify-center w-full mb-4">
               <img
                  src={appwriteService.getFilePreview(featuredImage)}
                  alt={title}
                  className="rounded-xl"
               />
            </div>
            <h2 className="text-2xl font-semibold">{title}</h2>
         </div>
      </Link>
   );
};

export default PostCard;
