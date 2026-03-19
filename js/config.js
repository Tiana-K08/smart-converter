// =============== Measurement Units Configuration ===============
const converterConfig = {
  length: {
    baseUnit: 'm',
    systems: {
      metric: {
        label: 'Metric System',
        units: [
          { value: 'mm', label: 'millimeter', toBase: 0.001 },
          { value: 'cm', label: 'centimeter', toBase: 0.01 },
          { value: 'dm', label: 'decimeter', toBase: 0.1 },
          { value: 'm', label: 'meter', toBase: 1 },
          { value: 'km', label: 'kilometer', toBase: 1000 },
        ],
      },
      imperial: {
        label: 'Imperial System',
        units: [
          { value: 'in', label: 'inch', toBase: 0.0254 },
          { value: 'ft', label: 'foot', toBase: 0.3048 },
          { value: 'yd', label: 'yard', toBase: 0.9144 },
          { value: 'mi', label: 'mile', toBase: 1609.34 },
        ],
      },
    },
  },
  weight: {
    baseUnit: 'kg',
    systems: {
      standard: {
        label: 'Weight Units',
        units: [
          { value: 'mg', label: 'milligram', toBase: 0.000001 },
          { value: 'g', label: 'gram', toBase: 0.001 },
          { value: 'kg', label: 'kilogram', toBase: 1 },
          { value: 't', label: 'tonne', toBase: 1000 },
        ],
      },
    },
  },
  temperature: {
    baseUnit: '°C',
    systems: {
      standard: {
        label: 'Temperature Units',
        units: [
          { value: '°C', label: 'Celsius', toBase: 1 },
          { value: '°F', label: 'Fahrenheit', toBase: 1 },
          { value: 'K', label: 'Kelvin', toBase: 1 },
        ],
      },
    },
  },
};
