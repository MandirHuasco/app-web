import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';
import axios from "axios";

function InvoiceTableFooter(){
    const borderColor = '#90e5fc'
    const styles = StyleSheet.create({
        row: {
            flexDirection: 'row',
            borderBottomColor: '#bff0fd',
            borderBottomWidth: 1,
            alignItems: 'center',
            height: 24,
            fontSize: 14,
            fontStyle: 'bold',
        },
        description: {
            width: '85%',
            textAlign: 'right',
            borderRightColor: borderColor,
            borderRightWidth: 1,
            paddingRight: 8,
        },
        total: {
            width: '15%',
            textAlign: 'right',
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

    dataFechas.data && dataFechas.data.map((data) =>(
        suma = parseInt(data.total) + suma
    ));

    useEffect(()=>{
        FechaGetId();
    },[infoFechas])

    return (<>
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.total}>{suma}</Text>
        </View>
    </>);
}
export default InvoiceTableFooter


