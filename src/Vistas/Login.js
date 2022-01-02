import React, {useEffect} from "react";
import {observer}	from 'mobx-react'
import StoreDatos from "../functions/Store";

import img001 from '../img/mini-logo-01.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import '../App.css';
import Conection from "../functions/Conection";
import Page2 from "./Principal";

const eye = <FontAwesomeIcon icon={faEye} />;
const exclamation = <FontAwesomeIcon icon={faFileExcel} />;

class Login extends  React.Component {

    componentDidMount(){
        StoreDatos.c_a('c_a', this.state.user)
        StoreDatos.c_a('c_b', this.state.pass)

        Conection.a_n(StoreDatos.a_c[0].g_a, 'pr').then((a) => {
            console.log(a)

            Conection.a_q(1, 0, 0)

        }).catch((e) => {
            let COnline = localStorage.getItem('COnline')
            //console.log(COnline)

            if (COnline === null){
                StoreDatos.c_a('g_d', false)

            } else {
                StoreDatos.c_a('g_d', true)
                StoreDatos.b_b(JSON.parse(COnline).data)
                StoreDatos.increment(1)

                StoreDatos.c_a('c_a', this.state.user)
                StoreDatos.c_a('c_b', this.state.pass)
            }
            console.log(e, 'Connection Error')
        })

        StoreDatos.a_c[0].g_b.onclose = (e) => {
            Conection.a_o(e, 'pr')
            StoreDatos.c_a('g_d', false)
        }


        Conection.a_n(StoreDatos.a_c[0].g_m, 'lo').then((b) => {
            console.log(b)

            //Eventscolas.a_d(window.localStorage.token)
        }).catch((e) => {
            console.log(e, 'Connection Error')
        })
        StoreDatos.a_c[0].g_n.onclose = (e) => {
            Conection.a_o(e, 'lo')
            StoreDatos.c_a('g_p', false)
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            passwordShown: false,
            user: '',
            pass: '',
            mensajeUser: '',
            mensajePass: '',
            invalidUser: false,
            invalidPass: false,
            Login: false,
        }
        this.onChange = this.onChange.bind(this);
        this.Validar = this.Validar.bind(this);
    }

    onChange(e){
        let name = e.target.name;
        let value = e.target.value;

        this.setState({
            [name]: value,
        });
        console.log(this.state);
    }

    Validar(e){
        e.preventDefault();

        if(this.state.user === ''){
            this.setState({
                invalidUser: true,
                mensajeUser: 'Ingrese el usuario',
            });
        }else{
            this.setState({
                invalidUser: false,
                mensajeUser: '',
            });
        }
        if(this.state.pass === ''){
            this.setState({
                invalidPass: true,
                mensajePass: 'Ingrese la contraseña',
            });
        }else{
            this.setState({
                invalidPass: false,
                mensajePass: '',
            });
        }

        if(!this.state.invalidUser && !this.state.invalidPass){
            this.setState({
                Login: true,
            });
        }else{
            this.setState({
                Login: false,
            });
        }

        this.componentDidMount()
        //console.log(StoreDatos.a_z[0].g_o);
    }

    render (){

        return(
            <>
            {StoreDatos.a_z[0].g_o === false &&
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
                        <form onSubmit={this.Validar}>
                            <div className="input-form">
                                <input type="text" name="user" value={this.state.user} onChange={this.onChange} className="email-form" placeholder="Usuario"/>
                            </div>
                            {this.state.invalidUser === true &&
                            <div className="input-form">
                                <div className="error-report">
                                    <i className="exclamation">{exclamation}</i>
                                    {this.state.mensajeUser}
                                </div>
                            </div>
                            }
                            <div className="input-form">
                                <input type={this.state.passwordShown ? "text" : "password"} name="pass" value={this.state.pass} onChange={this.onChange} className="pass-form" placeholder="Password"/>
                                <i className="eye" onClick={() => this.setState({passwordShown: !this.state.passwordShown})}>{eye}</i>
                            </div>
                            {this.state.invalidPass === true &&
                            <div className="input-form">
                                <div className="error-report">
                                    <i className="exclamation">{exclamation}</i>
                                    {this.state.mensajePass}
                                </div>
                            </div>
                            }
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
                        {
                            this.state.Login === true &&
                                <div>
                                    {
                                        this.state.user !== '' &&
                                        <div>
                                            {
                                                this.state.pass !== '' &&
                                                <div>
                                                    {StoreDatos.a_z[0].g_o === false &&
                                                    <div className="input-form">
                                                        <div className="error-report">
                                                            <i className="exclamation">{exclamation}</i>
                                                            Usuario no valido
                                                        </div>
                                                    </div>
                                                    }
                                                </div>
                                            }
                                        </div>
                                    }
                                </div>
                        }
                    </div>
                </div>
            </div>
            }
            {StoreDatos.a_z[0].g_o === true &&
                <Page2/>
            }
        </>)
    }
}
export default observer(Login)
