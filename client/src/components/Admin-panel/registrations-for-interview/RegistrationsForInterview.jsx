import { useState, useEffect } from "react";
import "../registrations-for-interview/registrations-for-interview.css";
import { AiFillEye } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";

export default function RegistrationsForInterview() {
  const [registrationsForInterview, setRegistrationsForInterview] = useState(
    []
  );

  useEffect(() => {
    if (registrationsForInterview) {
      fetch("http://localhost:4000/registrations_for_interview")
        .then((response) => response.json())
        .then((json) => setRegistrationsForInterview(json));
    }
  }, []); 
  const dltRegistrationsBtn = (id) => {
    setRegistrationsForInterview(
      registrationsForInterview.filter((registrationsForInterview) => {
        return registrationsForInterview.id !== id;
      })
    );

    fetch(`http://localhost:4000/registrations_for_interview/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const viewRegistrationsBtn = (registrations) => {
    setRegistrationsForInterview(
      registrationsForInterview.map((reg) => {
        if (reg.id === registrations.id) {
          return { ...reg, isVisible: !reg.isVisible };
        }
        return reg;
      })
    );
  };

  console.log(registrationsForInterview);

  return (
    <div className="container">
      <p className="registrations_for_interview_head_text">
        У вас {registrationsForInterview.length} новых заявок!
      </p>

      <div className="registrations_for_interview">
        {registrationsForInterview.length > 0 ? (
          registrationsForInterview.map((registrations, i) => {
            return (
              <div
                className={
                  registrations.isVisible
                    ? "registrations_for_interview_cards blur"
                    : "registrations_for_interview_cards"
                }
                key={registrations.id}
              >
                <div className="card">
                  <div className="card-header">
                    <p>Заявка №{i + 1}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Заявщик: {registrations.name}
                    </li>
                    <li className="list-group-item">
                      Дата/Время: {registrations.date}/{registrations.time}
                    </li>
                    <li className="list-group-item">
                      Телефон: {registrations.phone}
                    </li>
                    <li className="list-group-item">
                      Выбранный котик: {registrations.cat_name}
                    </li>
                  </ul>
                  <div className="SeeDeleteIcons">
                    <AiFillEye
                      onClick={() => viewRegistrationsBtn(registrations)}
                    />
                    <TiDeleteOutline
                      onClick={() => dltRegistrationsBtn(registrations.id)}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h2>Нет новых заявок!</h2>
        )}
      </div>
    </div>
  );
}
