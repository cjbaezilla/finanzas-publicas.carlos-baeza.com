import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

function MainIndicators() {
  const indicators = [
    {
      title: 'PIB Nominal',
      value: '$245,678,901 M',
      change: '+2.3% vs año anterior',
      trend: 'positive',
    },
    {
      title: 'Tipo de Cambio',
      value: '$857.23 CLP/USD',
      change: '-1.5% última semana',
      trend: 'negative',
    },
    {
      title: 'Precio Cobre',
      value: '$3.85 USD/lb',
      change: '+0.8% último mes',
      trend: 'positive',
    },
    {
      title: 'Inflación Anual',
      value: '4.8%',
      change: '-2.1pp vs 2022',
      trend: 'positive',
    },
    {
      title: 'Brecha PIB',
      value: '-1.2%',
      change: 'vs PIB potencial',
      trend: 'negative',
    },
    {
      title: 'Riesgo País',
      value: '150 bps',
      change: '-25bps vs 2022',
      trend: 'positive',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {indicators.map((indicator, index) => (
        <Card 
          key={index} 
          className={`
            bg-card hover:bg-card/90 transition-colors
            ${indicator.trend === 'positive' ? 'border-l-4 border-l-green-500' : ''}
            ${indicator.trend === 'negative' ? 'border-l-4 border-l-red-500' : ''}
          `}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-medium">{indicator.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              <div className="text-3xl font-bold">{indicator.value}</div>
              <div className={`
                text-sm font-medium
                ${indicator.trend === 'positive' ? 'text-green-600' : ''}
                ${indicator.trend === 'negative' ? 'text-red-600' : ''}
              `}>
                {indicator.change}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default MainIndicators; 