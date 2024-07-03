import mainFoto from "./img/main-foto.jpg";
import "./_header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__wrapper-left">
            <img src={mainFoto} alt="" />
          </div>
          <div className="header__wrapper-right">
            <div className="header__subtitle">85% would make this again</div>
            <h1 className="header__title">Mighty Super Cheesecake</h1>
            <div className="header__text">
              Look no further f or a creamy and ultra smooth classic cheesecake
              recipe! no one can deny its simple decadence.
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
