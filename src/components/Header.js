import React from 'react';

function Header() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4 mb-8 rounded-lg shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Dashboard Finanzas Públicas Chile
        </h1>
        <p className="text-center text-blue-100 text-lg">
          Análisis y seguimiento de indicadores económicos 2014-2023
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <div className="bg-white/10 px-4 py-2 rounded-lg">
            <span className="text-sm text-blue-100">Última actualización</span>
            <div className="font-semibold">Marzo 2024</div>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-lg">
            <span className="text-sm text-blue-100">Fuente de datos</span>
            <div className="font-semibold">Ministerio de Hacienda</div>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-lg">
            <span className="text-sm text-blue-100">Periodicidad</span>
            <div className="font-semibold">Mensual</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header; 