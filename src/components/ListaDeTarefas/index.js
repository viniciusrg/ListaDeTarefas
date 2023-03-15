import Cards from '../Cards';
import styles from './listadetarefas.module.css';

function ListaDeTarefas({tarefas, setTarefas}) {
    return (
        <div className={styles.listaDeTarefas}>
            <h1>Lista de tarefas</h1>
            <Cards tarefas={tarefas} setTarefas={setTarefas} />
        </div>
    )
}

export default ListaDeTarefas;