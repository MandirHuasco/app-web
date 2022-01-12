import React, {useState, useEffect} from "react";
import axios from "axios";
import {PDFViewer, Document, Page, View, Text, Image} from '@react-pdf/renderer';

import 'bootstrap/dist/css/bootstrap.min.css'
import InvoiceItemsTable from "../Components/PDF-Table/Table-PDF";
import img100 from "../img/head-pdf.png";

function Reportes(){

    const [styleaId, setStyleaId] = useState("nav-bg-select");
    const [styleAId, setStyleAId] = useState("");

    const [stylebId, setStylebId] = useState("");
    const [styleBId, setStyleBId] = useState("div-off");

    const changeStyleAId = () => {
        console.log("menu-action-A");

        setStyleAId("div-on");
        setStyleaId("nav-bg-select");

        setStyleBId("div-off");
        setStylebId("");
    };

    const changeStyleBId = () => {
        console.log("menu-action-B");

        setStyleAId("div-off");
        setStyleaId("");

        setStyleBId("div-on");
        setStylebId("nav-bg-select");

    };

    let id = localStorage.getItem('IdFecha');
    let idData = localStorage.getItem('IdData');

    const [infoFechasId, setInfoFechasId]= useState([]);
    const [dataFechasId, setDataFechasId]= useState([]);

    const FechaGetId = async() => {

        await axios.get("http://apita.traker.ga/monitoreo/get_info_data.php?database=" + idData + "&id_caja=" + id)
            .then(response => {
                setInfoFechasId(response.data.info);
                setDataFechasId(response.data);
            }).catch(error=>{
                console.log(error);
            })
    }

    let estado = "";

    if(parseInt(infoFechasId.state) === 1){
        estado = "Abierto";
    }else{
        estado = "Cerrado";
    }

    let fechCierre = "";

    if(infoFechasId.feh_close === null){
        fechCierre = "---";
    }else{
        fechCierre = infoFechasId.feh_close;
    }

    let suma = 0;

    dataFechasId.data && dataFechasId.data.map((data) =>(
       suma = parseInt(data.total) + suma
    ));

    let idCont = 0;

    useEffect(()=>{
        FechaGetId();
    },[infoFechasId])

    return (<>
        <div className="App App-prin">
            <div className="background-image background-image-prin background-image-reportes">
            </div>

            <div className="nav-reporte">
                <ul className="ul-reporte">
                    <li className="li-reporte">
                        <a onClick={changeStyleAId} className={styleaId + " a-reporte button-report-icon"}><span className="icon-report"><ion-icon name="document-outline"></ion-icon></span>Web</a>
                    </li>
                    <li className="li-reporte">
                        <a onClick={changeStyleBId} className={stylebId + " a-reporte"}><span className="icon-report"><ion-icon name="download-outline"></ion-icon></span>Descargar PDF</a>
                    </li>
                </ul>
            </div>

            <div className={styleAId + " cont-sub-prin"}>
                <div className="prin-total prin-total-report-head">
                    <div>
                        <div className="box-prin">
                            <div className="reporte-title">{infoFechasId.name_company}</div>
                            <div className="reporte-title-sub">{infoFechasId.number_company}</div>

                            <div className="reporte-body">
                                <div className="reporte-text-sub"><span className="reporte-span button-fecha-icon"><span className="icon"><ion-icon name="storefront-outline"></ion-icon></span>Establecimiento:</span> {infoFechasId.establish}</div>
                                <div className="reporte-text-sub"><span className="reporte-span button-fecha-icon"><span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>Estado:</span> {estado}</div>
                                <div className="reporte-text-sub"><span className="reporte-span button-fecha-icon"><span className="icon"><ion-icon name="calendar-clear-outline"></ion-icon></span>Fecha y hora de apertura:</span> {infoFechasId.feh_open}</div>
                                <div className="reporte-text-sub"><span className="reporte-span button-fecha-icon"><span className="icon"><ion-icon name="calendar-clear-outline"></ion-icon></span>Fecha y hora de cierre:</span> {fechCierre}</div>
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
                                {dataFechasId.data &&
                                dataFechasId.data.map((data) => (
                                    <tr key={idCont = idCont + 1}>
                                        <td className="td-reporte-body td-text-reporte">{data.name}</td>
                                        <td className="td-reporte-body">{parseFloat(data.cantidad)}</td>
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

            <div className={styleBId + " cont-sub-prin cont-sub-prin-pdf"}>
                <PDFViewer style={{width: "100%", height: "90vh", margin: "auto",}}>
                    <Document>
                        <Page
                            size="A4"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: 10,
                                    borderBottom: 5,
                                }}
                            >
                                <Image
                                    src={img100}
                                    alt="random image"
                                    style={{ maxWidth: "400px", maxHeight: "400" }}
                                    className="img-cotizacion"
                                />

                                <Text style={{
                                    color: "#757575",
                                    textAlign: "center",
                                    fontSize: 20,
                                    lineHeight: 1,
                                    paddingTop: "20px",
                                    paddingBottom: 5,}}>{infoFechasId.name_company}</Text>
                                <Text style={{
                                    textAlign: "center",
                                    fontSize: 15,}}>{infoFechasId.number_company}</Text>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: "white",
                                    padding: 10,
                                }}
                            >
                                <Text style={{
                                    color: "#5d4e6e",
                                    fontSize: 12,
                                    paddingBottom: 5,}}>Establecimiento: {infoFechasId.establish}</Text>

                                <Text style={{
                                    color: "#5d4e6e",
                                    fontSize: 12,
                                    paddingBottom: 5,}}>Estado: {estado}</Text>

                                <Text style={{
                                    color: "#5d4e6e",
                                    fontSize: 12,
                                    paddingBottom: 5,}}>Fecha y hora de apertura: {infoFechasId.feh_open}</Text>

                                <Text style={{
                                    color: "#5d4e6e",
                                    fontSize: 12,
                                    paddingBottom: 5,}}>Fecha y hora de cierre: {fechCierre}</Text>
                            </View>

                            <View style={{
                                position: "relative",
                                width: "420px",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <InvoiceItemsTable/>

                            </View>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '480px',
                                    height: '40px',
                                    textAlign: 'center',
                                    fontStyle: 'bold',
                                    flexGrow: 1,
                                    fontSize: "14px",
                                }}
                            >
                                <Text style={{
                                    width: '50%',
                                    color: "#000",
                                    fontSize: 12,}}>Razón social </Text>
                                <Text style={{
                                    width: '50%',
                                    color: "#757575",
                                    fontSize: 12,}}>{infoFechasId.name_company}</Text>
                            </View>

                        </Page>
                    </Document>
                </PDFViewer>
            </div>
        </div>
    </>);
}
export default Reportes;
