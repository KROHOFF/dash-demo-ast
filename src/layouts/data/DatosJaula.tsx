import { Card } from "@/components/ui";
import React from "react";

export default function DatosJaula() {
  return (
    <Card className="dark shadow shadow-neutral-800/70 border-t border-black/70 ">
      <Card.Header className="p-1 flex flex-row justify-center w-full items-center">
        <h3 className="text-sm text-neutral-300 font-bold leading-tight">
          Información de la Jaula
        </h3>
      </Card.Header>
      <Card.Content className="m-0 p-1">
        <div className="grid grid-cols-3 grid-rows-3 rounded-lg overflow-hidden justify-center">
          <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
            <p className="text-xs text-neutral-400 ">Silo</p>
            <h3 className="text-center font-bold text-neutral-300">SILO 4B</h3>
          </div>
          <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
            <p className="text-xs text-neutral-400 ">Alimento</p>
            <h3 className="text-center font-bold text-neutral-300">SKN9</h3>
          </div>
          <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
            <p className="text-xs text-neutral-400 ">Cant.Peces</p>
            <h3 className="text-center font-bold text-neutral-300">77374</h3>
          </div>
          <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
            <p className="text-xs text-neutral-400 ">X Gramos</p>
            <h3 className="text-center font-bold text-neutral-300">6035.120</h3>
          </div>
          <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
            <p className="text-xs text-neutral-400 ">SFR</p>
            <h3 className="text-center font-bold text-neutral-300">0.371%</h3>
          </div>
          <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
            <p className="text-xs text-neutral-400 ">Pallet x KG</p>
            <h3 className="text-center font-bold text-neutral-300">1.700000</h3>
          </div>
          <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
            <p className="text-xs text-neutral-400 text-center">
              Cant. Alimento
            </p>
            <h3 className="text-center font-bold text-neutral-300">1732kg</h3>
          </div>
          <div className="col-span-2 border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
            <p className="text-xs text-neutral-400 text-center">
              Vis. Planeadas
            </p>
            <h3 className="text-center font-bold text-neutral-300">-</h3>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
}
