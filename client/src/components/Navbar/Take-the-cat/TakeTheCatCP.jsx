import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Take-the-cat/takeTheCat.css"
import "../../Admin-panel/View-cats/catsCards.css"
import "../../../css/medias.css"

export default function TakeTheCatCP() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setfilteredCats] = useState([]);
  const [searchCats, setSearchCats] = useState("");

  useEffect(() => {
    if (cats) {
      fetch("http://localhost:4000/cats")
        .then((response) => response.json())
        .then(function (json) {
          return setCats(json);
        });
    }
  }, []);

  useEffect(() => {
    setfilteredCats(cats);
  }, [cats]);

  useEffect(() => {
    if (searchCats.length > 0) {
      setfilteredCats(
        cats.filter((cat) =>
          cat.name.toLowerCase().includes(searchCats.toLowerCase())
        )
      );
    } else {
      setfilteredCats(cats);
    }
  }, [searchCats]);

  const maleCatsBtn = () => {
    const maleCats = cats.filter((cat) => cat.gender === "Кот");
    setfilteredCats(maleCats);
    // console.log(maleCats);
  };

  const allCatsBtn = () => {
    const allCats = cats.filter((cat) => cat.id !== "");
    setfilteredCats(allCats);
  };

  const femaleCatsBtn = () => {
    const femaleCats = cats.filter((cat) => cat.gender === "Кошка");
    setfilteredCats(femaleCats);
  };

  const kittensBtn = () => {
    const kittens = cats.filter((cat) => cat.year === 0 && cat.month <= 5);
    setfilteredCats(kittens);
    // console.log(kittens);
  }; 

  // const filterCats = (searchText, allCats) => {
  //   if (!searchText) {
  //     // return allCats;
  //     console.log(allCats);
  //   }
  //   return allCats.filter(({ name }) =>
  //     name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  // };

  // useEffect(() => {
  //   if (searchCats) {
  //     const Debounce = setTimeout(() => {
  //       const filterCat = filterCats(searchCats, filteredCats);
  //       setfilteredCats(filterCat);
  //     }, 300);
  //     return () => clearTimeout(Debounce);
  //   }
  // }, [searchCats]);

  return (
    <div className="container takeTheCatCP">
      <div>
        <div className="takeTheCatCPItems">
          <ul
            className="nav nav-tabs "
            id="myTab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                onClick={allCatsBtn}
              >
                Все
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile-tab-pane"
                type="button"
                role="tab"
                aria-controls="profile-tab-pane"
                aria-selected="false"
                onClick={maleCatsBtn}
              >
                Коты
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
                onClick={femaleCatsBtn}
              >
                Кошки
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
                onClick={kittensBtn}
              >
                Котята
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="form search_form">
        <form className="">
          <input
            type="search"
            placeholder="Найти котика..."
            className="search_input"
            onChange={(e) => setSearchCats(e.target.value)}
          />
        </form>
      </div>

      <div className="row">
        {filteredCats.reverse().map((cat, index) => {
          return (
            <div key={index} className="catsCards col-md-4 col-sm-6 mb-5">
              <div className="cat-card h-100 ">
                
                <Link to={`/${cat.id}`}>
                      <div className="w-85 rounded-circle border border-white border-5 overflow-hidden ratio ratio-1x1">
                        <img
                          src={cat.img}
                          className="fit-cover img-fluid"
                          alt={cat.name}
                        />
                      </div>
                      <div className="cat-name-age-info">
                        <div className="cat-name">{cat.name}</div>
                        <div className="cat-year d-flex gap-2">
                          {cat.year === 0 ? (
                            ""
                          ) : (
                            <>
                              {cat.year <= 4 ? (
                                <p>{cat.year} года</p>
                              ) : (
                                <p>{cat.year} лет</p>
                              )}{" "}
                            </>
                          )}
                          {cat.month === 0 ? (
                            ""
                          ) : (
                            <>
                              {cat.month <= 4 ? (
                                <p>{cat.month} месяца</p>
                              ) : (
                                <p>{cat.month} месяцев</p>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


