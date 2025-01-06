import Background from "@/layouts/Background";
import React from "react";

export default function Login() {
  return (
    <div className="relative flex  h-screen w-full max-h-screen ">
      <Background />
      <main className="z-10 w-full h-full flex">
        <div className="bg-rose-400 w-1/3 h-full flex flex-col justify-center items-center">
            <img className="object-cover h-full" src="bg.jpeg" alt="" />
        </div>
        <div className="w-2/3 flex flex-col justify-center">
        <div className="flex justify-center mb-20">
            <img className="h-20" src="logo.png" alt="Logo" />
        </div>
          <h1 className="text-white text-center text-3xl font-bold">
            Demo Dashboard AST
          </h1>
          <p className="text-white text-center text-xl font-light">
            Ingresa tus credenciales para continuar
          </p>
        </div>
      </main>
    </div>
  );
}
