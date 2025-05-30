export const generateChartUrl = (labels, values) => {
  const config = {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Exemplo de Dados',
          data: values,
          backgroundColor: 'rgba(75,192,192,0.6)',
        },
      ],
    },
  };

  return `https://quickchart.io/chart?c=${encodeURIComponent(JSON.stringify(config))}`;
};
