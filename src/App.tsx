import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import TrackingPage from "./pages/TrackingPage";
import ScrollToTop from "./components/ScrollToTop ";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
          <Route path="/track" element={<TrackingPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
