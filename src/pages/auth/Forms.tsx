import { Button, Form, TextField } from "@/components/ui";
import { useNavigate } from "react-router";

export function Forms() {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <Form className="dark" onSubmit={handleSubmit}>
      <TextField
        label="Correo Corporativo"
        type="email"
        isRequired
        className="mb-2"
      />
      <TextField
        label="Contraseña"
        type="password"
        isRequired
        className="mb-2"
      />
      <div>
        <Button className="w-full" type="submit">
          Acceder
        </Button>
      </div>
    </Form>
  );
}
