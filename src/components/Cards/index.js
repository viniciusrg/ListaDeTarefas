import Card from '../Card';
import styles from './cards.module.css';

function Cards (){
    return(
        <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Cards;