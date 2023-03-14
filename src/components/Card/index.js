import styles from './card.module.css';

function Card () {
    return(
        <div className={styles.card}>
            <h2>Titulo</h2>
            <p>Descrição da tarefa</p>
            <div className={styles.acoes}>
                <i>X</i>
                <i>+</i>
            </div>
        </div>
    )
}

export default Card;