import styles from './formlista.module.css';

function FormLista (){
    return (
        <div className={styles.formLista}>
            <h1>Form Lista</h1>
            <div className={styles.inputs}>
                <input type='text' placeholder='Nome da tarefa' />
                <input type='text' placeholder='Descrição da tarefa' />
                <button>Adicionar</button>
            </div>
        </div>
    )
}

export default FormLista;