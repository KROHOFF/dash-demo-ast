import { Card, Grid } from "@/components/ui";
import { Container } from "@/layouts/Container";
import DatosGenerales from "@/layouts/data/DatosGenerales";
import data from "@/layouts/data/DataGeneral";

export default function Seguridad() {
  return (
    <Container className="min-h-screen w-full flex flex-col gap-2 inset-0 shadow shadow-neutral-800 rounded-3xl">
      <Grid columns={5}>
        {data.map((item) => {
          if (item.id === 2) {
            return (
              <DatosGenerales
                key={item.id}
                name={item.name}
                estado={item.estado}
                estadoColor={item.estadoColor}
                location={item.location}
              />
            );
          }
          return null; // Si no cumple la condición, no renderiza nada
        })}
      </Grid>
    </Container>
  );
}
