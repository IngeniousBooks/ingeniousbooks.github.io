import { createBrowserRouter } from "react-router-dom";
import Home from "./home-page.tsx";
import ErrorPage from "./error-page.tsx";
import ContactSection from "../components/contact-section/contact-section.tsx";
import Header from "../components/header-section/header.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: (
      <>
        <Header />
        <ContactSection />
      </>
    ),
  },
]);

export default router;
