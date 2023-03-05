import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
           <Avatar hasBorder={false} src='https://github.com/Drielean.png' /> 

           <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Driele Aquino</strong>
                        <time title="03 de março às 14:13h" dateTime="2023-03-03 14:13:30">Cerca de 1h atrás</time>
                    </div>

                    <button title='Deletar comentário'>
                        <Trash size={24} />
                    </button>
                </header>

                <p>Muito bom, Parabéns!👏🏻👏🏻</p>
                💪🏻👏🏻🧡💛💚💙💜🖤🤍
            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>

           </div>
        </div>
    )
}