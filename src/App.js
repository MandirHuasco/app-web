import React from "react";
import StoreDatos from "./functions/Store"
import Conection from "./functions/Conection";
import axios from 'axios';

import './App.css';
import {observer} from "mobx-react";
import Login from "./Vistas/Login";


class App extends React.Component{

    render() {

      return(
          <div>
              <Login/>
          </div>
      )
  };
}

export default observer(App);
