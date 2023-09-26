import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src='https://github.com/lubnniamorais.png' />

          <div className={styles.authorInfo}>
            <strong>Lubnnia Morais</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='26 de Setembro às 13:45h' dateTime='2023-09-26 13:45:00'>
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content} >
        <p>
          Fala galeraa 👋
        </p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        
        <p>
          👉 <a href=''> jane.design/doctorcare </a>
        </p>
        
        <p>
          <a>#novoprojeto #nlw #rocketseat </a>
        </p>
      </div>
    </article>
  )
}