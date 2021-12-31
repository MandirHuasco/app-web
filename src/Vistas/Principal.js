import React, {useState, useEffect} from "react";
import axios from "axios";

import StoreDatos from "../functions/Store";

import {faTicketAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

import img101 from '../img/ticket-001.png';
import img102 from '../img/ticket-002.png';
import img103 from '../img/ticket-003.png';
import img104 from '../img/home.png';
import img105 from '../img/fecha.png';
import img106 from '../img/ticket-004.png';
import img107 from '../img/caja.png';

const ticket = <FontAwesomeIcon icon={faTicketAlt} />;

function Page2() {

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

    const toggle_101 = () => setModal_101(!modal_101);
    const toggle_102 = () => setModal_102(!modal_102);
    const toggle_103 = () => setModal_103(!modal_103);
    const toggle_104 = () => setModal_104(!modal_104);
    const toggle_105 = () => setModal_105(!modal_105);
    const toggle_106 = () => setModal_106(!modal_106);

    const [fechas, setFechas]= useState([]);

    const FechaGet = async() => {

        await axios.get("http://apita.traker.ga/monitoreo/get_info_fech.php?database=gaaa&sede=gaaaaa")
            .then(response => {
                setFechas(response.data);

            }).catch(error=>{
                console.log(error);
            })
    }

    useEffect(()=>{
        FechaGet();
    },[])

    return (<>
            <div className="App App-prin">
                <div className="background-image background-image-prin">
                </div>

                <div className="cont-sub-prin">
                    <div className="prin-total">
                        {StoreDatos.a_f.map((c, i) => (
                            c.box.Id_box === 734 ?
                        <div>
                            <div className="display-flex-money">
                                <div className="money-icon">S/.</div>
                                <div className="total-money">
                                    {c.items[0].Total_cash + c.items[1].Total_cash + c.items[2].Total_cash}
                                </div>
                            </div>
                            <div className="cont-ticket">
                                <i className="ticket">{ticket}</i>
                                <div className="ticket-nro">{c.items[0].Total_tickets + c.items[1].Total_tickets + c.items[2].Total_tickets}</div>
                            </div>
                            <div className="box-prin">
                                <div className="enabled-div">
                                    <img src={img107} className="ticket-img caja-cont"/>
                                </div>
                                <table className="table-cont">
                                    <tbody>
                                    <tr className="disabled-tr">
                                        <td rowSpan="3"><img src={img107} className="ticket-img caja-cont"/></td>
                                    </tr>
                                    <tr>
                                        <td className="cantidad-ticket caja"><div className="led-enable"></div><p className="caja-led">Caja abierta</p></td>
                                    </tr>
                                    <tr>
                                        <td className="cantidad-ticket caja"><div className="led-disabled"></div><p className="caja-led">Caja cerrada</p></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="box-prin margin-top-20 bg-transparent-white">
                                <div className="historial-text">SELECCIONE PARA VER DETALLES</div>
                            </div>
                            <div className="box-prin margin-top-20">
                                <table className="table-cont">
                                    <tbody>
                                    <a key="103" className="display-contents" onClick={() => toggle_103()}>
                                        <tr className="tr-ticket">
                                            <td className="estado-caja disabled-td">
                                                <div className="led-enable"></div>
                                            </td>
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
                                            <div className="cont-select-modal">
                                                <table className="table-cont-modal">
                                                    <tbody>
                                                    <tr className="tr-head-modal">
                                                        <td className="cell-modal">Estado</td>
                                                        <td className="cell-modal">Cantidad</td>
                                                        <td className="cell-modal">Total</td>
                                                    </tr>
                                                    <tr className="">
                                                        <td className="estado-caja bg-estado">
                                                            <div className="led-enable"></div>
                                                        </td>
                                                        <td className="cell-modal">{c.items[0].Total_tickets}</td>
                                                        <td className="cell-modal">s/. {c.items[0].Total_cash}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="cont-select-modal margin-top-20">
                                                <table className="table-cont-modal">
                                                    <tbody>
                                                    <tr className="tr-head-modal">
                                                        <td className="cell-modal">Fecha</td>
                                                        <td className="cell-modal">Sede</td>
                                                    </tr>
                                                    <tr className="">
                                                        <td className="cell-modal">2021/11/15</td>
                                                        <td className="cell-modal">Sede Ate</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                        </ModalFooter>
                                    </Modal>

                                    <a key="104" className="display-contents" onClick={() => toggle_104()}>
                                        <tr className="tr-ticket">
                                            <td className="estado-caja disabled-td">
                                                <div className="led-enable"></div>
                                            </td>
                                            <td className="ticket-icon"><img src={img102} className="ticket-img"/></td>
                                            <td className="cantidad-ticket">{c.items[2].Total_tickets}</td>
                                            <td className="precio-ticket">s/. {c.items[2].Total_cash}</td>
                                        </tr>
                                    </a>

                                    <Modal isOpen={modal_104} toggle={toggle_104}>
                                        <ModalHeader toggle={toggle_104}>
                                            <img src={img102} className="img-home"/>
                                            <p className="p-modal">Detalles de <span className="span-modal">COCHES</span>.</p>
                                        </ModalHeader>
                                        <ModalBody>
                                            <div className="cont-select-modal">
                                                <table className="table-cont-modal">
                                                    <tbody>
                                                    <tr className="tr-head-modal">
                                                        <td className="cell-modal">Estado</td>
                                                        <td className="cell-modal">Cantidad</td>
                                                        <td className="cell-modal">Total</td>
                                                    </tr>
                                                    <tr className="">
                                                        <td className="estado-caja bg-estado">
                                                            <div className="led-enable"></div>
                                                        </td>
                                                        <td className="cell-modal">{c.items[2].Total_tickets}</td>
                                                        <td className="cell-modal">s/. {c.items[2].Total_cash}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="cont-select-modal margin-top-20">
                                                <table className="table-cont-modal">
                                                    <tbody>
                                                    <tr className="tr-head-modal">
                                                        <td className="cell-modal">Fecha</td>
                                                        <td className="cell-modal">Sede</td>
                                                    </tr>
                                                    <tr className="">
                                                        <td className="cell-modal">2021/11/15</td>
                                                        <td className="cell-modal">Sede Ate</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                        </ModalFooter>
                                    </Modal>

                                    <a key="105" className="display-contents" onClick={() => toggle_105()}>
                                        <tr className="tr-ticket">
                                            <td className="estado-caja disabled-td">
                                                <div className="led-disabled"></div>
                                            </td>
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
                                            <div className="cont-select-modal">
                                                <table className="table-cont-modal">
                                                    <tbody>
                                                    <tr className="tr-head-modal">
                                                        <td className="cell-modal">Estado</td>
                                                        <td className="cell-modal">Cantidad</td>
                                                        <td className="cell-modal">Total</td>
                                                    </tr>
                                                    <tr className="">
                                                        <td className="estado-caja bg-estado">
                                                            <div className="led-disabled"></div>
                                                        </td>
                                                        <td className="cell-modal">{c.items[1].Total_tickets}</td>
                                                        <td className="cell-modal">s/. {c.items[1].Total_cash}</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="cont-select-modal margin-top-20">
                                                <table className="table-cont-modal">
                                                    <tbody>
                                                    <tr className="tr-head-modal">
                                                        <td className="cell-modal">Fecha</td>
                                                        <td className="cell-modal">Sede</td>
                                                    </tr>
                                                    <tr className="">
                                                        <td className="cell-modal">2021/11/15</td>
                                                        <td className="cell-modal">Sede Ate</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                        </ModalFooter>
                                    </Modal>

                                    <a key="106" className="display-contents" onClick={() => toggle_106()}>
                                        <tr className="tr-ticket">
                                            <td className="estado-caja disabled-td">
                                                <div className="led-enable"></div>
                                            </td>
                                            <td className="ticket-icon"><img src={img106} className="ticket-img"/></td>
                                            <td className="cantidad-ticket">--</td>
                                            <td className="precio-ticket">s/. --</td>
                                        </tr>
                                    </a>

                                    <Modal isOpen={modal_106} toggle={toggle_106}>
                                        <ModalHeader toggle={toggle_106}>
                                            <img src={img106} className="img-home"/>
                                            <p className="p-modal">Detalles de <span className="span-modal">CUARTOS</span>.</p>
                                        </ModalHeader>
                                        <ModalBody>
                                            <div className="cont-select-modal">
                                                <table className="table-cont-modal">
                                                    <tbody>
                                                    <tr className="tr-head-modal">
                                                        <td className="cell-modal">Estado</td>
                                                        <td className="cell-modal">Cantidad</td>
                                                        <td className="cell-modal">Total</td>
                                                    </tr>
                                                    <tr className="">
                                                        <td className="estado-caja bg-estado">
                                                            <div className="led-disabled"></div>
                                                        </td>
                                                        <td className="cell-modal">--</td>
                                                        <td className="cell-modal">s/. --</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="cont-select-modal margin-top-20">
                                                <table className="table-cont-modal">
                                                    <tbody>
                                                    <tr className="tr-head-modal">
                                                        <td className="cell-modal">Fecha</td>
                                                        <td className="cell-modal">Sede</td>
                                                    </tr>
                                                    <tr className="">
                                                        <td className="cell-modal">2021/11/15</td>
                                                        <td className="cell-modal">Sede Ate</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </ModalBody>
                                        <ModalFooter>
                                            <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                        </ModalFooter>
                                    </Modal>

                                    <tr>
                                        <td colSpan="5" className="fecha-ticket">2021-11-15 Sede Ate</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>:''))}
                        <div className="box-prin margin-top-20 bg-transparent-white">
                            <div className="historial-text">HISTORIAL</div>
                        </div>
                        <div className="box-prin margin-top-20">
                            <table className="table-cont">
                                <tbody>
                                <tr>
                                    <td className="fecha-hist-head">Fecha</td>
                                    <td className="fecha-hist-head">Total</td>
                                </tr>
                                {fechas &&
                                fechas.map((fecha) => (
                                    <tr>
                                        <td className="fecha-hist-head">{fecha.date_opening}</td>
                                        <td className="fecha-hist-head">Total</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="box-prin margin-top-20 display-flex-money bg-fin">
                            <div className="button-fin"><button className="button-fecha" onClick={() => toggle_101()}>SEDE ATE</button></div>

                            <Modal isOpen={modal_101} toggle={toggle_101}>
                                <ModalHeader toggle={toggle_101}>
                                    <img src={img104} className="img-home"/>
                                    <p className="p-modal">Seleccionar <span className="span-modal">local</span>.</p>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="cont-select-modal">
                                        <form action="">
                                            <input type="hidden" name="" value="Sede Ate"/>
                                            <input type="submit" className="submit-form submit-form-modal" value="Sede Ate"/>
                                        </form>
                                        <form action="">
                                            <input type="hidden" name="" value="Sede Olivos"/>
                                            <input type="submit" className="submit-form submit-form-modal" value="Sede Olivos"/>
                                        </form>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                </ModalFooter>
                            </Modal>

                            <div className="button-fin"><button className="button-fecha" onClick={() => toggle_102()}>POR DIA</button></div>

                            <Modal isOpen={modal_102} toggle={toggle_102}>
                                <ModalHeader toggle={toggle_102}>
                                    <img src={img105} className="img-home"/>
                                    <p className="p-modal">Seleccionar <span className="span-modal">fecha</span>.</p>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="cont-select-modal">
                                        <form action="">
                                            <input type="hidden" name="" value="2021-11-14"/>
                                            <input type="submit" className="submit-form submit-form-modal" value="2021-11-14"/>
                                        </form>
                                        <form action="">
                                            <input type="hidden" name="" value="2021-11-13"/>
                                            <input type="submit" className="submit-form submit-form-modal" value="2021-11-13"/>
                                        </form>
                                        <form action="">
                                            <input type="hidden" name="" value="2021-11-12"/>
                                            <input type="submit" className="submit-form submit-form-modal" value="2021-11-12"/>
                                        </form>
                                        <form action="">
                                            <input type="hidden" name="" value="2021-11-11"/>
                                            <input type="submit" className="submit-form submit-form-modal" value="2021-11-11"/>
                                        </form>
                                        <form action="">
                                            <input type="hidden" name="" value="2021-11-10"/>
                                            <input type="submit" className="submit-form submit-form-modal" value="2021-11-10"/>
                                        </form>
                                        <form action="">
                                            <input type="hidden" name="" value="2021-11-09"/>
                                            <input type="submit" className="submit-form submit-form-modal" value="2021-11-09"/>
                                        </form>
                                        <form action="">
                                            <input type="hidden" name="" value="2021-11-08"/>
                                            <input type="submit" className="submit-form submit-form-modal" value="2021-11-08"/>
                                        </form>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <p className="p-modal p-modal-footer"><span className="span-modal span-footer">Desarrollado por N&W Seguridad Total</span></p>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>
                </div>

            </div>
        }
    </>);

}

export default Page2;