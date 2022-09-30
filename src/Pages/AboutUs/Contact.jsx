import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="story contact">
      <h3>聯絡資訊</h3>
      <h2>歡迎與我們洽詢</h2>
      <div className="contact-row">
        <div className="contact-card">
          <img src="/Assets/about/contact1.png" alt="" />
          <h4>聯絡信箱</h4>
          <p>classebook@gmail.com</p>
        </div>
        <div className="contact-card">
          <img src="/Assets/about/contact2.png" alt="" />
          <h4>聯絡電話</h4>
          <p>(02)32134324</p>
        </div>
        <div className="contact-card">
          <img src="/Assets/about/contact3.png" alt="" />
          <h4>聯絡地址</h4>
          <p>新北市中和區中豐路888巷66號</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
