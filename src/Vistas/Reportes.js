import React, {useState, useEffect} from "react";
import axios from "axios";
import StoreDatos from "../functions/Store";

import 'bootstrap/dist/css/bootstrap.min.css'
import {observer} from "mobx-react";

function Reportes(){

    const id = localStorage.getItem('IdFecha');
    const idData = localStorage.getItem('IdData');

    const [infoFechas, setInfoFechas]= useState([]);
    const [dataFechas, setDataFechas]= useState([]);

    const FechaGetId = async() => {

        await axios.get("http://apita.traker.ga/monitoreo/get_info_data.php?database=" + idData + "&id_caja=" + id)
            .then(response => {
                setInfoFechas(response.data.info);
                setDataFechas(response.data);
            }).catch(error=>{
                console.log(error);
            })
    }

    let estado = "";

    if(parseInt(infoFechas.state) === 1){
        estado = "Abierto";
    }else{
        estado = "Cerrado";
    }

    let fechCierre = "";

    if(infoFechas.feh_close === null){
        fechCierre = "---";
    }else{
        fechCierre = infoFechas.feh_close;
    }

    let suma = 0;

    dataFechas.data && dataFechas.data.map((data) =>(
       suma = parseInt(data.total) + suma
    ));

    let idCont = 0;

    useEffect(()=>{
        FechaGetId();
    },[])

    return (<>
        <div className="App App-prin">
            <div className="background-image background-image-prin">
            </div>

            <div className="nav-reporte">
                <ul className="ul-reporte">
                    <li className="li-reporte">
                        <a className="a-reporte">Web</a>
                    </li>
                    <li className="li-reporte">
                        <a className="a-reporte">Descargar PDF</a>
                    </li>
                </ul>
            </div>

            <div className="cont-sub-prin">
                <div className="prin-total prin-total-report-head">
                    <div>
                        <div className="box-prin">
                            <div className="reporte-title">{infoFechas.name_company}</div>
                            <div className="reporte-title-sub">{infoFechas.number_company}</div>

                            <div className="reporte-body">
                                <div className="reporte-text-sub"><span className="reporte-span">Establecimiento:</span> {infoFechas.establish}</div>
                                <div className="reporte-text-sub"><span className="reporte-span">Estado:</span> {estado}</div>
                                <div className="reporte-text-sub"><span className="reporte-span">Fecha y hora de apertura:</span> {infoFechas.feh_open}</div>
                                <div className="reporte-text-sub"><span className="reporte-span">Fecha y hora de cierre:</span> {fechCierre}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prin-total-report">
                    <div>
                        <div className="box-prin box-prin-table">
                            <table className="table-reportes">
                                <thead>
                                    <tr className="tr-reporte-head">
                                        <td className="td-reporte-head">Nombre</td>
                                        <td className="td-reporte-head">Cantidad</td>
                                        <td className="td-reporte-head">Total</td>
                                    </tr>
                                </thead>
                                <tbody className="tbody-reporte">
                                {dataFechas.data &&
                                dataFechas.data.map((data) => (
                                    <tr key={idCont = idCont + 1}>
                                        <td className="td-reporte-body td-text-reporte">{data.name}</td>
                                        <td className="td-reporte-body">{parseInt(data.cantidad)}</td>
                                        <td className="td-reporte-body">{data.total}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan="2" className="td-reporte td-reporte-body-total">Total</td>
                                    <td className="td-reporte td-reporte-body-total">s/.{suma}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
export default Reportes;
