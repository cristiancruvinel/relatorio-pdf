import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { PdfDocument } from './components/PdfDocument';
import { generateChartUrl } from './components/generateChartUrl';

function App() {
  const data = [
    { a: 'Item 1', b: 10 },
    { a: 'Item 2', b: 20 },
    { a: 'Item 3', b: 30 },
  ];

  const chartUrl = generateChartUrl(
    data.map((item) => item.a),
    data.map((item) => item.b)
  );

  return (
    <div style={{ padding: 30 }}>
      <h1>Gerador de Relatório PDF</h1>
      <PDFDownloadLink
        document={<PdfDocument chartUrl={chartUrl} data={data} />}
        fileName="relatorio.pdf"
      >
        {({ loading }) =>
          loading ? 'Gerando PDF...' : <button>Baixar Relatório PDF</button>
        }
      </PDFDownloadLink>
    </div>
  );
}

export default App;
