import { useEffect, useState } from "react";

function App() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL + "/clientes")
      .then(res => res.json())
      .then(data => setClientes(data));
  }, []);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map(c => (
          <li key={c.id}>
            {c.nombre} {c.apellidos} — {c.ciudad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;