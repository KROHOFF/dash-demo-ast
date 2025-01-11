import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BarCharts() {
  const data = [
    {
      name: "PUDUGUAPI S24",
      sfr_corregido_ayer: 4000,
      peso_hoy: 2400,
      sfr_corregido_hoy: 2400,
    },
    {
      name: "BECERRA S23",
      sfr_corregido_ayer: 3000,
      peso_hoy: 1398,
      sfr_corregido_hoy: 1398,
    },
    {
      name: "BAJOS LAMI",
      sfr_corregido_ayer: 2000,
      peso_hoy: 9800,
      sfr_corregido_hoy: 9800,
    },
    {
      name: "ALAO S24",
      sfr_corregido_ayer: 2780,
      peso_hoy: 3908,
      sfr_corregido_hoy: 3908,
    },
    {
      name: "POLOCUCHE S24",
      sfr_corregido_ayer: 1890,
      peso_hoy: 4800,
      sfr_corregido_hoy: 4800,
    },
    {
      name: "CHAITÉN",
      sfr_corregido_ayer: 2390,
      peso_hoy: 3800,
      sfr_corregido_hoy: 3800,
    },
    {
      name: "PIRQUEN",
      sfr_corregido_ayer: 3490,
      peso_hoy: 4300,
      sfr_corregido_hoy: 4300,
    },
  ];

  const data2 = [
    {
      name: "PUDUGUAPI S24",
      sfr_corregido_ayer: 4000,
      peso_hoy: 2400,
    },
    {
      name: "BECERRA S23",
      sfr_corregido_ayer: 3000,
      peso_hoy: 1398,
    },
    {
      name: "BAJOS LAMI",
      sfr_corregido_ayer: 2000,
      peso_hoy: 9800,
    },
    {
      name: "ALAO S24",
      sfr_corregido_ayer: 2780,
      peso_hoy: 3908,
    },
    {
      name: "POLOCUCHE S24",
      sfr_corregido_ayer: 1890,
      peso_hoy: 4800,
    },
    {
      name: "CHAITÉN",
      sfr_corregido_ayer: 2390,
      peso_hoy: 3800,
    },
    {
      name: "PIRQUEN",
      sfr_corregido_ayer: 3490,
      peso_hoy: 4300,
    },
  ];

  return (
    <>
      <BarChart width={1100} height={150} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar radius={3} dataKey="peso_hoy" fill="#4ade80" />
        <Bar radius={3} dataKey="sfr_corregido_ayer" fill="#c084fc" />
        <Bar radius={3} dataKey="sfr_corregido_hoy" fill="#fb7185" />
      </BarChart>
      <BarChart width={1100} height={150} data={data2}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar radius={3} dataKey="peso_hoy" fill="#1c4be3" />
        <Bar radius={3} dataKey="sfr_corregido_ayer" fill="#1c72e3" />
      </BarChart>
    </>
  );
}


