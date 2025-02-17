import Hora from "@/components/Hora";
import { RiAccountPinCircleLine } from "react-icons/ri";

export default function Header() {
  return (
    <header className="bg-neutral-950/90 backdrop-blur-lg  h-12 w-full">
      <div className="grid grid-cols-5 h-full w-full">
        <div className="col-span-1 flex justify-start ps-7 items-center">
          <img src="logo.png" alt="logo" className="h-9 w-9" />
        </div>
        <div className="col-span-3 flex justify-center items-center gap-20">
          <p className="text-xl font-bold text-neutral-400">
            <span className="font-light text-neutral-500">WI</span>SENSOR
          </p>
          <Hora />
        </div>
        <div className="col-span-1 flex justify-end items-center pe-5">
          <button className="bg-neutral-950/60 text-neutral-400 px-2 py-2 text-sm hover:text-white shadow transition-all duration-500 shadow-neutral-700 rounded-2xl flex justify-center items-center gap-2">
            <RiAccountPinCircleLine /> Administrador AST
          </button>
        </div>
      </div>
    </header>
  );
}
