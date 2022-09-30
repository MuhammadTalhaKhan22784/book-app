import "./App.css";
import { useEffect } from "react";
// BOOTSTRAP CSS ----------------------
import "bootstrap/dist/css/bootstrap.min.css";
// REACT ROUTER ------------------------
import { Route, Routes, useLocation } from "react-router-dom";
// TOASTIFY FOR NOTIFS ------------------
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Components
import Header from "./Layout/Header/Header";
import Landing from "./Pages/Landing/Landing";
import Footer from "./Layout/Footer/Footer";
import BookDetail from "./Pages/BookDetail/BookDetail";
import Cart from "./Pages/Cart/Cart";
import CartDetails from "./Pages/Cart/CartDetails";
import YourInfo from "./Pages/Cart/YourInfo";
import Thanks from "./Pages/Cart/Thanks";
import Classification from "./Pages/Classification/Classification";
import CloudLib from "./Pages/CloudLib/CloudLib";
import News from "./Pages/News/News";
import NewsDetail from "./Pages/News/NewsDetail";
import SubscriptionPlan from "./Pages/SubscriptionPlan/SubscriptionPlan";
import AboutUs from "./Pages/AboutUs/AboutUs";
import SearchPage from "./Pages/SearchPage/SearchPage";

const App = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <ToastContainer />
      <Header />
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<BookDetail />} path="/detail" />
        <Route element={<CloudLib />} path="/cloud-library" />
        <Route element={<AboutUs />} path="/aboutus" />
        <Route element={<Classification />} path="/classification/:category" />
        <Route element={<Cart />} path="/cart">
          <Route path="" element={<CartDetails />} />
          <Route path="info" element={<YourInfo />} />
          <Route path="thanks" element={<Thanks />} />
        </Route>
        <Route element={<News />} path="/news" />
        <Route element={<NewsDetail />} path="/news-detail" />
        <Route element={<SubscriptionPlan />} path="/subscription-plans" />
        <Route element={<SearchPage />} path="/search" />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
