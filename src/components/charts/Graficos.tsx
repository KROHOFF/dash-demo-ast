import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Definir la interfaz para el tipo de los datos
interface DataPoint {
  name: string;
  ppm: number;
}

// Declarar el tipo de las props del componente
interface GraficosProps {
  data: DataPoint[];  // data debe ser un arreglo de objetos con propiedades name (string) y ppm (number)
}

// Componente Graficos
export const Graficos: React.FC<GraficosProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height={209}>
    <AreaChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="ppm" stroke="#0ea5e9" fill="#0955e9" />
    </AreaChart>
  </ResponsiveContainer>
);
