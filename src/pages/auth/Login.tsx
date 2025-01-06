import Background from "@/layouts/Background";
import React from "react";
import { Forms } from "./Forms";

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
              <p className="text-6xl font-bold text-neutral-400">
                <span className="font-light text-red-500">WI</span>SENSOR
              </p>
              <p className="text-white text-center text-xl font-light">
                AST NETWORKS
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className="flex justify-center my-20">
            <img className="h-20" src="logo.png" alt="Logo" />
          </div>
          
          <p className="text-neutral-400 text-center text-xs font-light mb-10">
            Ingresa tus credenciales para continuar
          </p>
          <div className="z-20  mx-auto w-[300px]">
            <Forms/>
          </div>
        </div>
      </main>
    </div>
  );
}
