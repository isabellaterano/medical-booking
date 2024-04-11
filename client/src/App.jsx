import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import Reviews from "./pages/Reviews.jsx";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import InstantConsultation from "./pages/InstantConsultation.jsx";
import BookingConsultation from "./pages/BookingConsultation";
import Profile from "./pages/Profile.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ReportsLayout from "./components/ReportsLayout.jsx";
import Appointments from "./pages/Appointments.jsx";
import SelfCheckup from "./pages/SelfCheckup.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/selfcheckup" element={<SelfCheckup />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/instantconsultation"
            element={<InstantConsultation />}
          />
          <Route
            path="/bookingconsultation"
            element={<BookingConsultation />}
          />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reports" element={<ReportsLayout />} />
          <Route path="/appointments" element={<Appointments />} />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
