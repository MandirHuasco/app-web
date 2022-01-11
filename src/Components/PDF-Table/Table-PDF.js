import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './TableHeader-PDF'
import InvoiceTableRow from './Table-Row'
import InvoiceTableFooter from './TableFooter-PDF'

function InvoiceItemsTable(){
    const styles = StyleSheet.create({
        tableContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: 24,
            borderWidth: 1,
            borderColor: '#bff0fd',
        },
    });

    return(<>
        <View style={styles.tableContainer}>
            <InvoiceTableHeader />
            <InvoiceTableRow/>
            <InvoiceTableFooter/>
        </View>
        </>);
}
export default InvoiceItemsTable;