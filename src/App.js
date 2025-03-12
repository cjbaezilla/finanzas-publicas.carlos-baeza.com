import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './components/ui/tabs';
import MainIndicators from './components/MainIndicators';
import SustainabilityIndicators from './components/SustainabilityIndicators';
import ChartCard from './components/ChartCard';
import ValueWithChange from './components/ValueWithChange';
import Header from './components/Header';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registramos los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  // Datos de ejemplo para los gráficos
  const chartData = {
    balanceFiscal: {
      labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Balance Fiscal (% PIB)',
          data: [-1.6, -2.1, -2.7, -2.8, -1.9, -2.9, -7.3, -7.6, -2.0, -1.1],
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.5)',
          tension: 0.4,
        },
        {
          label: 'Balance Primario (% PIB)',
          data: [-0.6, -1.0, -1.5, -1.5, -0.5, -1.3, -5.5, -5.7, 0.1, 1.2],
          borderColor: 'rgb(16, 185, 129)',
          backgroundColor: 'rgba(16, 185, 129, 0.5)',
          tension: 0.4,
        },
      ],
    },
    deudaPublica: {
      labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Deuda Bruta (% PIB)',
          data: [15.0, 17.3, 21.0, 23.6, 25.6, 28.0, 32.5, 36.3, 38.0, 37.5],
          borderColor: 'rgb(244, 63, 94)',
          backgroundColor: 'rgba(244, 63, 94, 0.5)',
          tension: 0.4,
        },
      ],
    },
    ingresosFiscales: {
      labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Ingresos Tributarios',
          data: [17.0, 17.5, 17.3, 17.8, 18.6, 18.2, 16.5, 17.8, 19.2, 19.5],
          borderColor: 'rgb(139, 92, 246)',
          backgroundColor: 'rgba(139, 92, 246, 0.5)',
          tension: 0.4,
        },
        {
          label: 'Ingresos Cobre',
          data: [2.1, 1.8, 1.5, 1.7, 2.0, 1.8, 1.6, 2.5, 2.8, 2.3],
          borderColor: 'rgb(245, 158, 11)',
          backgroundColor: 'rgba(245, 158, 11, 0.5)',
          tension: 0.4,
        },
      ],
    },
    gastosFiscales: {
      labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
      datasets: [
        {
          label: 'Gasto Corriente',
          data: [18.5, 19.2, 19.8, 20.1, 20.2, 20.8, 23.5, 24.8, 21.0, 20.2],
          borderColor: 'rgb(236, 72, 153)',
          backgroundColor: 'rgba(236, 72, 153, 0.5)',
          tension: 0.4,
        },
        {
          label: 'Inversión Pública',
          data: [4.2, 4.3, 4.1, 3.9, 4.0, 4.1, 4.5, 4.8, 4.3, 4.3],
          borderColor: 'rgb(14, 165, 233)',
          backgroundColor: 'rgba(14, 165, 233, 0.5)',
          tension: 0.4,
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pb-8">
        {/* Indicadores Principales */}
        <div className="mb-8">
          <MainIndicators />
        </div>

        {/* Pestañas principales */}
        <Tabs defaultValue="gobierno-central" className="space-y-4">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="gobierno-central">Gobierno Central</TabsTrigger>
            <TabsTrigger value="deuda">Deuda Pública</TabsTrigger>
            <TabsTrigger value="ingresos">Ingresos Fiscales</TabsTrigger>
            <TabsTrigger value="gastos">Gastos Fiscales</TabsTrigger>
          </TabsList>

          <TabsContent value="gobierno-central" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard 
                title="Balance Fiscal"
                data={chartData.balanceFiscal}
              />

              <Card>
                <CardHeader>
                  <CardTitle>Indicadores de Sostenibilidad</CardTitle>
                </CardHeader>
                <CardContent>
                  <SustainabilityIndicators />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="deuda" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard 
                title="Evolución de la Deuda Pública"
                data={chartData.deudaPublica}
              />

              <Card>
                <CardHeader>
                  <CardTitle>Composición de la Deuda</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ValueWithChange
                    title="Deuda Externa"
                    value="27.1%"
                    change="-2.3pp vs 2022"
                    subtitle="del total"
                  />
                  <ValueWithChange
                    title="Vida Media"
                    value="8.5 años"
                    change="+0.3 años vs 2022"
                    subtitle="promedio ponderado"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="ingresos" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard 
                title="Composición de Ingresos Fiscales"
                data={chartData.ingresosFiscales}
              />

              <Card>
                <CardHeader>
                  <CardTitle>Presión Tributaria</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ValueWithChange
                    title="Total"
                    value="20.7% PIB"
                    change="+1.5pp vs 2022"
                    subtitle="OCDE: 34.1%"
                  />
                  <ValueWithChange
                    title="Carga Tributaria Empresas"
                    value="8.2% PIB"
                    change="+0.3pp vs 2022"
                    subtitle="OCDE: 9.5%"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="gastos" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <ChartCard 
                title="Distribución del Gasto Público"
                data={chartData.gastosFiscales}
              />

              <Card>
                <CardHeader>
                  <CardTitle>Eficiencia del Gasto</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ValueWithChange
                    title="Gasto Social"
                    value="13.2% PIB"
                    change="-0.8pp vs 2022"
                    subtitle="OCDE: 20.1%"
                  />
                  <ValueWithChange
                    title="Inversión Pública"
                    value="4.3% PIB"
                    change="+0.0pp vs 2022"
                    subtitle="Meta: 5.0%"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
