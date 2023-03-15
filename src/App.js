import { useState } from "react";
import Container from "./components/Container";
import FormLista from "./components/FormLista";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Secao from "./components/Secao";

function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 0,
      titulo: 'Tarefa 1',
      descricao: 'Descrição da tarefa'
    }
  ]);

  return (
    <>
      <Secao background='#eee'>
        <Container>
          <ListaDeTarefas tarefas={tarefas} setTarefas={setTarefas} />
        </Container>
      </Secao>
      <Secao background='#ddd'>
        <Container>
          <FormLista tarefas={tarefas} setTarefas={setTarefas} />
        </Container>
      </Secao>
    </>
  );
}

export default App;
