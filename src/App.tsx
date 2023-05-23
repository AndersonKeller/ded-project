import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./providers/AuthProvider";
import { RouterMain } from "./routes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "react-toastify/dist/ReactToastify.css";
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
      <AuthProvider>
        <RouterMain />
      </AuthProvider>
    </>
  );
}

export default App;
