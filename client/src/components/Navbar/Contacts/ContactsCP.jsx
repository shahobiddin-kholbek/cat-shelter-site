import "../Contacts/contacts.css";
import "../../../css/medias.css"

export default function ContactsCP() {
  return (
    <div className="container our_contacts_cp">
      <div className="mapAndContacts">
        <div className="mapOfOurLocation">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.0396312465377!2d68.78855671483491!3d38.57893517325871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b5d1dd503a22cf%3A0xf29715983530f453!2silmhona%20co-learning%20space!5e0!3m2!1sru!2s!4v1676469849936!5m2!1sru!2s"
            width="350"
            height="250"
            allowFullScreen=""
            loading="lazy"
            title="Наш адрес"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="our_contacts">
          <div className="whatsApp line-height-contacts">
            <p>WhatsApp</p>
            <a href="ww">(+992) 938 88 88 88 </a>
          </div>
          <div className="email line-height-contacts">
            <p>Email</p>
            <a href="https://gmail.com">meowtj@gmail.com</a>
          </div>
          <div className="location line-height-contacts">
            <p>г. Душанбе</p>
          </div>
        </div>
      </div>
    </div>
  );
}
