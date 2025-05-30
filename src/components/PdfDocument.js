import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  title: { fontSize: 18, marginBottom: 10 },
  chart: { width: 400, height: 200, marginBottom: 20 },
  table: { borderWidth: 1, borderColor: '#000' },
  row: { flexDirection: 'row' },
  cell: { flex: 1, padding: 5, borderRightWidth: 1, borderBottomWidth: 1 },
});

export const PdfDocument = ({ chartUrl, data }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Relatório PDF</Text>
      <Image src={chartUrl} style={styles.chart} />
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.cell}>Item</Text>
          <Text style={styles.cell}>Valor</Text>
        </View>
        {data.map((item, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.cell}>{item.a}</Text>
            <Text style={styles.cell}>{item.b}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
