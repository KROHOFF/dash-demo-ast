import { Card, Grid } from "@/components/ui";
import { Container } from "@/layouts/Container";
import DatosGenerales from "@/layouts/data/DatosGenerales";
import data from "@/layouts/data/DataGeneral";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";



export default function Seguridad() {
  return (
    <Container className="min-h-screen w-full flex flex-col gap-2 inset-0 shadow shadow-neutral-800 rounded-3xl">
      <Grid
        columns={5}
        gap={2}
        className="bg-neutral-950/90 rounded-2xl w-full"
      >
        <Grid.Item className="flex flex-col justify-start  shadow shadow-neutral-800 rounded-xl p-1">
          {data.map((item) => {
            if (item.id === 4) {
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
        <Grid.Item className="flex flex-col justify-start  shadow shadow-neutral-800  p-1">
          <Card className="dark bg-neutral-900 shadow shadow-neutral-800/70 border-t border-black/70 p-2">
            <Card.Header className="p-0 border-b border-neutral-900 ps-5 font-black text-neutral-300 text-sm flex  flex-row justify-center items-center ">
              <h3 className="text-sm text-center text-neutral-300 font-bold leading-tight">
                Tipo de Alerta Ultima Hora
              </h3>
            </Card.Header>
            <Card.Content className="p-2">
              
            </Card.Content>
          </Card>
        </Grid.Item>
      </Grid>
    </Container>
  );
}
