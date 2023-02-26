import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "../Home-page/carousel.css";
import "../Home-page/home-page.css";
import "../../css/medias.css"
import "../Admin-panel/View-cats/catsCards.css"
import RoadToHome from "../../img/road-to-home.png"
import CatBanner_2 from "../../img/carousel2.jpg"

export default function HomePageCP() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    if (cats) {
      fetch("http://localhost:4000/cats")
        .then((response) => response.json())
        .then((json) => setCats(json));
    }
  }, []);
  const seeAllCatsBtn = () => {
    window.location.replace()
  }
  return (
    <div className="home_page_cp">
      <div
        id="carouselExampleCaptions"
        className="container carousel slide mb-4 mt-1"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img 
              src="https://www.freewebheaders.com/wp-content/gallery/cats/cute-sleepy-kitten-website-header.jpg"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Подарите котику дом</h1>
              <NavLink to="/take_the_cat">
                <button className="btn btn-orange">Забрать котика</button>
              </NavLink>
            </div>
          </div>
          <div className="carousel-item">
            <img 
              src={CatBanner_2}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
            <h1>Помочь нам</h1>
              <NavLink to="/help_the_shelter">
                <button className="btn btn-orange">Помочь приюту</button>
              </NavLink>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container greetings">
          <div className="greetingsItems">
            <h4>Приветствуем Вас на сайте приюта «Meow»</h4>
            <p>Сайт создан силами волонтеров для того, чтобы помочь всем желающим <br />
выбрать и взять кота или кошку из приюта домой. <br />
            Наша ЦЕЛЬ — спасти жизнь и пристроить максимальное количество <br />
бездомных котиков в самые добрые руки!</p>
          </div>
      </div>
      <div className="container">
        <p className="recent_add_cats">Недавно добавленные...</p>
        {cats.length > 0 ? (
          <div className="row catsCardsMain">
            {cats.slice(cats.length-6, cats.length).reverse().map((cat) => {
              return (
                
                <div key={cat.id} className="catsCards col-md-4 col-sm-6 mb-3">
                    <div className="cat-card h-100">
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
        ) : (
          <h2>No cats</h2>
        )}
        <NavLink to="/take_the_cat" className="see_all_cats" onClick={seeAllCatsBtn}>Смотреть все...</NavLink>
      </div>
      <div className="roadToHome ">
        <div className="roadToHomeHeadText">
          <h4>Путь к домашней жизни</h4>
        </div>
        <div className="roadToHomeImg">
           <img src={RoadToHome} alt="" />
           
        </div>
        <div className="roadToHomeTextVariant ">
            <ol type="I" className="">
              <li>Спасение</li>
              <li>Вакцинация</li>
              <li>Стериализация</li>
              <li>Поиск дома</li> 
            </ol>
           </div>
      </div>
    </div>
  );
}

