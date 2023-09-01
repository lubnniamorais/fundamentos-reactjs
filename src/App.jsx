import {Post} from "./Post"
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Lubnnia Morais" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, expedita dolores quisquam laborum voluptatibus placeat deserunt repellat eum excepturi possimus facere. Aperiam cumque, voluptatibus ullam molestiae ab pariatur autem quia." 
          />

          <Post 
            author="Lubni Morais" 
            content="Um novo post." 
          />
        </main>
      </div>
    </div>
  )
}
