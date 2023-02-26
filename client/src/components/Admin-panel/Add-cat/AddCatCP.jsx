import { useState, useEffect } from "react";
import "./addCat.css";
import "../../../css/medias.css"
import { TiEdit } from "react-icons/ti";
import { TiDeleteOutline } from "react-icons/ti";

export default function AddCatCP({ addCat }) {
  const [newCat, setNewCats] = useState({
    name: "",
    img: "",
    info: "",
    gender: "",
    year: 0,
    month: 0,
  });

  const onAddCatChange = (e) => {
    setNewCats({
      ...newCat,
      [e.target.name]: e.target.value,
    });
    localStorage.setItem("addCatView", JSON.stringify(newCat));
  };

  useEffect(() => {
    if (newCat) {
      localStorage.setItem("addCatView", JSON.stringify(newCat));
    }
  }, [newCat]);

  const onAddCatChangeGender = (e) => {
    setNewCats({
      ...newCat,
      gender: e.target.value,
    });
  };

  const onAddCatClick = () => {
    // e.preventDefault();
    if (
      newCat.name === "" ||
      newCat.age === "" ||
      newCat.img === "" ||
      newCat.info === "" ||
      newCat.gender === ""
    ) {
      alert("Zapolnite pole!");
    } else {
      const cat = {
        ...newCat,
        id: new Date().toISOString(),
      };
      fetch("http://localhost:4000/add-cats", {
        method: "POST",
        body: JSON.stringify(cat),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
      addCat(cat);
      setNewCats("");
    }
  };

  const addCatView = JSON.parse(localStorage.getItem("addCatView"))? JSON.parse(localStorage.getItem("addCatView")) : {};

  return (
    <div className="container addCatCP">
      <form action="" id="cat-form" className="">
        <input
          placeholder="Имя"
          name="name"
          type="text"
          onChange={(e) => onAddCatChange(e)}
        />
        <input
          placeholder="img"
          name="img"
          type="text"
          onChange={(e) => onAddCatChange(e)}
        />
        <input
          placeholder="год/лет"
          name="year"
          type="number"
          onChange={(e) => onAddCatChange(e)}
        />
        <input
          placeholder="месяц"
          name="month"
          type="number"
          onChange={(e) => onAddCatChange(e)}
        />
        <label htmlFor="gender" className="check_gender">
          Пол:
          <select value={newCat.gender} onChange={onAddCatChangeGender}>
            <option value=""></option>
            <option value="Кот">Кот</option>
            <option value="Кошка">Кошка</option>
          </select>
        </label>
        <textarea
          placeholder="Информация"
          name="info"
          onChange={(e) => onAddCatChange(e)}
        />
        <button className="btn " onClick={onAddCatClick}>
          Добавить
        </button>
      </form>
      <div className="cat-card addCatLive addCatView h-100">
        <div className="w-85 rounded-circle border border-white border-5 overflow-hidden ratio ratio-1x1">
           <img
            src={addCatView.img}
            className="fit-cover img-fluid"
            alt={addCatView.name}
          />
        </div>
        <div className="cat-name-age-info">
          <div className="cat-name">{addCatView.name}</div>
          <div className="cat-year d-flex gap-2">
            {addCatView.year === 0 ? (
              ""
            ) : (
              <>
                {addCatView.year <= 4 ? (
                  <p>{addCatView.year} года</p>
                ) : (
                  <p>{addCatView.year} лет</p>
                )}{" "}
              </>
            )}
            {addCatView.month === 0 ? (
              ""
            ) : (
              <>
                {addCatView.month <= 4 ? (
                  <p>{addCatView.month} месяца</p>
                ) : (
                  <p>{addCatView.month} месяцев</p>
                )}
              </>
            )}
          </div>
        </div>
        <div className="cat-description">{addCatView.gender}</div>
        <div className="cat-description">{addCatView.info}</div>
        <div className="actions">
          <div className="cat-edit-delete-icons">
            <div className="icon">
              <TiEdit className="action-icon"/>
            </div>
            <div className="icon">
              <TiDeleteOutline className="action-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
