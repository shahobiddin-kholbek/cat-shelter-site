import "../Vacancies/vacancy.css";
import "../../../css/medias.css"

export default function VacanciesCP() {
  return (
    <div className="container vacancies_cp">
      <div className="text-center  vacancy-head-text">
        <h3 className="">
          Любишь чистоту, порядок, не боишься тяжелой работы, тогда Приют «Meow»
          ждёт тебя!{" "}
        </h3>
      </div>
      <div className="vacanciesImg">
        <img
          src="https://koshka.top/uploads/posts/2021-12/thumbs/1639040321_11-koshka-top-p-koshka-obnimaet-muzhchinu-11.jpg"
          alt="cat"
        />
      </div>
      <div className="vacanciesMainTexts">
        <h5>
          Наш дружный коллектив в поисках сотрудницы на постоянную работу, в
          обязанности которой будет входить:
        </h5>
        <p>
          Ежедневная влажная уборка клеток. Ежедневная чистка лежанок. Ежедневная
          кормление кошек и котят. Поддержание чистоты комнаты отдыха Влажная
          уборка полов Уход за животными
        </p>
        <h5>Наши требования:</h5>
        <p>
          Ответственность, добропорядочность, добросовестное отношение к работе.
          Понимание, что животные - это живые существа, требующие уважения
        </p>
        <p>
          {" "}
          График: 2/2 с 9.00 до 19.00 з/п по итогам собеседования По всем
          вопросам звоните с 9-00 до 20-00 по телефонам
        </p>
        <div className="">
          <h5>932-34-43-21 Азиз</h5>
          <h5>932-44-47-23 Амир</h5>
        </div>
      </div>
    </div>
  );
}
