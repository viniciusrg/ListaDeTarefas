import styles from './card.module.css';

function Card ({titulo, descricao, tarefas, setTarefas, id}) {

    function removerTarefa () {
        const novaLista = tarefas.filter(tarefa => tarefa.id !== id);
        setTarefas(novaLista);
    }

    return(
        <div className={styles.card}>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <div className={styles.acoes}>
                <i onClick={removerTarefa}>X</i>
            </div>
        </div>
    )
}

export default Card;