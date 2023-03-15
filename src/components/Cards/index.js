import Card from '../Card';
import styles from './cards.module.css';

function Cards({ tarefas, setTarefas }) {
    return (
        <div className={styles.cards}>
            {
                tarefas.map((tarefa) => {
                    return <Card key={tarefa.id} id={tarefa.id} titulo={tarefa.titulo} descricao={tarefa.descricao} tarefas={tarefas} setTarefas={setTarefas} />
                })
            }

        </div>
    )
}

export default Cards;