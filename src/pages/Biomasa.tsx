import BarCharts from "@/components/charts/BarCharts";
import LineCharts from "@/components/charts/LineCharts";
import Hora from "@/components/Hora";
import { Container } from "@/layouts/Container";
import React from "react";
import { RiCheckboxBlankCircleFill, RiMapPin2Line } from "react-icons/ri";

export default function Biomasa() {
  return (
    <Container className="min-h-screen w-full flex flex-col gap-2 inset-0 shadow shadow-neutral-800 rounded-3xl">
      <div className="w-full grid grid-cols-12 gap-1">
        <article className="col-span-2 bg-neutral-950 rounded-2xl flex flex-col justify-start  shadow shadow-neutral-800 rounded-s-xl p-1">
          <div className="w-full grid grid-cols-2 border-b border-neutral-800 rounded-ss-lg">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Datos Generales
            </h2>
            <p className="border-e pe-2 font-black border-green-400 text-xs text-green-400 capitalize flex gap-1 items-center justify-end">
              <span className=" animate-pulse">
                <RiCheckboxBlankCircleFill />
              </span>
              En Línea
            </p>
          </div>
          <div className="flex flex-col gap-2 p-2">
            <h3 className="text-center text-xs font-light text-neutral-300">
              CENTRO
            </h3>
            <div className=" flex flex-col gap-4 justify-center items-center">
              <p className="border-dashed border-2 border-red-500  text-sky-100 font-bold px-4 py-2 rounded-sm ">
                BECERRA S23
              </p>
              <p className="flex items-center gap-1  text-xs">
                <span>
                  <RiMapPin2Line />
                </span>
                Chaitén
              </p>
            </div>
          </div>
        </article>
        <article className="col-span-2 bg-neutral-950 rounded-2xl flex flex-col justify-start  shadow shadow-neutral-800  p-1">
          <div className="w-full grid grid-cols-1 border-b border-neutral-800">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Estado Módulo
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 h-full justify-center p-2">
            <article className="border border-sky-500 flex flex-col justify-center items-center  rounded">
              <p className="text-sm text-neutral-400 font-bold">
                Total Centros
              </p>
              <p className=" text-2xl text-white-500 border border-dotted border-sky-500 rounded-xl px-3 mt-2">
                7
              </p>
            </article>
            <article className="border border-red-500 flex flex-col justify-center items-center  rounded">
              <p className="text-sm text-neutral-400 font-bold">
                Total Centros
              </p>
              <p className=" text-2xl text-white-500 border border-dotted border-red-500 rounded-xl px-3 mt-2">
                0
              </p>
            </article>
          </div>
        </article>

        <article className="col-span-6 bg-neutral-950 rounded-2xl w-full flex items-center justify-center  shadow shadow-neutral-800">
          <h1 className="text-7xl font-black font-mono text-neutral-700 text-center">
            SALMONES AUSTRAL
          </h1>
        </article>
        <article className="col-span-2 bg-neutral-950 rounded-2xl flex flex-col justify-center items-center  shadow shadow-neutral-800">
          <Hora />
        </article>
      </div>
      <div className="w-full grid grid-cols-12 gap-1">
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
            <BarCharts/>
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
      </div>
    </Container>
  );
}
