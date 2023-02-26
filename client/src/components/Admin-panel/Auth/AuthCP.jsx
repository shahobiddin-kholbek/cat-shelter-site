import { useEffect } from "react";
import { useState } from "react";
import "../Auth/auth.css";

export default function AuthCP() {
  const [admin, setAdmin] = useState();
  const [userAuth, setUserAuth] = useState({
    login: "",
    password: "", 
  });

  const [isAdmin, setIsAdmin] = useState(false);

  const onAdminChange = (e) => {
    setUserAuth({
      ...userAuth,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch("http://localhost:4000/admin_auth", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => setAdmin(json));
  }, []);

  const adminAuthBtn = (e) => {
    e.preventDefault();
    if (
      userAuth.login === admin[0].login &&
      userAuth.password === admin[0].password
    ) {
      setIsAdmin(false);
      localStorage.setItem("admin", JSON.stringify(admin));
      window.location.reload()
    } else {
      setIsAdmin(true);
    }
  };

  return (
    <div className=" auth_cp">
      <form className="auth_form">
        <h1>Вход</h1>
          <input
            placeholder="Логин"
            required
            type="text"
            name="login"
            onChange={(e) => onAdminChange(e)}
          />
          <input
            placeholder="Пароль"
            type="password"
            required
            name="password"
            onChange={(e) => onAdminChange(e)}
          />
          <button onClick={(e) => adminAuthBtn(e)}>Войти</button>
          
        {isAdmin ? <p className="wrongLoginOrPassword">Неправильный логин или пароль!</p> : null}
      </form>
    </div>
  );
}
