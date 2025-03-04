import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import DialysisMobileApp from "./pages/DialysisMobileApp";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound"; // Add a 404 page
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="p-4 min-h-[80vh] flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "gallery", element: <Gallery /> },
      { path: "download", element: <DialysisMobileApp /> },
      { path: "*", element: <NotFound /> }, // Catch-all for 404
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
