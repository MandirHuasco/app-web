import React, {useState,useEffect} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import axios from "axios";

function InvoiceTableRow(){

    const borderColor = '#90e5fc'
    const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
            borderBottomColor: '#bff0fd',
            backgroundColor: '#f1e3ff',
            borderBottomWidth: 1,
            alignItems: 'center',
            height: 24,
            fontStyle: 'bold',
            fontSize: "14px",
        },
        descripcion: {
            width: '50%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            textAlign: 'left',
            paddingLeft: 8,
            fontSize: "10px",
        },
        cantidad: {
            width: '25%',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            textAlign: 'right',
            fontSize: "10px",
            paddingRight: 8,
        },
        total: {
            width: '25%',
            textAlign: 'right',
            fontSize: "10px",
            paddingRight: 8,
        },
    });

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

    let suma = 0;
    let idCont = 0;

    dataFechas.data && dataFechas.data.map((data) =>(
        suma = parseInt(data.total) + suma
    ));

    useEffect(()=>{
        FechaGetId();
    },[infoFechas])

    return (<>
        {dataFechas.data &&
        dataFechas.data.map((data) => (
            <View style={styles.row} key={idCont = idCont + 1}>
                <Text style={styles.descripcion}>{data.name}</Text>
                <Text style={styles.cantidad}>{parseFloat(data.cantidad)}</Text>
                <Text style={styles.total}>{data.total}</Text>
            </View>
        ))}
    </>);
}
export default InvoiceTableRow;

