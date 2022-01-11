import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#000',
        backgroundColor: '#1d4984',
        color: '#fff',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        fontSize: "14px",
    },
    descripcion: {
        width: '50%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    cantidad: {
        width: '25%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    total: {
        width: '25%'
    },
});

const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.descripcion}>Descripción</Text>
        <Text style={styles.cantidad}>Cantidad</Text>
        <Text style={styles.total}>Total</Text>
    </View>
);

export default InvoiceTableHeader