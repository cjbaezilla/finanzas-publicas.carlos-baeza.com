import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import ValueWithChange from './ValueWithChange';

function SustainabilityIndicators() {
  const indicators = [
    {
      title: 'Proyección Deuda/PIB 2028',
      value: '42.5%',
      change: '+4.3pp vs actual',
      subtitle: 'Duración: 8.5 años',
    },
    {
      title: 'Costo Promedio Deuda',
      value: '4.8%',
      change: '+0.2pp vs 2022',
      subtitle: 'Duración: 8.5 años',
    },
    {
      title: 'Balance Primario',
      value: '-1.2% PIB',
      change: 'Meta: +0.5% PIB',
      subtitle: 'Anual',
    },
    {
      title: 'Multiplicador Fiscal',
      value: '0.9x',
      change: 'Rango: 0.6x - 1.2x',
      subtitle: 'Promedio',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {indicators.map((indicator, index) => (
        <Card key={index} className="bg-card hover:bg-card/90 transition-colors">
          <CardContent className="pt-6">
            <ValueWithChange
              title={indicator.title}
              value={indicator.value}
              change={indicator.change}
              subtitle={indicator.subtitle}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default SustainabilityIndicators; 