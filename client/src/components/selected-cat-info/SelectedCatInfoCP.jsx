import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import { TbArrowBack } from "react-icons/tb";
import { FaWhatsappSquare } from 'react-icons/fa';

import "../selected-cat-info/selectedCatInfo.css";
export default function SelectedCatInfoCP() {
  const navigate = useNavigate();
  const [cats, setCats] = useState([]);
  const [registrationForinterview, setRegistrationForinterview] = useState({
    id: "",
    name: "",
    phone: "",
    date: "",
    time: "",
    cat_name: ""
  });

  useEffect(() => {
    if (cats) {
      fetch("http://localhost:4000/cats")
        .then((response) => response.json())
        .then((json) => setCats(json));
    }
  }, []);

  const { id } = useParams();
  const catInfo = cats.find((cat) => cat.id === id);

  const onRegistrationChange = (e) => {
    setRegistrationForinterview({
      ...registrationForinterview,
      [e.target.name]: e.target.value,
    });
  };

  const sendRegistration = () => {
    const newRegistration = {
      ...registrationForinterview,
      id: new Date().toISOString(),
      cat_name: catInfo.name
    };
    fetch("http://localhost:4000/registrations_for_interview", {
      method: "POST",
      body: JSON.stringify(newRegistration),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
console.log(catInfo.name);

  };

  const onBtnBack = () => {
    navigate(-1);
  };
  return (
    <div className="container ">
      <div className="selected_cat_cp">
        {catInfo && (
          <div className="selected_cat_cp_items">
            <div className="catInfoImg">
              <img src={catInfo.img} alt="" />
            </div>
            <div className="selected_cat_texts">
              <p>Саламульки! Моё имя {catInfo.name}.</p>
              <p>Я {catInfo.gender}.</p>
              <div className="d-flex gap-1">
                {" "}
                Мне
                {catInfo.year === 0 ? (
                  ""
                ) : (
                  <>
                    {catInfo.year <= 4 ? (
                      <p>{catInfo.year} года </p>
                    ) : (
                      <p>{catInfo.year} лет </p>
                    )}{" "}
                  </>
                )}
                {catInfo.month === 0 ? (
                  ""
                ) : (
                  <>
                    {catInfo.month <= 4 ? (
                      <p>{catInfo.month} месяца</p>
                    ) : (
                      <p>{catInfo.month} месяцев</p>
                    )}
                  </>
                )}
              </div>
              <p>Я вакцинирован, стерилизован и в поисках дома! </p>
              <p>{catInfo.info}</p>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Забрать котика
              </button>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Вы хотите забрать {catInfo.name} ?{" "}
                    </h1>
                    <button
                      type="button"
                      className="btn-close close_registration_btn"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                    <div className="modal-body registration_for_interview_form">
                      {/* <form action="" > */}
                        <input
                          placeholder="Ваше имя..."
                          type="text"
                          id="name"
                          required
                          name="name"
                          onChange={(e) => onRegistrationChange(e)}
                        />
                        <label htmlFor="phone"></label>
                        <input
                          placeholder="Ваш номер телефона..."
                          type="tel"
                          required
                          id="phone"
                          name="phone"
                          onChange={(e) => onRegistrationChange(e)}
                        />
                        <label htmlFor="date">
                          Выберите дату и время для собеседивании
                        </label>
                        <input
                          type="date"
                          id="date"
                          min="2023-01-01"
                          required
                          name="date"
                          onChange={(e) => onRegistrationChange(e)}
                        />
                        <input
                          type="time"
                          id="time"
                          min="09:00"
                          max="19:00"
                          required
                          name="time"
                          onChange={(e) => onRegistrationChange(e)}
                        />
                        
                    {/* </form> */}
                    </div>
                    <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Закрыть
                        </button>
                        <input type="button" value="Забрать" 
                        data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                          className="btn btn-primary"
                          onClick={sendRegistration} 
                          />
                      </div>
                </div>
              </div>
            </div>
            <div className="modal fade " id="exampleModalToggle2" aria-hidden="true" tabIndex="-1" aria-labelledby="exampleModalXlLabel" aria-modal="true" role="dialog" >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-4" id="exampleModalXlLabel">Ваша завка принята!</h1>
                    <button type="button" className="btn-close close_registration_btn" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="connectingWhisOurMessanger">
              <div className="ourMessengers">
                <p>Напишите нам</p>
                <div className="ourMessengers_icons">
                <NavLink>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="currentColor"
                    className="bi bi-telegram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
                  </svg>
                </NavLink>
                 
                <NavLink to="https://www.whatsup.com">
                  <FaWhatsappSquare />
                </NavLink>
                </div>
                
              </div>
            </div>
          </div>
        )}
        <div className="backBtn" onClick={onBtnBack}>
          <TbArrowBack className="backBtn-icon" />
          <span>Назад</span>
        </div>
      </div>
    </div>
  );
}
