import React from 'react';

function ValueWithChange({ title, value, change, subtitle, className = '' }) {
  const isPositive = change && change.startsWith('+');
  const isNegative = change && change.startsWith('-');

  return (
    <div className={`space-y-1 ${className}`}>
      <h4 className="font-medium text-sm text-muted-foreground">{title}</h4>
      <div className="text-2xl font-bold">{value}</div>
      {change && (
        <div
          className={`text-sm font-medium ${
            isPositive ? 'text-green-600' :
            isNegative ? 'text-red-600' :
            'text-muted-foreground'
          }`}
        >
          {change}
        </div>
      )}
      {subtitle && (
        <div className="text-xs text-muted-foreground">
          {subtitle}
        </div>
      )}
    </div>
  );
}

export default ValueWithChange; 