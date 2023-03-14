import Cards from '../Cards';
import styles from './listadetarefas.module.css';

function ListaDeTarefas() {
    return (
        <div className={styles.listaDeTarefas}>
            <h1>Lista de tarefas</h1>
            <Cards />
        </div>
    )
}

export default ListaDeTarefas;