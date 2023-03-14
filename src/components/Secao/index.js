import styles from './secao.module.css';

function Secao ({children, background}){
    return (
        <div className={styles.secao} style={{backgroundColor: background}}>
            {children}
        </div>
    )
}

export default Secao;