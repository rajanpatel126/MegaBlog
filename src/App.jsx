import "./App.css";
import env from "./conf/conf";

function App() {
  console.log(env.appwriteProjectId);

  return (
    <>
      <h1 className="text-4xl font-semibold text-white font-sans text-center p-4">
        A blog app with Appwrite
      </h1>
    </>
  );
}

export default App;
