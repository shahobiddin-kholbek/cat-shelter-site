import "../Navbar/navbar.css";
import "../../css/medias.css";
import { NavLink } from "react-router-dom";
import MeowLogo from "../../img/logo-meow.png";
import MeowLogoSmScreen from "../../img/logo_meow_sm_screen.png";

export default function NavbarCP() {
  return (
    <div className="">
      <div className="container topOfSite">
        <div id="ribbon">
          <div className="base">
            <p>Приют для кошек</p>
          </div>
          <div className="left_corner"></div>
          <div className="right_corner"></div>
        </div>
        <div>
          <NavLink to="/" title="Main page" className="navbar-brand">
            <img src={MeowLogo} height="200" width="225" alt="logo" />
          </NavLink>
        </div>
        <div className="favoritesAndGeo">
          <div className="favorites gap-1 ">
            <NavLink
              to="/help_the_shelter"
              className="text-decoration-none d-flex gap-2"
              title="Избранные"
            >
              <p>Помочь котику</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                fill="red"
                className="bi bi-arrow-through-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5 1.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z"
                />
              </svg>
            </NavLink>
          </div>
          <div className="d-flex justify-content-end">
            <NavLink
              to="/contacts"
              className="text-decoration-none  d-flex gap-2"
            >
              <p>Душанбе</p>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="blue"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md bg-body-tertiary">
        <div className="container navbarMain">
          <NavLink to="/" className="nav-link ">
            <img
              src={MeowLogoSmScreen}
              className="logo_meow_sm_screen"
              alt="meow-logo"
            />
          </NavLink>
          <p className="topOfSiteText2">Приют для кошек</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <img
                src={MeowLogoSmScreen}
                className=""
                width="70"
                height="60"
                alt="meow-logo"
              />

              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="navbar-nav  flex-grow-1 pe-3">
                <NavLink to="/" className="nav-link hover-underline">
                  ГЛАВНАЯ
                </NavLink>
                <NavLink to="/about_us" className="nav-link hover-underline">
                  О НАС
                </NavLink>
                <NavLink
                  to="/take_the_cat"
                  className="nav-link hover-underline"
                >
                  ВЗЯТЬ КОТИКА
                </NavLink>
                <NavLink
                  to="/help_the_shelter"
                  className="nav-link hover-underline"
                >
                  ПОМОЧЬ ПРИЮТУ
                </NavLink>
                <NavLink to="/our-friends" className="nav-link hover-underline">
                  ДРУЗЬЯ
                </NavLink>
                <NavLink to="/contacts" className="nav-link hover-underline">
                  КОНТАКТЫ
                </NavLink>
                <NavLink to="/vacancies" className="nav-link hover-underline">
                  ВАКАНСИИ
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
