"use client";
import { IconRefresh } from "justd-icons";
import { Select, Checkbox, Button, Grid } from "@/components/ui";
import { Graficos } from "@/components/charts/Graficos";
import DatosGenerales from "@/layouts/data/DatosGenerales";
import dataGeneral from "@/layouts/data/DataGeneral";

import { Container } from "@/layouts/Container";
import LineCharts from "@/components/charts/LineCharts";
import DatosJaula from "@/layouts/data/DatosJaula";

export const centros = [
  { id: 1, name: "Becerra S23" },
  { id: 2, name: "Chaitén" },
  { id: 3, name: "San Antonio" },
  { id: 4, name: "Santiago" },
  { id: 5, name: "Santa Fe" },
  { id: 6, name: "Santa Rosa" },
];

const data = [
  { name: "07:00", ppm: "0.002", pv: 2400, amt: 2400 },
  { name: "08:00", ppm: "0.007", pv: 1398, amt: 2210 },
  { name: "09:00", ppm: "0.003", pv: 9800, amt: 2290 },
  { name: "10:00", ppm: "0.002", pv: 3908, amt: 2000 },
  { name: "11:00", ppm: "0.002", pv: 4800, amt: 2181 },
];
const data2 = [
  { name: "07:00", ppm: "0.002", pv: 2400, amt: 2400 },
  { name: "08:00", ppm: "0.002", pv: 1398, amt: 2210 },
  { name: "09:00", ppm: "0.003", pv: 9800, amt: 2290 },
  { name: "10:00", ppm: "0.002", pv: 3908, amt: 2000 },
  { name: "11:00", ppm: "0.005", pv: 4800, amt: 2181 },
];

const data3 = [
  { name: "07:00", ppm: "0.001", pv: 2400, amt: 2400 },
  { name: "08:00", ppm: "0.005", pv: 1398, amt: 2210 },
  { name: "09:00", ppm: "0.003", pv: 9800, amt: 2290 },
  { name: "10:00", ppm: "0.007", pv: 3908, amt: 2000 },
  { name: "11:00", ppm: "0.005", pv: 4800, amt: 2181 },
];
const data4 = [
  { name: "07:00", ppm: "0.009", pv: 2400, amt: 2400 },
  { name: "08:00", ppm: "0.002", pv: 1398, amt: 2210 },
  { name: "09:00", ppm: "0.005", pv: 9800, amt: 2290 },
  { name: "10:00", ppm: "0.007", pv: 3908, amt: 2000 },
  { name: "11:00", ppm: "0.005", pv: 4800, amt: 2181 },
];

const data5 = [
  { name: "07:00", ppm: "0.000", pv: 2400, amt: 2400 },
  { name: "08:00", ppm: "0.000", pv: 1398, amt: 2210 },
  { name: "09:00", ppm: "0.006", pv: 9800, amt: 2290 },
  { name: "10:00", ppm: "0.001", pv: 3908, amt: 2000 },
  { name: "11:00", ppm: "0.005", pv: 4800, amt: 2181 },
];

export default function Dashboard() {
  return (
    <Container className="min-h-screen w-full flex flex-col gap-2 inset-0 shadow shadow-neutral-800 rounded-3xl">
      <Grid gap={1} className="w-full">
        <PrimeraFila />
        <SegundaFila />
        <SegundaFila />
        <CuartaFila />
      </Grid>
    </Container>
  );
}

function PrimeraFila() {
  return (
    <Grid
      columns={6}
      rows={1}
      gap={2}
      className="rounded-2xl  w-full bg-neutral-950 backdrop-blur-3xl shadow shadow-neutral-800 p"
    >
      <Grid.Item className="flex flex-col justify-start  shadow shadow-neutral-800 rounded-xl p-1">
        {dataGeneral.map((item) => {
          if (item.id === 1) {
            return (
              <DatosGenerales
                key={item.id}
                name={item.name}
                estado={item.estado}
                estadoColor={item.estadoColor}
                location={item.location}
                color={item.color}
                tipo={item.tipo}
              />
            );
          }
          return null; // Si no cumple la condición, no renderiza nada
        })}
      </Grid.Item>
      <Grid.Item className="flex flex-col justify-start  shadow shadow-neutral-800  p-1">
        <div className="w-full grid grid-cols-1 border-b border-neutral-800">
          <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
            Módulo
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2 h-full justify-center p-2">
          <Grid.Item className="border border-sky-500 flex justify-center items-center  rounded">
            <p className="font-black text-2xl text-sky-500">M100</p>
          </Grid.Item>
          <Grid.Item className="flex flex-col justify-center items-center text-sky-500 font-semibold">
            <button className="relative rounded-xl px-8 hover:bg-neutral-950 shadow shadow-sky-500 border border-sky-600 hover:border-2 hover:border-sky-400 py-2">
              Alertas
              <span className="absolute  -top-2 -right-1 text-xs font-black border border-red-500   bg-red-500 px-1 rounded-lg text-white">
                1
              </span>
            </button>
          </Grid.Item>
        </div>
      </Grid.Item>
      <Grid.Item colSpan={2} className=" gap-2 h-full justify-center ">
        <div className="col-span-2 w-full">
          <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
            Cambiar Centro
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2 mt-5">
          <div>
            <Select className="dark" placeholder="Seleccionar Centro...">
              <Select.Trigger />
              <Select.List className="dark" items={centros}>
                {(item) => (
                  <Select.Option id={item.id} textValue={item.name}>
                    {item.name}
                  </Select.Option>
                )}
              </Select.List>
            </Select>
          </div>
          <div>
            <Select className="dark" placeholder="Seleccionar Centro...">
              <Select.Trigger />
              <Select.List className="dark" items={centros}>
                {(item) => (
                  <Select.Option id={item.id} textValue={item.name}>
                    {item.name}
                  </Select.Option>
                )}
              </Select.List>
            </Select>
          </div>
          <div className=" flex justify-center items-center">
            <Checkbox className={"dark"}>Seleccionar Centro</Checkbox>
          </div>
          <div className=" flex justify-center items-center">
            <Button className="dark">
              <IconRefresh />
              Cambiar
            </Button>
          </div>
        </div>
      </Grid.Item>
      <Grid.Item className="flex flex-col justify-start  shadow shadow-neutral-800  p-1">
        <div className="w-full grid grid-cols-1 border-b border-neutral-800">
          <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
            Módulo
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2 h-full justify-center p-2">
          <Grid.Item className="flex flex-col justify-center items-center text-sky-500 font-semibold">
            <button className="relative rounded-xl px-8 hover:bg-neutral-950 shadow shadow-sky-500 border border-sky-600 hover:border-2 hover:border-sky-400 py-2">
              Alertas
              <span className="absolute  -top-2 -right-1 text-xs font-black border border-red-500   bg-red-500 px-1 rounded-lg text-white">
                1
              </span>
            </button>
          </Grid.Item>
          <Grid.Item className="border border-sky-500 flex justify-center items-center  rounded">
            <p className="font-black text-2xl text-sky-500">M100</p>
          </Grid.Item>
        </div>
      </Grid.Item>
      <Grid.Item className="flex flex-col justify-start  shadow shadow-neutral-800 rounded-s-xl p-1">
        {dataGeneral.map((item) => {
          if (item.id === 3) {
            return (
              <DatosGenerales
                key={item.id}
                name={item.name}
                estado={item.estado}
                estadoColor={item.estadoColor}
                location={item.location}
                tipo={item.tipo}
              />
            );
          }
          return null; // Si no cumple la condición, no renderiza nada
        })}
      </Grid.Item>
    </Grid>
  );
}
function SegundaFila() {
  return (
    <Grid
      columns={4}
      gap={2}
      className=" rounded-2xl border-t border-black/90  w-full bg-neutral-950/90 shadow shadow-neutral-800 overflow-hidden"
    >
      <Grid.Item>
        <DatosJaula />
      </Grid.Item>
      <Grid.Item>
        <Graficos data={data3} />
      </Grid.Item>
      <Grid.Item>
        <Graficos data={data} />
      </Grid.Item>
      <Grid.Item>
        <DatosJaula />
      </Grid.Item>
    </Grid>
  );
}

function CuartaFila() {
  return (
    <div className="grid grid-cols-4  gap-2 rounded-2xl border-t border-black/90  w-full bg-neutral-950/90 shadow shadow-neutral-800 overflow-hidden">
      <article>
        <div className="w-full grid grid-cols-1 border-b border-neutral-800">
          <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
            Balance de la Semana
          </h2>
        </div>
        <div className="grid grid-cols-1 grid-rows-2  justify-center p-2">
          <div className="border border-neutral-950/70">
            <table className="table-auto w-full">
              <thead className="text-center bg-neutral-700">
                <tr>
                  <th className="text-center">
                    <p className="text-xs text-neutral-400 ">Fecha</p>
                  </th>
                  <th className="text-center">
                    <p className="text-xs text-neutral-400 ">Alimento (Kg)</p>
                  </th>
                  <th className="text-center">
                    <p className="text-xs text-neutral-400 ">Alimentado</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center border-b border-neutral-800">
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">2025/01/02</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">9,361 Kg</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">07:00:32</p>
                  </td>
                </tr>
                <tr className="text-center border-b border-neutral-800">
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">2025/01/01</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">10,361 Kg</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">04:30:53</p>
                  </td>
                </tr>
                <tr className="bg-neutral-950/90 text-center border-b border-neutral-800">
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">2024/12/31</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">4,361 Kg</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">01:50:12</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
      <article className="col-span-2 overflow-hidden">
        {/* <GraficosPie data={dataPie} /> */}
        <LineCharts />
      </article>

      <article>
        <div className="w-full grid grid-cols-1 border-b border-neutral-800">
          <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
            Balance de la Semana
          </h2>
        </div>
        <div className="grid grid-cols-1 grid-rows-2  justify-center p-2">
          <div className="border border-neutral-950/70">
            <table className="table-auto w-full">
              <thead className="text-center bg-neutral-700">
                <tr>
                  <th className="text-center">
                    <p className="text-xs text-neutral-400 ">Fecha</p>
                  </th>
                  <th className="text-center">
                    <p className="text-xs text-neutral-400 ">Alimento (Kg)</p>
                  </th>
                  <th className="text-center">
                    <p className="text-xs text-neutral-400 ">Alimentado</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center border-b border-neutral-800">
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">2025/01/02</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">9,361 Kg</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">07:00:32</p>
                  </td>
                </tr>
                <tr className="text-center border-b border-neutral-800">
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">2025/01/01</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">10,361 Kg</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">04:30:53</p>
                  </td>
                </tr>
                <tr className="bg-neutral-950/90 text-center border-b border-neutral-800">
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">2024/12/31</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">4,361 Kg</p>
                  </td>
                  <td className="text-center">
                    <p className="text-xs text-neutral-400 ">01:50:12</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </div>
  );
}
