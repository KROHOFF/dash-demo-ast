import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"; // Solo importa ResponsiveContainer una vez
import PropTypes from "prop-types";

export const Graficos = ({ data }) => (
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

Graficos.propTypes = {
  data: PropTypes.array.isRequired, // Definimos que 'data' debe ser un array
};

export const GraficosPie = ({ data }) => (
  <ResponsiveContainer width="100%" height={123}>
    {" "}
    {/* Usamos el mismo ResponsiveContainer */}
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius="80%"
        fill="#0ea5e9"
        label
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

GraficosPie.propTypes = {
  data: PropTypes.array.isRequired, // Definimos que 'data' debe ser un array
};

export const GraficosArcoiris = ({ data }) => (
  <ResponsiveContainer width="100%" height={223}>
    <AreaChart data={data}>
      <defs>
        <linearGradient id="arcoiris" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF0000" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#FF0000" stopOpacity={0} />
        </linearGradient>
      </defs>

      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      <Area type="monotone" dataKey="ppm" stroke="#000" fill="#fff" />
    </AreaChart>
  </ResponsiveContainer>
);

GraficosArcoiris.propTypes = {
  data: PropTypes.array.isRequired, // Aseguramos que data sea un array
};

export const GraficosArcoCircular = ({ data }) => {
  const rainbowColors = [
    "#000", // Rojo
  ];

  return (
    <ResponsiveContainer width="100%" height={223}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius="67%"
          outerRadius="80%"
          startAngle={0}
          endAngle={130} // Aquí configuramos el arco (180° para un semicírculo)
          paddingAngle={19}
          isAnimationActive={true}
        >
          {/* Usar colores del arcoiris para las secciones */}
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={rainbowColors[index % rainbowColors.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

GraficosArcoCircular.propTypes = {
  data: PropTypes.array.isRequired, // Aseguramos que data sea un array
};
