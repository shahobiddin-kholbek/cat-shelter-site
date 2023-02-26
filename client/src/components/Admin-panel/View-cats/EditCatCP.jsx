import { TiEdit } from "react-icons/ti";
import React, { useState } from "react";
import "../View-cats/view_cats.css"

export default function EditCatCP({ cat, className }) {
  const [catInfoView, setCatInfoView] = useState(false);
  const [newName, setNewName] = useState(cat.name);
  const [newImg, setNewImg] = useState(cat.img);
  const [newYear, setNewYear] = useState(cat.year);
  const [newMonth, setNewMonth] = useState(cat.month);
  const [newGender, setNewGender] = useState(cat.gender);
  const [newInfo, setNewInfo] = useState(cat.info);

  const updateCatInfo = (id, newName, newImg, newYear, newMonth, newGender, newInfo) => {
    fetch(`http://localhost:4000/cats/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name: newName, img: newImg, year: newYear, month: newMonth, gender: newGender, info: newInfo }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((cat) => console.log(cat));

   window.location.reload()
  };

  const handleToggle = () => {
    setCatInfoView(!catInfoView);
  };
  return (
    <div className="edit_cat_cp">
        <TiEdit className={className} onClick={handleToggle} />
        <div id="edit_cat_cp_items" className={catInfoView ? "d-block": "d-none"}>
        <input
          className=""
          onChange={(e) => setNewName(e.target.value)}
          defaultValue={cat.name}
          type="text"
        />
        <input
          className=""
          onChange={(e) => setNewImg(e.target.value)}
          defaultValue={cat.img}
          type="text"
        />
        <input
          className=""
          onChange={(e) => setNewYear(e.target.value)}
          defaultValue={cat.year}
          type="number"
        />
        <input
          className=""
          onChange={(e) => setNewMonth(e.target.value)}
          defaultValue={cat.month}
          type="number"
        />
        <input
          className=""
          onChange={(e) => setNewGender(e.target.value)}
          defaultValue={cat.gender}
          type="text"
        />
        <input
          className=""
          onChange={(e) => setNewInfo(e.target.value)}
          defaultValue={cat.info}
          type="text"
        />
        <div className="catCardsUpdateCancel">
          <button
            className="" onClick={() => updateCatInfo(cat.id, newName, newImg, newYear, newMonth, newGender, newInfo)}
          >
            Update
          </button>
          <button  onClick={handleToggle}>
            Cancel
          </button>
        </div>
        
      </div>
    </div>
  );
}
