import { useEffect } from "react";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AboutInfo from "./pages/AboutInfo/AboutInfo";
import BlogInfo from "./pages/BlogInfo/BlogInfo";
import ContactInfo from "./pages/ContactInfo/ContactInfo";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Post from "./pages/Post/Post";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Admission from "./pages/Admission/Admission";
import PortalPri from "./pages/PortalPri/PortalPri";
import PortalSec from "./pages/PortalSec/PortalSec";

const Layout = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="app">
      <ScrollToTop>
        <Navbar />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutInfo />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "/gallery",
        element: <PhotoGallery />,
      },
      {
        path: "/blog",
        element: <BlogInfo />,
      },
      {
        path: "/blog/:blogId",
        element: <Post />,
      },
      {
        path: "/contact",
        element: <ContactInfo />,
      },
      {
        path: "/primary-portal",
        element: <PortalPri />,
      },
      {
        path: "/college-portal",
        element: <PortalSec />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
