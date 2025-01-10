import Background from "@/layouts/Background";
import React from "react";
import { Forms } from "./Forms";
import { RiAppStoreLine, RiGooglePlayLine } from "react-icons/ri";

export default function Login() {
  return (
    <div className="relative flex  h-screen w-full max-h-screen ">
      <Background />
      <main className="z-10 w-full h-full flex">
        <div className="relative bg-rose-400 w-1/3 h-full flex flex-col justify-center items-center">
          <img
            className="absolute left-0 top-0 object-cover w-full h-full"
            src="bg-4.jpeg"
            alt=""
          />
          <div className="absolute  bg-neutral-900/20  backdrop-blur-md w-full h-full "></div>
          <div className="absolute  bg-neutral-900/20 scale-95 backdrop-blur-3xl w-full h-full rounded-2xl flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="flex justify-center my-10 -mt-20">
                <img className="h-14" src="logo.png" alt="Logo" />
              </div>
              <p className="text-6xl font-bold text-neutral-600">
                <span className="font-light text-red-500">WI</span>SENSOR
              </p>
              <p className="text-white text-center text-xl font-light">
                AST NETWORKS
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-center">
          <p className="text-neutral-500 text-center text-xs font-light mb-5">
            Ingresa tus credenciales para continuar
          </p>
          <div className="z-20 mx-auto w-[300px] bg-neutral-950/50 shadow shadow-neutral-600 rounded-2xl p-10">
            <Forms />
            <div className="mt-10 w-full flex flex-col gap-3 justify-center items-center">
              <button className="flex justify-center items-center gap-2 border border-neutral-600 px-4 py-2 rounded-lg text-neutral-600 text-sm font-bold hover:text-blue-600 hover:border-blue-600 transition-all duration-300">
                <RiAppStoreLine />
                <span className="text-xs font-light ">Descargar</span>AppStore
              </button>
              <button className="flex justify-center items-center gap-2 border border-neutral-600 px-4 py-2 rounded-lg text-neutral-600 text-sm font-bold hover:text-red-500 hover:border-red-500 transition-all duration-300">
                <RiGooglePlayLine />
                <span className="text-xs font-light ">Descargar</span>PlayStore
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
