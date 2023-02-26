import { useState, useEffect } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import "../View-cats/view_cats.css"
import "../View-cats/catsCards.css";
import "../../../css/medias.css"
import EditCatCP from "./EditCatCP";

export default function ViewCatsCP() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    if (cats) {
      fetch("http://localhost:4000/cats")
        .then((response) => response.json())
        .then((json) => setCats(json));
    }
  }, []);

  const onCatDelete = (id) => {
    setCats(
      cats.filter((cat) => {
        return cat.id !== id;
      })
    );

    fetch(`http://localhost:4000/cats/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <div>
        {cats.length > 0 ? (
          <div className="row">
            {cats
              .map((cat) => {
                return (
                  <div key={cat.id} className="catsCards col-12 col-md-4  col-sm-6  mb-3">
                    <div className="cat-card h-100">
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
                      <div className="cat-description">{cat.gender}</div>
                      <div className="cat-description">{cat.info}</div>
                      <div className="actions">
                        <div className="cat-edit-delete-icons">
                          <div className="icon">
                            <EditCatCP cat={cat} className="actions action-icon" />
                          </div>
                          <div className="icon">
                            <TiDeleteOutline
                              className="cat-delete action-icon"
                              onClick={() => onCatDelete(cat.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                );
              })
              .reverse()}
          </div>
        ) : (
          <h2>No cats</h2>
        )}
      </div>
    </div>
  );
}
