import React from "react";
import {observer}	from 'mobx-react'
import StoreDatos from "../functions/Store";

import '../App.css';
import Conection from "../functions/Conection";
import Page2 from "./Principal";



class Login extends  React.Component {

    componentDidMount(){

        StoreDatos.c_a('c_d', StoreDatos.a_m['Id_user'])
        StoreDatos.c_a('c_e', StoreDatos.a_m['Id_business'])
        StoreDatos.c_a('c_f', StoreDatos.a_n['Id_attender'])

        Conection.a_n(StoreDatos.a_c[0].g_a, 'pr').then((a) => {
            console.log(a)

            Conection.a_q(0, 1, 0)

            //console.log(StoreDatos.a_m['Id_user'] + " al AQUI")

        }).catch((e) => {
            let COnline = localStorage.getItem('COnline')
            //console.log(COnline)

            if (COnline === null){
                StoreDatos.c_a('g_d', false)

            } else {
                StoreDatos.c_a('g_d', true)
                StoreDatos.b_b(JSON.parse(COnline).data)
                StoreDatos.increment(1)
            }
            console.log(e, 'Connection Error')
        })

        StoreDatos.a_c[0].g_b.onclose = (e) => {
            Conection.a_o(e, 'pr')
            StoreDatos.c_a('g_d', false)
        }
    }

    render (){

        return(
            <>
                <Page2/>
            </>)
    }
}
export default observer(Login)
