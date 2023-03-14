import Container from "./components/Container";
import FormLista from "./components/FormLista";
import ListaDeTarefas from "./components/ListaDeTarefas";
import Secao from "./components/Secao";

function App() {
  return (
    <>
      <Secao background='#eee'>
        <Container>
          <ListaDeTarefas />
        </Container>
      </Secao>
      <Secao background='#ddd'>
        <Container>
          <FormLista />
        </Container>
      </Secao>
    </>
  );
}

export default App;
