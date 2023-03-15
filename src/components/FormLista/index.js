import { useState } from 'react';
import styles from './formlista.module.css';
import { v4 as uuidv4 } from 'uuid';

function FormLista({ setTarefas, tarefas }) {
    const [valorNome, setValorNome] = useState('');
    const [valorDescricao, setValorDescricao] = useState('');

    function adicionarTarefa() {
        const novaTarefa = {id: uuidv4(), titulo: valorNome, descricao: valorDescricao};
        setTarefas([...tarefas, novaTarefa]);
    }

    return (
        <div className={styles.formLista}>
            <h1>Form Lista</h1>
            <div className={styles.inputs}>
                <input onChange={(e) => setValorNome(e.target.value)} type='text' placeholder='Nome da tarefa' />
                <input onChange={(e) => setValorDescricao(e.target.value)} type='text' placeholder='Descrição da tarefa' />
                <button onClick={adicionarTarefa}>Adicionar</button>
            </div>
        </div>
    )
}

export default FormLista;