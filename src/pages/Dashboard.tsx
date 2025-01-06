"use client";
import { IconRefresh } from "justd-icons";
import { Select, Checkbox, Button } from "@/components/ui";
import { RiMapPin2Line, RiCheckboxBlankCircleFill } from "react-icons/ri";
import Graficos from "@/components/charts/Graficos";

export const centros = [
  { id: 1, name: "Becerra S23" },
  { id: 2, name: "Chaitén" },
  { id: 3, name: "San Antonio" },
  { id: 4, name: "Santiago" },
  { id: 5, name: "Santa Fe" },
  { id: 6, name: "Santa Rosa" },
];

export default function Dashboard() {
  return (
    <main className="w-full flex flex-col text-white gap-3">
      {/* Primera fila */}
      <div className="grid grid-cols-6 gap-2 rounded-2xl border-t border-black/90 w-full bg-neutral-950/90 backdrop-blur-3xl shadow shadow-neutral-700 p-2">
        <article className="flex flex-col justify-start  shadow shadow-neutral-800 rounded-s-xl p-1">
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
        <article className="flex flex-col justify-start  shadow shadow-neutral-800  p-1">
          <div className="w-full grid grid-cols-1 border-b border-neutral-800">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Módulo
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 h-full justify-center p-2">
            <article className="border border-sky-500 flex justify-center items-center  rounded">
              <p className="font-black text-2xl text-sky-500">M100</p>
            </article>
            <article className="flex flex-col justify-center items-center text-sky-500 font-semibold">
              <button className="relative rounded-xl px-8 hover:bg-neutral-950 shadow shadow-sky-500 border border-sky-600 hover:border-2 hover:border-sky-400 py-2">
                Alertas
                <span className="absolute  -top-2 -right-1 text-xs font-black border border-red-500   bg-red-500 px-1 rounded-lg text-white">
                  1
                </span>
              </button>
            </article>
          </div>
        </article>
        <article className="col-span-2  gap-2 h-full justify-center ">
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
        </article>
        <article className="flex flex-col justify-start  shadow shadow-neutral-800  p-1">
          <div className="w-full grid grid-cols-1 border-b border-neutral-800">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Módulo
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 h-full justify-center p-2">
            <article className="flex flex-col justify-center items-center text-sky-500 font-semibold">
              <button className="relative rounded-xl px-8 hover:bg-neutral-950 shadow shadow-sky-500 border border-sky-600 hover:border-2 hover:border-sky-400 py-2">
                Alertas
                <span className="absolute  -top-2 -right-1 text-xs font-black border border-red-500   bg-red-500 px-1 rounded-lg text-white">
                  1
                </span>
              </button>
            </article>
            <article className="border border-sky-500 flex justify-center items-center  rounded">
              <p className="font-black text-2xl text-sky-500">M100</p>
            </article>
          </div>
        </article>
        <article className="flex flex-col justify-start  shadow shadow-neutral-800 rounded-s-xl p-1">
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
      </div>
      {/* Segunda fila */}
      <div className="grid grid-cols-4 gap-2 rounded-2xl border-t border-black/90  w-full bg-neutral-950/90 shadow shadow-neutral-700 overflow-hidden p-2">
        <article>
          <div className="w-full grid grid-cols-1 border-b border-neutral-800">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Información de la Jaula
            </h2>
          </div>
          <div className="grid grid-cols-3 grid-rows-3  justify-center p-2">
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">Silo</p>
              <h3 className="text-center font-bold text-neutral-300">
                SILO 4B
              </h3>
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
              <h3 className="text-center font-bold text-neutral-300">
                6035.120
              </h3>
            </div>
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">SFR</p>
              <h3 className="text-center font-bold text-neutral-300">0.371%</h3>
            </div>
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">Pallet x KG</p>
              <h3 className="text-center font-bold text-neutral-300">
                1.700000
              </h3>
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
        </article>
        <article>
          <Graficos />
        </article>
        <article>
          <Graficos />
        </article>
        <article>
          <div className="w-full grid grid-cols-1 border-b border-neutral-800">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Información de la Jaula
            </h2>
          </div>
          <div className="grid grid-cols-3 grid-rows-3  justify-center p-2">
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">Silo</p>
              <h3 className="text-center font-bold text-neutral-300">
                SILO 4B
              </h3>
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
              <h3 className="text-center font-bold text-neutral-300">
                6035.120
              </h3>
            </div>
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">SFR</p>
              <h3 className="text-center font-bold text-neutral-300">0.371%</h3>
            </div>
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">Pallet x KG</p>
              <h3 className="text-center font-bold text-neutral-300">
                1.700000
              </h3>
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
        </article>
      </div>
      {/* Tercera fila */}
      <div className="grid grid-cols-4 gap-2 rounded-2xl border-t border-black/90  w-full bg-neutral-950/90 shadow shadow-neutral-700 overflow-hidden p-2">
        <article>
          <div className="w-full grid grid-cols-1 border-b border-neutral-800">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Información de la Jaula
            </h2>
          </div>
          <div className="grid grid-cols-3 grid-rows-3  justify-center p-2">
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">Silo</p>
              <h3 className="text-center font-bold text-neutral-300">
                SILO 4B
              </h3>
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
              <h3 className="text-center font-bold text-neutral-300">
                6035.120
              </h3>
            </div>
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">SFR</p>
              <h3 className="text-center font-bold text-neutral-300">0.371%</h3>
            </div>
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">Pallet x KG</p>
              <h3 className="text-center font-bold text-neutral-300">
                1.700000
              </h3>
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
        </article>
        <article>
          <Graficos />
        </article>
        <article>
          <Graficos />
        </article>
        <article>
          <div className="w-full grid grid-cols-1 border-b border-neutral-800">
            <h2 className="text-center font-bold text-sm py-1 text-neutral-300">
              Información de la Jaula
            </h2>
          </div>
          <div className="grid grid-cols-3 grid-rows-3  justify-center p-2">
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">Silo</p>
              <h3 className="text-center font-bold text-neutral-300">
                SILO 4B
              </h3>
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
              <h3 className="text-center font-bold text-neutral-300">
                6035.120
              </h3>
            </div>
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">SFR</p>
              <h3 className="text-center font-bold text-neutral-300">0.371%</h3>
            </div>
            <div className="border border-neutral-950/70 px-3 py-2 bg-gradient-to-tr from-neutral-800 to-neutral-900 shadow shadow-neutral-700/90 hover:from-neutral-900 hover:to-neutral-800">
              <p className="text-xs text-neutral-400 ">Pallet x KG</p>
              <h3 className="text-center font-bold text-neutral-300">
                1.700000
              </h3>
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
        </article>
      </div>
      {/* Cuarta fila */}
      <div className="grid grid-cols-4 max-h-40 gap-2 rounded-2xl border-t border-black/90  w-full bg-neutral-950/90 shadow shadow-neutral-700 overflow-hidden p-2">
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
                  <tr className="border-b border-neutral-800">
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">2024/12/30</p>
                    </td>
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">5,361 Kg</p>
                    </td>
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">02:00:32</p>
                    </td>
                  </tr>
                  <tr className="text-center border-b border-neutral-800">
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">2024/12/29</p>
                    </td>
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">6,361 Kg</p>
                    </td>
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">03:30:53</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
        <article>
          <Graficos />
        </article>
        <article>
          <Graficos />
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
                  <tr className="border-b border-neutral-800">
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">2024/12/30</p>
                    </td>
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">5,361 Kg</p>
                    </td>
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">02:00:32</p>
                    </td>
                  </tr>
                  <tr className="text-center border-b border-neutral-800">
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">2024/12/29</p>
                    </td>
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">6,361 Kg</p>
                    </td>
                    <td className="text-center">
                      <p className="text-xs text-neutral-400 ">03:30:53</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
