import { ToastContainer } from "react-toastify";

import { RouterMain } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
import { MainProvider } from "./providers";
function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
      <MainProvider>
        <RouterMain />
      </MainProvider>
    </>
  );
}

export default App;
