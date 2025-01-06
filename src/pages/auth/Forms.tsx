
"use client"

import { Button, Form, TextField }  from "@/components/ui";

export function Forms() {
  return (
    <Form className="dark " onSubmit={() => {}}>
      <TextField label="Correo Corporativo" type="email" isRequired className="mb-2" />
      <TextField label="Contraseña" type="password" isRequired className="mb-2" />
      <Button className="" type="submit">Acceder</Button>
    </Form>
  )
}