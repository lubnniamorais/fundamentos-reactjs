import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({ content, deleteComment }) {

  function handleDeleteComment() {
    console.log('Deletar');

    deleteComment(content);
  }

  return (
    <div className={styles.comment} >
      <Avatar hasBorder={false} src="https://github.com/lubnimorais.png" />

      <div className={styles.commentBox} >
        <div className={styles.commentContent} >
          <header>
            <div className={styles.authorAndTime} >
              <strong>Lubnnia Morais</strong>

              <time title='26 de Setembro às 13:45h' dateTime='2023-09-26 13:45:00'>
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário' >
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span> 20 </span>
          </button>
        </footer>
      </div>
    </div>
  )
}


