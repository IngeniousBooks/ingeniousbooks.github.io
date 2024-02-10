import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import Footer from "./components/footer-section/footer.tsx";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
