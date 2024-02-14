import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { AuthLayout } from "./components/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
   AddPost,
   AllPost,
   Home,
   EditPost,
   Login,
   SignUp,
   Post,
} from "./Pages/index.js";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/login",
            element: (
               <AuthLayout>
                  <Login authentication={false} />
               </AuthLayout>
            ),
         },
         {
            path: "/signup",
            element: (
               <AuthLayout authentication={false}>
                  <SignUp />
               </AuthLayout>
            ),
         },
         {
            path: "/all-posts",
            element: (
               <AuthLayout authentication>
                  {" "}
                  <AllPost />
               </AuthLayout>
            ),
         },
         {
            path: "/add-post",
            element: (
               <AuthLayout authentication>
                  {" "}
                  <AddPost />
               </AuthLayout>
            ),
         },
         {
            path: "/edit-post/:slug",
            element: (
               <AuthLayout authentication>
                  {" "}
                  <EditPost />
               </AuthLayout>
            ),
         },
         {
            path: "/post/:slug",
            element: <Post />,
         },
      ],
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
   <Provider store={store}>
      <RouterProvider router={router} />
   </Provider>
);
