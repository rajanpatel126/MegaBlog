# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-> Authentication servies are written in such a way, that if in case user wants to change the backend from appwrite to Firebase or MongoDb, then I just need to change one file which is auth.js

-> In useEffect, var.unsubscribe() is used to clear out the memory, so that everytime when the function called, it has to allocate memory everytime but after complition, the memory will be clear out.

-> Email and Slug varification are done using regex expression validator

-> React-hook-form is the concept used in this application. Using this, we can constantly monitor title field in order to derive slug of the post created in Real-Time Editor. Space values are converted to '-' and slug is the unique id of each post.
