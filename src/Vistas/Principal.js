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
import img107 from '../img/ticket-05.png';
import Reportes from "./Reportes";
import {Link} from "react-router-dom";

const ticket = <FontAwesomeIcon icon={faTicketAlt} />;

function Principal() {

    const dataBase = [["0","tenancy_fadima"],["1","tenancy_yawi"],["1",""]];
    let id_database = StoreDatos.a_m.Id_user;
    let fechaRangoInicial = '';
    const [sede, setSede]= useState([]);

    const SedeGet = async() => {

        await axios.get("http://apita.traker.ga/monitoreo/get_info_sedes.php?database=" + dataBase[id_database][1])
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

    const toggle_101 = () => setModal_101(!modal_101);
    const toggle_102 = () => setModal_102(!modal_102);
    const toggle_103 = () => setModal_103(!modal_103);
    const toggle_104 = () => setModal_104(!modal_104);
    const toggle_105 = () => setModal_105(!modal_105);
    const toggle_106 = () => setModal_106(!modal_106);
    const toggle_107 = () => setModal_107(!modal_107);
    const toggle_108 = () => setModal_108(!modal_108);

    const [fechas, setFechas]= useState([]);
    const [tablaFechas, setTablaFechas]= useState([]);
    const [busqueda, setBusqueda]= useState("");

    const [fechasSecond, setFechasSecond]= useState([]);
    const [tablaFechasSecond, setTablaFechasSecond]= useState([]);
    const [busquedaSecond, setBusquedaSecond]= useState("");

    const [fechaSelect, setFechaSelect]= useState("");
    const [sedeSelect, setSedeSelect]= useState("1");
    const [fechaRangoSelect, setFechaRAngoSelect]= useState(fechaRangoInicial);

    const FechaGet = async() => {

        await axios.get("http://apita.traker.ga/monitoreo/get_info_fech.php?database=" + dataBase[id_database][1] +"&sede=" + sedeSelect)
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

        await axios.get("http://apita.traker.ga/monitoreo/get_info_fech.php?database=" + dataBase[id_database][1] + "&sede=" + sedeSelect)
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

    useEffect(()=>{
        SedeGet();
        FechaGet();
        FechaGetSecond();
    },[])

    useEffect(() => {

        function InvoiceClicked(){
            if(fechaSelect){
                localStorage.setItem("IdFecha", fechaSelect)
                localStorage.setItem("IdData", dataBase[id_database][1])
                setModal_102(false);
                //console.log(fechaSelect + "Id-Fecha")
                window.open('Reportes', "_blank")
            }
        }InvoiceClicked();

    }, [fechaSelect])

    useEffect(() => {

        function InvoiceClickedSede(){
            if(sedeSelect){
                //console.log(sedeSelect + " Id-Sede")
                setModal_101(false);
                FechaGet();
                FechaGetSecond();
            }
        }InvoiceClickedSede();

    }, [sedeSelect])

    useEffect(() => {

        function InvoiceClickedFecha(){
            if(fechaRangoSelect){
                //console.log(sedeSelect + " Id-Sede")
                setModal_107(false);
            }
        }InvoiceClickedFecha();

    }, [fechaRangoSelect])

    return (<>
            <div className="App App-prin">
                <div className="background-image background-image-prin">
                </div>

                <div className="cont-sub-prin">
                    <div className="prin-total">
                        {StoreDatos.a_o.map((c, i) => (
                            c.box.Date_start_report === fechaRangoSelect ?
                        <div className="display-contents">
                            <div className="display-flex-money">
                                <div className="money-icon">S/.</div>
                                {c.box.Id_attender === 'M3' ?
                                    <div className="total-money">
                                        {c.items[0].Total_cash + c.items[1].Total_cash}
                                    </div> :
                                    <div className="total-money">
                                        {c.items[0].Total_cash + c.items[1].Total_cash + c.items[2].Total_cash}
                                    </div>
                                }
                            </div>
                            <div className="cont-ticket">
                                <i className="ticket">{ticket}</i>
                                {c.box.Id_attender === 'M3' ?
                                    <div className="ticket-nro">{c.items[0].Total_tickets + c.items[1].Total_tickets}</div>
                                    :
                                    <div className="ticket-nro">{c.items[0].Total_tickets + c.items[1].Total_tickets + c.items[2].Total_tickets}</div>
                                }
                            </div>
                            <div className="box-prin margin-top-20 bg-transparent-white">
                                <div className="historial-text">SELECCIONE PARA VER DETALLES</div>
                            </div>
                            <div className="box-prin margin-top-20">
                                <table className="table-cont">
                                    <tbody>
                                    {c.box.Id_attender === 'M1' ?
                                    <div className="display-contents">
                                        <a key="103" className="display-contents" onClick={() => toggle_103()}>
                                            <tr className="tr-ticket">
                                                <td className="ticket-icon"><img src={img101} className="ticket-img"/></td>
                                                <td className="cantidad-ticket">{c.items[0].Total_tickets}</td>
                                                <td className="precio-ticket">s/. {c.items[0].Total_cash}</td>
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
                                                                <td className="cell-modal">{c.items[0].Name}</td>
                                                                <td className="cell-modal">{c.items[0].Total_tickets}</td>
                                                                <td className="cell-modal">s/.{c.items[0].Total_value}</td>
                                                                <td className="cell-modal">s/.{c.items[0].Total_cash}</td>
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

                                        <a key="104" className="display-contents" onClick={() => toggle_104()}>
                                            <tr className="tr-ticket">
                                                <td className="ticket-icon"><img src={img102} className="ticket-img"/></td>
                                                <td className="cantidad-ticket">{c.items[2].Total_tickets}</td>
                                                <td className="precio-ticket">s/.{c.items[2].Total_cash}</td>
                                            </tr>
                                        </a>

                                        <Modal isOpen={modal_104} toggle={toggle_104}>
                                            <ModalHeader toggle={toggle_104}>
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
                                                                <td className="cell-modal">{c.items[2].Name}</td>
                                                                <td className="cell-modal">{c.items[2].Total_tickets}</td>
                                                                <td className="cell-modal">s/.{c.items[2].Total_value}</td>
                                                                <td className="cell-modal">s/.{c.items[2].Total_cash}</td>
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
                                                <td className="cantidad-ticket">{c.items[1].Total_tickets}</td>
                                                <td className="precio-ticket">s/. {c.items[1].Total_cash}</td>
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
                                                                <td className="cell-modal">{c.items[1].Name}</td>
                                                                <td className="cell-modal">{c.items[1].Total_tickets}</td>
                                                                <td className="cell-modal">s/.{c.items[1].Total_value}</td>
                                                                <td className="cell-modal">s/.{c.items[1].Total_cash}</td>
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


                                        :

                                        <div className="display-contents">
                                            <a key="106" className="display-contents" onClick={() => toggle_108()}>
                                                <tr className="tr-ticket">
                                                    <td className="ticket-icon"><img src={img106} className="ticket-img"/></td>
                                                    <td className="cantidad-ticket">{c.items[0].Total_tickets + c.items[1].Total_tickets}</td>
                                                    <td className="precio-ticket">s/. {c.items[0].Total_cash + c.items[1].Total_cash}</td>
                                                </tr>
                                            </a>

                                            <Modal isOpen={modal_108} toggle={toggle_108}>
                                                <ModalHeader toggle={toggle_108}>
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
                                                                    <td className="cell-modal">{c.items[0].Name + ' Y ' + c.items[1].Name}</td>
                                                                    <td className="cell-modal">{parseFloat(c.items[0].Total_tickets) + parseFloat(c.items[1].Total_tickets)}</td>
                                                                    <td className="cell-modal">s/.{parseFloat(c.items[0].Total_value) + parseFloat(c.items[1].Total_value)}</td>
                                                                    <td className="cell-modal">s/.{c.items[0].Total_cash + c.items[1].Total_cash}</td>
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
                                    }

                                    <tr>
                                        <td colSpan="5" className="fecha-ticket">
                                            {c.box.Date_start_report.toString().split('T')[0]}
                                            {' ' + dataBase[id_database][1]}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>:''))}

                        <div className="box-prin margin-top-20 display-flex-money bg-fin">

                            <div className="button-fin button-fin-100"><button className="button-fecha button-fecha-icon" onClick={() => toggle_107()}><span className="icon"><ion-icon name="calendar-clear-outline"></ion-icon></span>POR DIAS</button></div>

                            <Modal isOpen={modal_107} toggle={toggle_107}>
                                <ModalHeader toggle={toggle_107}>
                                    <img src={img105} className="img-home"/>
                                    <p className="p-modal">Seleccionar <span className="span-modal">rango de fechas</span>.</p>
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
                                        {StoreDatos.a_o.map((c, i) => (
                                            c.box.Id_attender === 'M1' ?
                                            <div>
                                                <a onClick={() => setFechaRAngoSelect(c.box.Date_start_report)}>
                                                    <input key={c.box.Id_box} type="submit" className="submit-form submit-form-modal" value={c.box.Date_start_report.toString().split('T')[0] + " - " + c.box.Date_end_report.toString().split('T')[0]}/>
                                                </a>
                                            </div> : ''
                                        ))}
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
                            <div className="historial-text button-fecha-icon"><span className="icon"><ion-icon name="newspaper-outline"></ion-icon></span>HISTORIAL</div>
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
                        <div className="box-prin margin-top-20 display-flex-money display-block-money bg-fin">
                            <div className="button-fin"><button className="button-fecha button-fecha-icon" onClick={() => toggle_101()}><span className="icon"><ion-icon name="layers-outline"></ion-icon></span>BARRAS</button></div>

                            <Modal isOpen={modal_101} toggle={toggle_101}>
                                <ModalHeader toggle={toggle_101}>
                                    <img src={img104} className="img-home"/>
                                    <p className="p-modal">Seleccionar <span className="span-modal">local</span>.</p>
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

                            <div className="button-fin"><button className="button-fecha button-fecha-icon" onClick={() => toggle_102()}><span className="icon"><ion-icon name="calendar-clear-outline"></ion-icon></span>POR DIA</button></div>

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
                                                    <input key={fecha.id} type="submit" className="submit-form submit-form-modal" value={fecha.date_opening}/>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </div>
                {fechaSelect === '' ? '' :
                    <Reportes/>
                }
            </div>
    </>);

}

export default Principal;