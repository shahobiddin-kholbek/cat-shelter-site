import AddCatCP from "./Add-cat/AddCatCP";
import { useState, useEffect } from "react";
import AuthCP from "./Auth/AuthCP";
import ViewCatsCP from "./View-cats/ViewCatsCP";
import { Routes, Route } from "react-router-dom";
import RegistrationsForInterview from "./registrations-for-interview/RegistrationsForInterview";

export default function AdminPanel() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    if (cats) {
      fetch("http://localhost:4000/cats")
        .then((response) => response.json())
        .then((json) => setCats(json));
    }
  }, []);

  const addCat = (cat) => {
    const newCats = [...cats, cat];
    setCats(newCats);
    localStorage.setItem("cats", JSON.stringify(newCats));
  };

  const dataFromLC = JSON.parse(localStorage.getItem("admin"))
    ? JSON.parse(localStorage.getItem("admin"))
    : [];

  console.log(dataFromLC);

  return (
    <div className="container">
      {dataFromLC.length === 0 ? (
        <AuthCP />
      ) : (
        <div>
          <div className="container takeTheCatCPItems">
            <ul
              className="nav nav-tabs justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link "
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  Добавление котика
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  Смотреть котиков
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  Заявки
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade "
                id="home-tab-pane"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <AddCatCP />
              </div>
              <div
                className="tab-pane fade show active"
                id="profile-tab-pane"
                role="tabpanel"
                aria-labelledby="profile-tab"
                tabIndex="0"
              >
                <ViewCatsCP />
              </div>
              <div
                className="tab-pane fade"
                id="contact-tab-pane"
                role="tabpanel"
                aria-labelledby="contact-tab"
                tabIndex="0"
              >
                <RegistrationsForInterview />
              </div>
            </div>
          </div>
          <Routes>
            <Route element={<AddCatCP addCat={addCat} />} />
            <Route element={<ViewCatsCP setCats={setCats} cats={cats} />} />
          </Routes>
        </div>
      )}
    </div>
  );
}
