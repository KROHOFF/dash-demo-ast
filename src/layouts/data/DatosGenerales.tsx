import { Card } from "@/components/ui";
import React, { useRef, useState } from 'react';
import { RiCheckboxBlankCircleFill, RiMapPin2Line } from "react-icons/ri";

export default function DatosGenerales(props: any) {

  return (
    <Card className="dark bg-neutral-900  shadow shadow-neutral-800/70 border-t border-black/70 p-2">
      <Card.Header className="p-0 border-b border-neutral-900 ps-5 font-black text-neutral-300 text-sm flex  flex-row justify-between items-center ">
        <h3 className="text-sm text-neutral-300 font-bold leading-tight">
          Datos Generales
        </h3>
        <p
          className={`text-xs pb-1 text-${props.estadoColor}-400 capitalize flex gap-1 items-center justify-end`}
        >
          <span className=" animate-pulse">
            <RiCheckboxBlankCircleFill />
          </span>
          {props.estado}
        </p>
      </Card.Header>
      <Card.Content className="p-2">
        <div className="flex flex-col gap-2 ">
          <h3
            className={`text-center text-xs font-bold ${
              props.tipo === "Empresa" ? "text-blue-500" : "text-red-500"
            }`}
          >
            {props.tipo}
          </h3>
          <div className="flex flex-col justify-center items-center">
            <p
              className={`border-dashed border-2 ${
                props.tipo === "Empresa" ? "border-blue-500" : "border-red-500"
              } text-sky-100 font-bold px-4 py-2 rounded-sm`}
            >
              {props.name}
            </p>
          </div>
        </div>
      </Card.Content>
      <Card.Footer className="w-full flex items-center justify-center p-0">
        <p className="flex items-center gap-1  text-xs">
          <span>
            <RiMapPin2Line />
          </span>
          {props.location}
        </p>
      </Card.Footer>
    </Card>
  );
}
