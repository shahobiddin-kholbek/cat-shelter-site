import { Routes, Route } from "react-router-dom";
import "../MeowMain/meow.css";
import "../../css/medias.css"
import AboutUsCP from "../Navbar/About-us/AboutUsCP";
import ContactsCP from "../Navbar/Contacts/ContactsCP";
import FooterCP from "../Footer/Footer";
import HelpTheShelterCP from "../Navbar/Help-the-shelter/HelpTheShelterCP";
import HomePageCP from "../Home-page/HomePageCP";
import NavbarCP from "../Navbar/NavbarCP";
import TakeTheCatCP from "../Navbar/Take-the-cat/TakeTheCatCP";
import VacanciesCP from "../Navbar/Vacancies/VacanciesCP";
import AdminPanel from "../Admin-panel/AdminPanelCP";
import SelectedCatInfoCP from "../selected-cat-info/SelectedCatInfoCP";
import OurFriendsCP from "../Navbar/Our-friends/OurFriendsCP";
import NotFoundPage from "../Note-found-page/NotFoundPage";
import AddCatCP from "../Admin-panel/Add-cat/AddCatCP";
import ViewCatsCP from "../Admin-panel/View-cats/ViewCatsCP";
import RegistrationsForInterview from "../Admin-panel/registrations-for-interview/RegistrationsForInterview";

export default function MeowCP() {
  return (
    <div className="meow_cp">
      <div className="header ">
        <NavbarCP />
      </div>
      <div className="main ">
        <Routes>
          <Route path="/about_us" element={<AboutUsCP />} />
          <Route path="/take_the_cat" element={<TakeTheCatCP />} />
          <Route path="/help_the_shelter" element={<HelpTheShelterCP />} />
          <Route path="/contacts" element={<ContactsCP />} />
          <Route path="/vacancies" element={<VacanciesCP />} />
          <Route path="/" element={<HomePageCP />} />
          <Route path="/:id" element={<SelectedCatInfoCP />} />
          <Route path="/meow-admin" element={<AdminPanel />} />
          <Route path="/our-friends" element={<OurFriendsCP />} />
          <Route path="/meow-admin/add_cat" element={<AddCatCP />} />
          <Route path="/meow-admin/view_cats" element={<ViewCatsCP />} />
          <Route
            path="/meow-admin/registrations_for_interview"
            element={<RegistrationsForInterview />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <div className="footer ">
        <FooterCP />
      </div>
    </div>
  );
}
