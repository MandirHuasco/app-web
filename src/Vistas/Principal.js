import React, {useState, useEffect} from "react";
import axios from "axios";

import StoreDatos from "../functions/Store";

import {faTicketAlt, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import img101 from '../img/ticket-001.png';
import img102 from '../img/ticket-002.png';
import img103 from '../img/ticket-003.png';
import img104 from '../img/home.png';
import img105 from '../img/fecha.png';
import img106 from '../img/ticket-004.png';
import img107 from '../img/barras.png';
import {Document, Image, Page, PDFViewer, Text, View} from "@react-pdf/renderer";
import img100 from "../img/head-pdf.png";
import InvoiceItemsTable from "../Components/PDF-Table/Table-PDF";

const ticket = <FontAwesomeIcon icon={faTicketAlt} />;

function Principal() {

    const dataBase = [[0,"tenancy_fadima"],[1,"tenancy_yawi"]];
    let id_database = 0;
    let fechaRangoInicial = '';
    let AdminUser = false;
    const [sede, setSede]= useState([]);

    const [TotalMoney, setTotalMoney]= useState(0);
    const [TotalTickets, setTotalTickets]= useState(0);

    const [TotalMoneyM, setTotalMoneyM]= useState(0);
    const [TotalTicketsM, setTotalTicketsM]= useState(0);

    const [SubTotalMoneyM1, setSubTotalMoneyM1]= useState(0);
    const [SubTotalTicketsM1, setSubTotalTicketsM1]= useState(0);
    const [SubDescM1, setSubDescM1]= useState('');
    const [SubUnitM1, setSubUnitM1]= useState(0);

    const [SubTotalMoneyM2, setSubTotalMoneyM2]= useState(0);
    const [SubTotalTicketsM2, setSubTotalTicketsM2]= useState(0);
    const [SubDescM2, setSubDescM2]= useState('');
    const [SubUnitM2, setSubUnitM2]= useState(0);

    const [TotalTicketsM1, setTotalTicketsM1]= useState(0);
    const [TotalMoneyM1, setTotalMoneyM1]= useState(0);

    const [SubTotalMoneyM1Sub1, setSubTotalMoneyM1Sub1]= useState(0);
    const [SubTotalTicketsM1Sub1, setSubTotalTicketsM1Sub1]= useState(0);
    const [SubTotalMoneyM1DescSub1, setSubTotalMoneyM1DescSub1]= useState('');
    const [SubTotalTicketsM1UnitSub1, setSubTotalTicketsM1UnitSub1]= useState(0);

    const [SubTotalMoneyM1Sub2, setSubTotalMoneyM1Sub2]= useState(0);
    const [SubTotalTicketsM1Sub2, setSubTotalTicketsM1Sub2]= useState(0);
    const [SubTotalMoneyM1DescSub2, setSubTotalMoneyM1DescSub2]= useState('');
    const [SubTotalTicketsM1UnitSub2, setSubTotalTicketsM1UnitSub2]= useState(0);

    const [SubTotalMoneyM1Sub3, setSubTotalMoneyM1Sub3]= useState(0);
    const [SubTotalTicketsM1Sub3, setSubTotalTicketsM1Sub3]= useState(0);
    const [SubTotalMoneyM1DescSub3, setSubTotalMoneyM1DescSub3]= useState('');
    const [SubTotalTicketsM1UnitSub3, setSubTotalTicketsM1UnitSub3]= useState(0);

    const [TotalTicketsM2, setTotalTicketsM2]= useState(0);
    const [TotalMoneyM2, setTotalMoneyM2]= useState(0);

    const [SubTotalMoneyM2Sub1, setSubTotalMoneyM2Sub1]= useState(0);
    const [SubTotalTicketsM2Sub1, setSubTotalTicketsM2Sub1]= useState(0);
    const [SubTotalMoneyM2DescSub1, setSubTotalMoneyM2DescSub1]= useState('');
    const [SubTotalTicketsM2UnitSub1, setSubTotalTicketsM2UnitSub1]= useState(0);

    const [SubTotalMoneyM2Sub2, setSubTotalMoneyM2Sub2]= useState(0);
    const [SubTotalTicketsM2Sub2, setSubTotalTicketsM2Sub2]= useState(0);
    const [SubTotalMoneyM2DescSub2, setSubTotalMoneyM2DescSub2]= useState('');
    const [SubTotalTicketsM2UnitSub2, setSubTotalTicketsM2UnitSub2]= useState(0);


    if(StoreDatos.a_n[0]) {
        //console.log("TRUE")
        AdminUser = true;
        //id_database = StoreDatos.a_m[0].Id_user;
    } else {
        id_database = StoreDatos.a_m.Id_user;
        //setSedeAdminSelect(StoreDatos.a_m.Id_user)
    }

    const [sedeAdminSelect, setSedeAdminSelect]= useState(id_database);

    const SedeGet = async() => {

        await axios.get("http://apita.traker.ga/monitoreo/get_info_sedes.php?database=" + dataBase[sedeAdminSelect][1])
            .then(response => {
                setSede(response.data);
            }).catch(error=>{
                console.log(error);
            })
    }

    StoreDatos.a_f.map((c) => (
        c.box.Id_attender === 'M1'?
            fechaRangoInicial = c.box.Id
            : ''
    ))

    //console.log(StoreDatos.a_f[0] + "AQUI")

    //let sedes = sede.data.length;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_101, setModal_101] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_102, setModal_102] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_103, setModal_103] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_104, setModal_104] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_105, setModal_105] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_106, setModal_106] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_107, setModal_107] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_108, setModal_108] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_109, setModal_109] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_110, setModal_1010] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [modal_111, setModal_1011] = useState(false);

    const toggle_101 = () => setModal_101(!modal_101);
    const toggle_102 = () => setModal_102(!modal_102);
    const toggle_103 = () => setModal_103(!modal_103);
    const toggle_104 = () => setModal_104(!modal_104);
    const toggle_105 = () => setModal_105(!modal_105);
    const toggle_106 = () => setModal_106(!modal_106);
    const toggle_107 = () => setModal_107(!modal_107);
    const toggle_108 = () => setModal_108(!modal_108);
    const toggle_109 = () => setModal_109(!modal_109);
    const toggle_110 = () => setModal_1010(!modal_110);
    const toggle_111 = () => setModal_1011(!modal_111);

    const [fechas, setFechas]= useState([]);
    const [tablaFechas, setTablaFechas]= useState([]);
    const [busqueda, setBusqueda]= useState("");

    const [fechasSecond, setFechasSecond]= useState([]);
    const [tablaFechasSecond, setTablaFechasSecond]= useState([]);
    const [busquedaSecond, setBusquedaSecond]= useState("");

    const [fechaSelect, setFechaSelect]= useState("");
    const [sedeSelect, setSedeSelect]= useState("0");
    const [fechaRangoSelect, setFechaRAngoSelect]= useState(fechaRangoInicial);

    //--------REPORTES---------

    const [styleaId, setStyleaId] = useState("nav-bg-select");
    const [styleAId, setStyleAId] = useState("");

    const [stylebId, setStylebId] = useState("");
    const [styleBId, setStyleBId] = useState("div-off");

    const [stylecId, setStylecId] = useState("div-off");
    const [styleCId, setStyleCId] = useState("div-on");

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

    const changeStyleCId = () => {
        console.log("menu-action-C");

        setStylecId("div-on");
        setStyleCId("div-off");
    };

    const changeStyleDId = () => {
        console.log("menu-action-C");

        setStylecId("div-off");
        setStyleCId("div-on");
    };

    //let id = localStorage.getItem('IdFecha');
    //let idData = localStorage.getItem('IdData');


    const [infoFechasId, setInfoFechasId]= useState([]);
    const [dataFechasId, setDataFechasId]= useState([]);

    const FechaGetId = async() => {

        await axios.get("http://apita.traker.ga/monitoreo/get_info_data.php?database=" + dataBase[sedeAdminSelect][1] + "&id_caja=" + fechaSelect)
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

    const FechaGet = async() => {

        await axios.get("http://apita.traker.ga/monitoreo/get_info_fech.php?database=" + dataBase[sedeAdminSelect][1] +"&sede=" + sedeSelect)
            .then(response => {
                setFechas(response.data);
                setTablaFechas(response.data);
            }).catch(error=>{
                console.log(error);
            })
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }
    //console.log(JSON.stringify(fechas) + "ANTES")
    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaFechas.data.filter((elemento) => {
            if(elemento.date_opening.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ){
                return elemento;
            }
        });
        let obj = {}
        obj.data = resultadosBusqueda
        setFechas(obj);
        //console.log(JSON.stringify(fechas) + "DESPUEs")
    }

    const FechaGetSecond = async() => {

        await axios.get("http://apita.traker.ga/monitoreo/get_info_fech.php?database=" + dataBase[sedeAdminSelect][1] + "&sede=" + sedeSelect)
            .then(response => {
                setFechasSecond(response.data);
                setTablaFechasSecond(response.data);
            }).catch(error=>{
                console.log(error);
            })
    }

    const handleChangeSecond = e => {
        setBusquedaSecond(e.target.value);
        filtrarSecond(e.target.value);
    }
    //console.log(JSON.stringify(fechas) + "ANTES")
    const filtrarSecond = (terminoBusquedaSecond) => {
        var resultadosBusquedaSecond = tablaFechasSecond.data.filter((elemento) => {
            if(elemento.date_opening.toString().toLowerCase().includes(terminoBusquedaSecond.toLowerCase())
            ){
                return elemento;
            }
        });
        let obj = {}
        obj.data = resultadosBusquedaSecond
        setFechasSecond(obj);
        //console.log(JSON.stringify(fechas) + "DESPUEs")
    }

    useEffect(() => {

        function InvoiceClicked(){

            if(fechaSelect){
                localStorage.setItem("IdFecha", fechaSelect)
                localStorage.setItem("IdData", dataBase[sedeAdminSelect][1])
                setModal_102(false);
                //console.log(fechaSelect + "Id-Fecha")
                //window.open('Reportes', "_blank")
            }

            FechaGetId();
            SedeGet();
            FechaGet();
            FechaGetSecond();
            setModal_108(false);
            setModal_101(false);
            console.log(sedeAdminSelect + "SEDE")
        }InvoiceClicked();

    }, [sedeSelect, sedeAdminSelect, fechaSelect])

    useEffect(() => {

        function InvoiceClickedFecha(){
            if(fechaRangoSelect){
                //console.log(sedeSelect + " Id-Sede")
                setModal_107(false);

                StoreDatos.a_p.map((c) => (
                    c.box.Date_start_report === fechaRangoSelect ?
                        c.box.Id_user === 0 ?
                            c.box.Id_attender === 'M2' ?
                                '' : c.box.Id_attender === 'M3' ?
                                setTotalMoney(c.items[0].Total_cash + c.items[1].Total_cash) &
                                setTotalTickets(c.items[0].Total_tickets + c.items[1].Total_tickets) &
                                setSubTotalMoneyM1(c.items[0].Total_cash + c.items[1].Total_cash) &
                                setSubTotalTicketsM1(c.items[0].Total_tickets + c.items[1].Total_tickets) &
                                setSubDescM1(c.items[0].Name + ' Y ' + c.items[1].Name) &
                                setSubUnitM1(parseFloat(c.items[0].Total_value) + parseFloat(c.items[1].Total_value))
                            :
                                c.box.Id_attender === 'M1' ?
                                    setTotalMoneyM1(c.items[0].Total_cash + c.items[1].Total_cash + c.items[2].Total_cash) &
                                    setTotalTicketsM1(c.items[0].Total_tickets + c.items[1].Total_tickets + c.items[2].Total_tickets) &
                                    setSubTotalMoneyM1Sub1(c.items[0].Total_cash) &
                                    setSubTotalTicketsM1Sub1(c.items[0].Total_tickets) &
                                    setSubTotalMoneyM1Sub2(c.items[1].Total_cash) &
                                    setSubTotalTicketsM1Sub2(c.items[1].Total_tickets) &
                                    setSubTotalMoneyM1Sub3(c.items[2].Total_cash) &
                                    setSubTotalTicketsM1Sub3(c.items[2].Total_tickets) &

                                    setSubTotalMoneyM1DescSub1(c.items[0].Name) &
                                    setSubTotalTicketsM1UnitSub1(c.items[0].Total_value) &
                                    setSubTotalMoneyM1DescSub2(c.items[1].Name) &
                                    setSubTotalTicketsM1UnitSub2(c.items[1].Total_value) &
                                    setSubTotalMoneyM1DescSub3(c.items[2].Name) &
                                    setSubTotalTicketsM1UnitSub3(c.items[2].Total_value)
                                    : ''
                        :
                            c.box.Id_user === 1 ?
                                c.box.Id_attender === 'M2' ?
                                    '' : c.box.Id_attender === 'M3' ?
                                    setTotalMoneyM(c.items[0].Total_cash + c.items[1].Total_cash) &
                                    setTotalTicketsM(c.items[0].Total_tickets + c.items[1].Total_tickets) &
                                    setSubTotalMoneyM2(c.items[0].Total_cash + c.items[1].Total_cash) &
                                    setSubTotalTicketsM2(c.items[0].Total_tickets + c.items[1].Total_tickets) &
                                    setSubDescM2(c.items[0].Name + ' Y ' + c.items[1].Name) &
                                    setSubUnitM2(parseFloat(c.items[0].Total_value) + parseFloat(c.items[1].Total_value))
                                    :
                                    c.box.Id_attender === 'M1' ?
                                        setTotalMoneyM2(c.items[0].Total_cash + c.items[1].Total_cash) &
                                        setTotalTicketsM2(c.items[0].Total_tickets + c.items[1].Total_tickets) &
                                        setSubTotalMoneyM2Sub1(c.items[0].Total_cash) &
                                        setSubTotalTicketsM2Sub1(c.items[0].Total_tickets) &
                                        setSubTotalMoneyM2Sub2(c.items[1].Total_cash) &
                                        setSubTotalTicketsM2Sub2(c.items[1].Total_tickets) &

                                        setSubTotalMoneyM2DescSub1(c.items[0].Name) &
                                        setSubTotalTicketsM2UnitSub1(c.items[0].Total_value) &
                                        setSubTotalMoneyM2DescSub2(c.items[1].Name) &
                                        setSubTotalTicketsM2UnitSub2(c.items[1].Total_value)
                                        : ''
                                : ''
                    : ''
                ))
            }
        }InvoiceClickedFecha();

    }, [fechaRangoSelect])

    //console.log(StoreDatos.a_p + "MAPA")

    return (<>
        <div className="App App-prin">
            <div className="background-image background-image-prin">
            </div>

            <div className={styleCId + " cont-sub-prin"}>
                <div className="prin-total">
                    <div className="empresa">
                        {sedeAdminSelect === 0 ?
                            'ZONA CENTRO' : 'ZONA NORTE'
                        }
                    </div>
                    {StoreDatos.a_p.map((c) => (
                        c.box.Date_start_report === fechaRangoSelect ?
                            <div className="display-contents">
                                {c.box.Id_user === 0 && sedeAdminSelect === 0 ?
                                    <>
                                        {c.box.Id_attender === 'M2' ? '' :
                                            <>
                                                {c.box.Id_attender === 'M3' ?
                                                    '' :
                                                    <>
                                                        <div className="display-flex-money">
                                                            <div className="money-icon">S/.</div>
                                                            <div className="total-money">
                                                                {TotalMoney + TotalMoneyM1}
                                                            </div>
                                                        </div>
                                                        <div className="cont-ticket">
                                                            <i className="ticket">{ticket}</i>
                                                            <div className="ticket-nro">{TotalTickets + TotalTicketsM1}</div>
                                                        </div>
                                                        <div className="box-prin margin-top-20">
                                                            <table className="table-cont">
                                                                <tbody>
                                                                <div className="display-contents">
                                                                    <a key="103" className="display-contents" onClick={() => toggle_109()}>
                                                                        <tr className="tr-ticket">
                                                                            <td className="ticket-icon"><img src={img101} className="ticket-img"/></td>
                                                                            <td className="cantidad-ticket">{SubTotalTicketsM1Sub1}</td>
                                                                            <td className="precio-ticket">s/. {SubTotalMoneyM1Sub1}</td>
                                                                        </tr>
                                                                    </a>

                                                                    <Modal isOpen={modal_109} toggle={toggle_109}>
                                                                        <ModalHeader toggle={toggle_109}>
                                                                            <img src={img101} className="img-home"/>
                                                                            <p className="p-modal">Detalles de <span className="span-modal">ENTRADAS</span>.</p>
                                                                        </ModalHeader>
                                                                        <ModalBody>
                                                                            <div className="table-overflow">
                                                                                <div className="cont-select-modal table-cont-modal-scroll">
                                                                                    <table className="table-cont-modal">
                                                                                        <thead>
                                                                                        <tr className="tr-head-modal">
                                                                                            <td className="cell-modal">Descripción</td>
                                                                                            <td className="cell-modal">Cantidad</td>
                                                                                            <td className="cell-modal">Unitario</td>
                                                                                            <td className="cell-modal">Total</td>
                                                                                        </tr>
                                                                                        </thead>
                                                                                        <tbody>
                                                                                        <tr className="">
                                                                                            <td className="cell-modal">{SubTotalMoneyM1DescSub1}</td>
                                                                                            <td className="cell-modal">{SubTotalTicketsM1Sub1}</td>
                                                                                            <td className="cell-modal">s/.{SubTotalTicketsM1UnitSub1}</td>
                                                                                            <td className="cell-modal">s/.{SubTotalMoneyM1Sub1}</td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </ModalBody>
                                                                        <ModalFooter>
                                                                            <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                                                        </ModalFooter>
                                                                    </Modal>

                                                                    <a key="104" className="display-contents" onClick={() => toggle_110()}>
                                                                        <tr className="tr-ticket">
                                                                            <td className="ticket-icon"><img src={img102} className="ticket-img"/></td>
                                                                            <td className="cantidad-ticket">{SubTotalTicketsM1Sub3}</td>
                                                                            <td className="precio-ticket">s/.{SubTotalMoneyM1Sub3}</td>
                                                                        </tr>
                                                                    </a>

                                                                    <Modal isOpen={modal_110} toggle={toggle_110}>
                                                                        <ModalHeader toggle={toggle_110}>
                                                                            <img src={img102} className="img-home"/>
                                                                            <p className="p-modal">Detalles de <span className="span-modal">COCHES</span>.</p>
                                                                        </ModalHeader>
                                                                        <ModalBody>
                                                                            <div className="table-overflow">
                                                                                <div className="cont-select-modal table-cont-modal-scroll">
                                                                                    <table className="table-cont-modal">
                                                                                        <tbody>
                                                                                        <tr className="tr-head-modal">
                                                                                            <td className="cell-modal">Descripción</td>
                                                                                            <td className="cell-modal">Cantidad</td>
                                                                                            <td className="cell-modal">Unitario</td>
                                                                                            <td className="cell-modal">Total</td>
                                                                                        </tr>
                                                                                        <tr className="">
                                                                                            <td className="cell-modal">{SubTotalMoneyM1DescSub3}</td>
                                                                                            <td className="cell-modal">{SubTotalTicketsM1Sub3}</td>
                                                                                            <td className="cell-modal">s/.{SubTotalTicketsM1UnitSub3}</td>
                                                                                            <td className="cell-modal">s/.{SubTotalMoneyM1Sub3}</td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </ModalBody>
                                                                        <ModalFooter>
                                                                            <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                                                        </ModalFooter>
                                                                    </Modal>

                                                                    <a key="105" className="display-contents" onClick={() => toggle_111()}>
                                                                        <tr className="tr-ticket">
                                                                            <td className="ticket-icon"><img src={img103} className="ticket-img"/></td>
                                                                            <td className="cantidad-ticket">{SubTotalTicketsM1Sub2}</td>
                                                                            <td className="precio-ticket">s/. {SubTotalMoneyM1Sub2}</td>
                                                                        </tr>
                                                                    </a>

                                                                    <Modal isOpen={modal_111} toggle={toggle_111}>
                                                                        <ModalHeader toggle={toggle_111}>
                                                                            <img src={img103} className="img-home"/>
                                                                            <p className="p-modal">Detalles de <span className="span-modal">MOTOS</span>.</p>
                                                                        </ModalHeader>
                                                                        <ModalBody>
                                                                            <div className="table-overflow">
                                                                                <div className="cont-select-modal table-cont-modal-scroll">
                                                                                    <table className="table-cont-modal">
                                                                                        <tbody>
                                                                                        <tr className="tr-head-modal">
                                                                                            <td className="cell-modal">Descripción</td>
                                                                                            <td className="cell-modal">Cantidad</td>
                                                                                            <td className="cell-modal">Unitario</td>
                                                                                            <td className="cell-modal">Total</td>
                                                                                        </tr>
                                                                                        <tr className="">
                                                                                            <td className="cell-modal">{SubTotalMoneyM1DescSub2}</td>
                                                                                            <td className="cell-modal">{SubTotalTicketsM1Sub2}</td>
                                                                                            <td className="cell-modal">s/.{SubTotalTicketsM1UnitSub2}</td>
                                                                                            <td className="cell-modal">s/.{SubTotalMoneyM1Sub2}</td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </ModalBody>
                                                                        <ModalFooter>
                                                                            <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                                                        </ModalFooter>
                                                                    </Modal>

                                                                    <a key="106" className="display-contents" onClick={() => toggle_104()}>
                                                                        <tr className="tr-ticket">
                                                                            <td className="ticket-icon"><img src={img106} className="ticket-img"/></td>
                                                                            <td className="cantidad-ticket">{SubTotalTicketsM1}</td>
                                                                            <td className="precio-ticket">s/. {SubTotalMoneyM1}</td>
                                                                        </tr>
                                                                    </a>

                                                                    <Modal isOpen={modal_104} toggle={toggle_104}>
                                                                        <ModalHeader toggle={toggle_104}>
                                                                            <img src={img106} className="img-home"/>
                                                                            <p className="p-modal">Detalles de <span className="span-modal">CUARTOS</span>.</p>
                                                                        </ModalHeader>
                                                                        <ModalBody>
                                                                            <div className="table-overflow">
                                                                                <div className="cont-select-modal table-cont-modal-scroll">
                                                                                    <table className="table-cont-modal">
                                                                                        <tbody>
                                                                                        <tr className="tr-head-modal">
                                                                                            <td className="cell-modal">Descripción</td>
                                                                                            <td className="cell-modal">Cantidad</td>
                                                                                            <td className="cell-modal">Unitario</td>
                                                                                            <td className="cell-modal">Total</td>
                                                                                        </tr>
                                                                                        <tr className="">
                                                                                            <td className="cell-modal">{SubDescM1}</td>
                                                                                            <td className="cell-modal">{SubTotalTicketsM1}</td>
                                                                                            <td className="cell-modal">s/.{SubUnitM1}</td>
                                                                                            <td className="cell-modal">s/.{SubTotalMoneyM1}</td>
                                                                                        </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>

                                                                        </ModalBody>
                                                                        <ModalFooter>
                                                                            <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                                                        </ModalFooter>
                                                                    </Modal>


                                                                </div>
                                                                <tr>
                                                                    <td colSpan="5" className="fecha-ticket">
                                                                        {c.box.Date_start_report.toString().split('T')[0]}
                                                                        {' ' + dataBase[sedeAdminSelect][1]}</td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </>
                                                }
                                            </>
                                        }
                                    </>
                                    :
                                    <>
                                        {c.box.Id_user === 1 && sedeAdminSelect === 1 ?
                                            <>
                                                {c.box.Id_attender === 'M2' ? '' :
                                                    <>
                                                        {c.box.Id_attender === 'M3' ?
                                                            '' :
                                                            <>
                                                                <div className="display-flex-money">
                                                                    <div className="money-icon">S/.</div>
                                                                    <div className="total-money">
                                                                        {TotalMoneyM + TotalMoneyM2}
                                                                    </div>
                                                                </div>
                                                                <div className="cont-ticket">
                                                                    <i className="ticket">{ticket}</i>
                                                                    <div className="ticket-nro">{TotalTicketsM + TotalTicketsM2}</div>
                                                                </div>
                                                                <div className="box-prin margin-top-20">
                                                                    <table className="table-cont">
                                                                        <tbody>
                                                                        <div className="display-contents">
                                                                            <a key="103" className="display-contents" onClick={() => toggle_103()}>
                                                                                <tr className="tr-ticket">
                                                                                    <td className="ticket-icon"><img src={img101} className="ticket-img"/></td>
                                                                                    <td className="cantidad-ticket">{SubTotalTicketsM2Sub1}</td>
                                                                                    <td className="precio-ticket">s/. {SubTotalMoneyM2Sub1}</td>
                                                                                </tr>
                                                                            </a>

                                                                            <Modal isOpen={modal_103} toggle={toggle_103}>
                                                                                <ModalHeader toggle={toggle_103}>
                                                                                    <img src={img101} className="img-home"/>
                                                                                    <p className="p-modal">Detalles de <span className="span-modal">ENTRADAS</span>.</p>
                                                                                </ModalHeader>
                                                                                <ModalBody>
                                                                                    <div className="table-overflow">
                                                                                        <div className="cont-select-modal table-cont-modal-scroll">
                                                                                            <table className="table-cont-modal">
                                                                                                <thead>
                                                                                                <tr className="tr-head-modal">
                                                                                                    <td className="cell-modal">Descripción</td>
                                                                                                    <td className="cell-modal">Cantidad</td>
                                                                                                    <td className="cell-modal">Unitario</td>
                                                                                                    <td className="cell-modal">Total</td>
                                                                                                </tr>
                                                                                                </thead>
                                                                                                <tbody>
                                                                                                <tr className="">
                                                                                                    <td className="cell-modal">{SubTotalMoneyM2DescSub1}</td>
                                                                                                    <td className="cell-modal">{SubTotalTicketsM2Sub1}</td>
                                                                                                    <td className="cell-modal">s/.{SubTotalTicketsM2UnitSub1}</td>
                                                                                                    <td className="cell-modal">s/.{SubTotalMoneyM2Sub1}</td>
                                                                                                </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                </ModalBody>
                                                                                <ModalFooter>
                                                                                    <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                                                                </ModalFooter>
                                                                            </Modal>

                                                                            <a key="105" className="display-contents" onClick={() => toggle_105()}>
                                                                                <tr className="tr-ticket">
                                                                                    <td className="ticket-icon"><img src={img103} className="ticket-img"/></td>
                                                                                    <td className="cantidad-ticket">{SubTotalTicketsM2Sub2}</td>
                                                                                    <td className="precio-ticket">s/. {SubTotalMoneyM2Sub2}</td>
                                                                                </tr>
                                                                            </a>

                                                                            <Modal isOpen={modal_105} toggle={toggle_105}>
                                                                                <ModalHeader toggle={toggle_105}>
                                                                                    <img src={img103} className="img-home"/>
                                                                                    <p className="p-modal">Detalles de <span className="span-modal">MOTOS</span>.</p>
                                                                                </ModalHeader>
                                                                                <ModalBody>
                                                                                    <div className="table-overflow">
                                                                                        <div className="cont-select-modal table-cont-modal-scroll">
                                                                                            <table className="table-cont-modal">
                                                                                                <tbody>
                                                                                                <tr className="tr-head-modal">
                                                                                                    <td className="cell-modal">Descripción</td>
                                                                                                    <td className="cell-modal">Cantidad</td>
                                                                                                    <td className="cell-modal">Unitario</td>
                                                                                                    <td className="cell-modal">Total</td>
                                                                                                </tr>
                                                                                                <tr className="">
                                                                                                    <td className="cell-modal">{SubTotalMoneyM2DescSub2}</td>
                                                                                                    <td className="cell-modal">{SubTotalTicketsM2Sub2}</td>
                                                                                                    <td className="cell-modal">s/.{SubTotalTicketsM2UnitSub2}</td>
                                                                                                    <td className="cell-modal">s/.{SubTotalMoneyM2Sub2}</td>
                                                                                                </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>
                                                                                </ModalBody>
                                                                                <ModalFooter>
                                                                                    <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                                                                </ModalFooter>
                                                                            </Modal>

                                                                            <a key="106" className="display-contents" onClick={() => toggle_106()}>
                                                                                <tr className="tr-ticket">
                                                                                    <td className="ticket-icon"><img src={img106} className="ticket-img"/></td>
                                                                                    <td className="cantidad-ticket">{SubTotalTicketsM2}</td>
                                                                                    <td className="precio-ticket">s/. {SubTotalMoneyM2}</td>
                                                                                </tr>
                                                                            </a>

                                                                            <Modal isOpen={modal_106} toggle={toggle_106}>
                                                                                <ModalHeader toggle={toggle_106}>
                                                                                    <img src={img106} className="img-home"/>
                                                                                    <p className="p-modal">Detalles de <span className="span-modal">CUARTOS</span>.</p>
                                                                                </ModalHeader>
                                                                                <ModalBody>
                                                                                    <div className="table-overflow">
                                                                                        <div className="cont-select-modal table-cont-modal-scroll">
                                                                                            <table className="table-cont-modal">
                                                                                                <tbody>
                                                                                                <tr className="tr-head-modal">
                                                                                                    <td className="cell-modal">Descripción</td>
                                                                                                    <td className="cell-modal">Cantidad</td>
                                                                                                    <td className="cell-modal">Unitario</td>
                                                                                                    <td className="cell-modal">Total</td>
                                                                                                </tr>
                                                                                                <tr className="">
                                                                                                    <td className="cell-modal">{SubDescM2}</td>
                                                                                                    <td className="cell-modal">{SubTotalTicketsM2}</td>
                                                                                                    <td className="cell-modal">s/.{SubUnitM2}</td>
                                                                                                    <td className="cell-modal">s/.{SubTotalMoneyM2}</td>
                                                                                                </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </div>

                                                                                </ModalBody>
                                                                                <ModalFooter>
                                                                                    <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                                                                </ModalFooter>
                                                                            </Modal>


                                                                        </div>
                                                                        <tr>
                                                                            <td colSpan="5" className="fecha-ticket">
                                                                                {c.box.Date_start_report.toString().split('T')[0]}
                                                                                {' ' + dataBase[sedeAdminSelect][1]}</td>
                                                                        </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </>
                                                        }
                                                    </>
                                                }
                                            </>
                                            :
                                            ''
                                        }
                                    </>
                                }

                            </div>:''))}

                    <div className="box-prin margin-top-20 display-flex-money bg-fin">

                        <div className="button-fin button-fin-100"><button className="button-fecha button-fecha-icon" onClick={() => toggle_107()}><span className="icon"><ion-icon name="calendar-clear-outline"></ion-icon></span>POR DIAS</button></div>

                        <Modal isOpen={modal_107} toggle={toggle_107}>
                            <ModalHeader toggle={toggle_107}>
                                <img src={img105} className="img-home"/>
                                <p className="p-modal">Seleccionar <span className="span-modal">fecha</span>.</p>
                            </ModalHeader>
                            <ModalBody className="body-modal-fechas">
                                <div className="cont-select-modal">
                                    {AdminUser === true ?
                                        <>
                                            {StoreDatos.a_o.map((c, i) => (
                                                c.box.Id_user === 0 ?
                                                    <>
                                                        {c.box.Id_attender === 'M1' ?
                                                            <div>
                                                                <a onClick={() => setFechaRAngoSelect(c.box.Date_start_report)}>
                                                                    <input key={c.box.Id_box} type="submit" className="submit-form submit-form-modal" value={c.box.Date_start_report.toString().split('T')[0]}/>
                                                                </a>
                                                            </div> : ''}
                                                    </>
                                                    :
                                                    ''
                                            ))}
                                        </>
                                        :
                                        <>
                                            {StoreDatos.a_o.map((c, i) => (
                                                c.box.Id_user === 0 ?
                                                    <>
                                                        {c.box.Id_attender === 'M1' ?
                                                            <div>
                                                                <a onClick={() => setFechaRAngoSelect(c.box.Date_start_report)}>
                                                                    <input key={c.box.Id_box} type="submit" className="submit-form submit-form-modal" value={c.box.Date_start_report.toString().split('T')[0]}/>
                                                                </a>
                                                            </div> : ''}
                                                    </>
                                                    :
                                                    <>
                                                        {c.box.Id_attender === 'M3' ?
                                                            <div>
                                                                <a onClick={() => setFechaRAngoSelect(c.box.Date_start_report)}>
                                                                    <input key={c.box.Id_box} type="submit" className="submit-form submit-form-modal" value={c.box.Date_start_report.toString().split('T')[0]}/>
                                                                </a>
                                                            </div> : ''}
                                                    </>
                                            ))}
                                        </>
                                    }
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="box-prin margin-top-20 bg-transparent-white box-select-barra">
                        <div className="historial-text button-fecha-icon">
                            <span className="icon"><ion-icon name="scan-outline"></ion-icon></span>
                            {sede.data &&
                            sede.data.map((sed) => (
                                sedeSelect === sed.user_id ?
                                    <div key={sed.user_id}>
                                        BARRA: {sed.name}
                                    </div> : ''
                            ))}
                        </div>
                    </div>
                    <div className="box-prin margin-top-20 bg-transparent-white">
                        <div className="historial-text button-fecha-icon"><span className="icon"><ion-icon name="newspaper-outline"></ion-icon></span>HISTORIAL REPORTES</div>
                    </div>
                    <div className="box-prin margin-top-20 bg-transparent-white box-search">
                        <div className="containerInput">
                            <input
                                className="search-form"
                                placeholder="AÑO-MES-DIA"
                                value={busqueda}
                                onChange={handleChange}
                            />
                            <button className="btn btn-success btn-search">
                                <FontAwesomeIcon icon={faSearch}/>
                            </button>
                        </div>
                    </div>
                    <div className="box-prin margin-top-20 overflow-fechas">
                        <table className="table-cont">
                            <thead>
                            <tr>
                                <td className="fecha-hist-head">Fecha</td>
                                <td className="fecha-hist-head">Total</td>
                            </tr>
                            </thead>
                            <tbody>
                            {fechas.data &&
                            fechas.data.map((fecha) => (
                                <tr key={fecha.id}>
                                    <td className="fecha-hist-head">{fecha.date_opening}</td>
                                    <td className="fecha-hist-head">{parseFloat(fecha.final_balance)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="box-prin margin-top-20 display-flex-money display-block-money bg-fin display-block">
                        <div className="button-fin float-left"><button className="button-fecha button-fecha-icon" onClick={() => toggle_101()}><span className="icon"><ion-icon name="layers-outline"></ion-icon></span>BARRAS</button></div>

                        <Modal isOpen={modal_101} toggle={toggle_101}>
                            <ModalHeader toggle={toggle_101}>
                                <img src={img107} className="img-home"/>
                                <p className="p-modal">Seleccionar <span className="span-modal">barra</span>.</p>
                            </ModalHeader>
                            <ModalBody>
                                <div className="cont-select-modal">
                                    {sede.data &&
                                    sede.data.map((sed) => (
                                        <div key={sed.user_id}>
                                            <a onClick={() => setSedeSelect(sed.user_id)}>
                                                <input type="submit" className="submit-form submit-form-modal" value={sed.name}/>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                            </ModalFooter>
                        </Modal>

                        <div className="button-fin float-right"><button className="button-fecha button-fecha-icon" onClick={() => toggle_102()}><span className="icon"><ion-icon name="calendar-clear-outline"></ion-icon></span>POR DIA</button></div>

                        <Modal isOpen={modal_102} toggle={toggle_102}>
                            <ModalHeader toggle={toggle_102}>
                                <img src={img105} className="img-home"/>
                                <p className="p-modal">Seleccionar <span className="span-modal">fecha</span>.</p>
                            </ModalHeader>
                            <div className="containerInput containerInputModal">
                                <input
                                    className="search-form search-fechas-input"
                                    placeholder="AÑO-MES-DIA"
                                    value={busquedaSecond}
                                    onChange={handleChangeSecond}
                                />
                            </div>
                            <ModalBody className="body-modal-fechas">
                                <div className="cont-select-modal">
                                    {fechasSecond.data &&
                                    fechasSecond.data.map((fecha) => (
                                        <div key={fecha.id}>
                                            <a onClick={() => setFechaSelect(fecha.id)}>
                                                <input key={fecha.id} onClick={changeStyleCId} type="submit" className="submit-form submit-form-modal" value={fecha.date_opening}/>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                            </ModalFooter>
                        </Modal>

                        {AdminUser === true &&
                        <>
                            <div className="button-fin button-fin-sede">
                                <button className="button-fecha button-fecha-icon" onClick={() => toggle_108()}>
                                        <span className="icon">
                                            <ion-icon name="layers-outline"></ion-icon>
                                        </span>SEDES : {
                                    dataBase[sedeAdminSelect][1]
                                }
                                </button>
                            </div>

                            <Modal isOpen={modal_108} toggle={toggle_108}>
                                <ModalHeader toggle={toggle_108}>
                                    <img src={img104} className="img-home"/>
                                    <p className="p-modal">Seleccionar <span className="span-modal">sede</span>.</p>
                                </ModalHeader>
                                <ModalBody className="body-modal-fechas">
                                    <div className="cont-select-modal">
                                        <a onClick={() => setSedeAdminSelect(0)}>
                                            <input type="submit" className="submit-form submit-form-modal" value="FADIMA(CENTRO)"/>
                                        </a>
                                        <a onClick={() => setSedeAdminSelect(1)}>
                                            <input type="submit" className="submit-form submit-form-modal" value="YAWI(NORTE)"/>
                                        </a>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                </ModalFooter>
                            </Modal>
                        </>
                        }
                    </div>
                </div>
            </div>
            {fechaSelect === '' ? '' :
                <div className={stylecId}>
                    <div className="App App-prin line-white-top">
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
                        <div className="button-volver-sede">
                            <button className="button-fecha button-fecha-icon" onClick={changeStyleDId}>
                                <span className="icon">
                                    <ion-icon name="arrow-undo-outline"></ion-icon>
                                </span>VOLVER
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    </>);

}
export default Principal;