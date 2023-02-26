import "../Help-the-shelter/help_the_shelter.css";
import { MdPayment } from "react-icons/md";

export default function HelpTheShelterCP() {

  return (
    <div className="container">
      <div className="helpTheShelterItems">
        <div className="">
          <h3>Корма</h3>
          <p>
            Royal Canin Early Renal для взрослых кошек при ранней стадии
            почечной недостаточности
          </p>
          <p>
            Royal Canin Dental для кошек "Гигиена полости рта, чистка зубов"
          </p>
          <p>Royal Canin Gastro Intestinal для кошек "Лечение ЖКТ"</p>
          <p>Royal Canin Renal для кошек "Лечение заболеваний почек"</p>
          <p>Royal Canin Urinary S/O для кошек "Лечение и профилактика МКБ"</p>
          <p>Royal Canin Hepatic для кошек "Лечение печени"</p>
          <p>Royal Canin Mobility для кошек "Лечение суставов"</p>
          <p>Royal Canin Fibre Response для кошек при запоре</p>
          <p>
            Royal Canin Skin and Coat для кошек при дерматозах и выпадении
            шерсти
          </p>
        </div>

        <div className="">
          <p>Purina Pro Plan HA для кошек при лечении пищевой аллергии</p>
          <p>Purina Pro Plan DM для кошек при диабете</p>
          <p>Purina Pro Plan OM для кошек при ожирении</p>
        </div>
        <div className="">
          <p>
            Hill's Prescription Diet c/d Multicare Urinary Care сухой
            диетический корм для кошек при профилактике цистита и мочекаменной
            болезни (МКБ) с рыбой
          </p>
          <p>
            Hill's Prescription Diet i/d Digestive Care сухой диетический корм
            для кошек при расстройствах пищеварения (ЖКТ)
          </p>
          <p>
            Hill's Prescription Diet z/d Food Sensitivities сухой диетический
            корм для кошек при пищевой аллергии гипоаллергенный
          </p>
        </div>
        <div className="">
          <h3>Вещи</h3>
          <p>Ветошь</p>
          <p>Лежанки</p>
          <p>Когтеточки</p>
        </div>
        <div className="">
          <h3>Лекарства</h3>
          <p>Адвокат</p>
          <p>Стронгхолд</p>
          <p>Мельбимакс</p>
          <p>Барс</p>
          <p>Лосьон для ушей</p>
        </div>
        <div className="">
          <h3>Пиар</h3>
          <p>Размещение в социальных сетях</p>
          <p>Копирайтер пиарных текстов</p>
        </div>
        <div className="">
          <h3>Стать частью команды</h3>
          <p>
            Стать волонтером очень просто: отправьте письмо на почту
            meowtj@gmail.com с темой письма «Хочу стать волонтером».
          </p>
          <p>
            В письме обязательно укажите своё ФИО, возраст, телефон, немного о
            себе и ваши предпочтения по роду деятельности.
          </p>
          <p>Присоединяйтесь к нашей команде!</p>
        </div>
        <div className="">
          <h3>Реквезиты для помощи</h3>
          <p>Перевести фин. помощь на любую сумму c текстом «Помощь приюту»</p>
        </div>
        <div className="">
          <MdPayment />
          <p>ALIF 4276-3800-8768-0471</p>

          {/* <input type="text" value="Hello World" id="myInput" />
          <button onClick={myFunction()}>Copy text</button> */}
        </div>
      </div>
</div>

          

  );
}
