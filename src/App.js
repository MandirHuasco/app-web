import React, {useState} from "react";

import img001 from './img/mini-logo-01.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import './App.css';

const eye = <FontAwesomeIcon icon={faEye} />;
const exclamation = <FontAwesomeIcon icon={faFileExcel} />;

function App() {

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(!passwordShown);
    };

  return (
      <div className="App">
        <div className="background-image">
          <div className="sub-background image-01">
            <div className="sub-background image-02"></div>
          </div>
        </div>

        <div className="cont-form">
          <div className="mini-logo-01">
            <img src={img001} className="img-mini-logo-01"/>
          </div>
          <div className="cont-form-sub">
              <form action="/Principal">
                  <div className="input-form">
                      <input type="email" className="email-form" placeholder="Correo" required/>
                  </div>
                  <div className="input-form">
                      <input type={passwordShown ? "text" : "password"} className="pass-form" placeholder="Password" required/>
                      <i className="eye" onClick={togglePasswordVisiblity}>{eye}</i>
                  </div>
                  <div className="input-form check-align">
                      <label className="label-check">Recordarme</label>
                      <input type="checkbox" className="check-form"/>
                  </div>
                  <div className="input-form">
                      <input type="submit" className="submit-form" value="LOGIN"/>
                  </div>
              </form>
              {/**
               Validar usuario,
               si el usuario es
               incorrecto mostrar
               el sgte error:
               **/}
              <div className="input-form">
                  <div className="error-report">
                      <i className="exclamation">{exclamation}</i>
                      Usuario incorrecto
                  </div>
              </div>
          </div>
        </div>
      </div>
  );
}

export default App;
