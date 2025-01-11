import LineCharts from "@/components/charts/LineCharts";
import Hora from "@/components/Hora";
import { Container } from "@/layouts/Container";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { Grid } from "@/components/ui";
import DatosGenerales from "@/layouts/data/DatosGenerales";
import data from "@/layouts/data/DataGeneral";

export default function Biomasa() {
  return (
    <Container className="min-h-screen w-full flex flex-col gap-2 inset-0 shadow shadow-neutral-800 rounded-3xl">
      <Grid
        columns={12}
        className=" rounded-2xl   w-full bg-neutral-950/90 shadow shadow-neutral-800 overflow-hidden"
      >
        <Grid.Item
          colSpan={2}
          className="bg-neutral-950 rounded-2xl flex flex-col justify-start  shadow shadow-neutral-800 rounded-s-xl p-1"
        >
          {data.map((item) => {
            if (item.id === 1) {
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
        <Grid.Item
          colSpan={2}
          className="bg-neutral-950 rounded-2xl flex flex-col justify-start  shadow shadow-neutral-800  p-1"
        >
          <div className="w-full grid grid-cols-1 border-b border-neutral-800">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Estado Módulo
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 h-full justify-center p-2">
            <article className="border border-sky-500 hover:bg-neutral-800 transition-all duration-200 flex flex-col justify-center items-center  rounded">
              <p className="text-sm text-neutral-400 font-bold">
                Total Centros
              </p>
              <p className=" text-3xl text-white-500">7</p>
            </article>
            <article className="border border-red-500 hover:bg-neutral-800 transition-all duration-200 flex flex-col justify-center items-center  rounded">
              <p className="text-sm text-neutral-400 font-bold">
                Total Centros
              </p>
              <p className=" text-3xl text-white-500">0</p>
            </article>
          </div>
        </Grid.Item>
        <Grid.Item
          colSpan={6}
          className="bg-neutral-950 rounded-2xl w-full flex items-center justify-center  shadow shadow-neutral-800"
        >
          <h1 className="text-7xl font-black font-mono text-neutral-700 text-center">
            SALMONES AUSTRAL
          </h1>
        </Grid.Item>
        <Grid.Item
          colSpan={2}
          className="bg-neutral-950 rounded-2xl flex flex-col justify-center items-center  shadow shadow-neutral-800"
        >
          <Hora />
        </Grid.Item>
      </Grid>
      <Grid
        columns={12}
        gap={2}
        className=" rounded-2xl w-full shadow shadow-neutral-800 overflow-hidden"
      >
        <article className="col-span-8 bg-neutral-950 rounded-2xl flex flex-col justify-start  shadow shadow-neutral-800 rounded-s-xl p-1">
          <div className="w-full  border-b border-neutral-800 rounded-ss-lg">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Peso Promedio/SRF Corregido
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 p-2">
            <div className="flex gap-5 justify-center items-center bg-gradient-to-r shadow shadow-neutral-700 from-neutral-900 to-transparent rounded-xl px-10 py-2 text-white">
              <p className="flex items-center gap-2 text-sm text-neutral-300 font-bold">
                <span className="text-green-400">
                  <RiCheckboxBlankCircleFill />
                </span>
                Peso Hoy
              </p>
              <p className="flex items-center gap-2 text-sm text-neutral-300 font-bold">
                <span className="text-purple-400">
                  <RiCheckboxBlankCircleFill />
                </span>
                Sfr Corregido Ayer %
              </p>
              <p className="flex items-center gap-2 text-sm text-neutral-300 font-bold">
                <span className="text-rose-400">
                  <RiCheckboxBlankCircleFill />
                </span>
                Sfr Corregido Hoy %
              </p>
            </div>
            <LineCharts />
          </div>
        </article>
        <article className="col-span-4 overflow-hidden  bg-neutral-950 rounded-2xl flex flex-col justify-start  shadow shadow-neutral-800 rounded-s-xl p-1">
          <img
            src="mockup/map.png"
            alt="maps"
            className="rounded-md object-cover h-full"
          />
        </article>
      </Grid>
    </Container>
  );
}
