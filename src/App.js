import React from "react";

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
