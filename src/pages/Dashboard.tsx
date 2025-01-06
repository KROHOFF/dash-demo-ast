"use client";
import { IconRefresh } from "justd-icons";
import { Select, Checkbox, Button } from "@/components/ui";
import { RiMapPin2Line, RiCheckboxBlankCircleFill } from "react-icons/ri";

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
    <main className="w-full grid grid-rows-4 text-white gap-5">
      <div className="grid grid-cols-6 gap-2 rounded-2xl  w-full bg-neutral-950/60 shadow shadow-neutral-700 overflow-hidden p-2">
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
              <p className="border-dashed border-2 border-sky-500  text-sky-100 font-bold px-4 py-2 rounded-sm ">
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
              Modulo
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 h-full justify-center p-2">
            <article className="border border-sky-500 flex justify-center items-center  rounded">
              <p className="font-black text-2xl text-sky-500">M100</p>
            </article>
            <article className="flex flex-col justify-center items-center text-sky-500 font-semibold">
              <button className="relative rounded-xl px-8 hover:bg-neutral-950 shadow shadow-sky-500 border border-sky-600 hover:border-sky-400 py-2">
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
              Modulo
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-2 h-full justify-center p-2">
            <article className="border border-sky-500 flex justify-center items-center  rounded">
              <p className="font-black text-2xl text-sky-500">M100</p>
            </article>
            <article className="flex flex-col justify-center items-center text-sky-500 font-semibold">
              <button className="relative rounded-xl px-8 hover:bg-neutral-950 shadow shadow-sky-500 border border-sky-600 hover:border-sky-400 py-2">
                Alertas
                <span className="absolute  -top-2 -right-1 text-xs font-black border border-red-500   bg-red-500 px-1 rounded-lg text-white">
                  1
                </span>
              </button>
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
              <p className="border-dashed border-2 border-sky-500  text-sky-100 font-bold px-4 py-2 rounded-sm ">
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
      <div className="grid grid-cols-4 gap-2 rounded-2xl  w-full bg-neutral-950/60 shadow shadow-neutral-700 overflow-hidden p-2">
        <article>1</article>
        <article>2</article>
        <article>3</article>
        <article>4</article>
      </div>
    </main>
  );
}
