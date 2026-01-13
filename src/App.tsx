import { ToastContainer } from "react-toastify";
import "./App.css";
import { useRoutes } from "./routes";

const App = () => {
  const routes = useRoutes();
  return (
    <>
      {routes}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
