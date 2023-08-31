import {Post} from "./Post"
import { Header } from "./components/Header";

import "./styles.css";

export function App() {
  return (
    <div>
      <Header></Header>

      <Post 
        author="Lubnnia Morais" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, expedita dolores quisquam laborum voluptatibus placeat deserunt repellat eum excepturi possimus facere. Aperiam cumque, voluptatibus ullam molestiae ab pariatur autem quia." 
      />

      <Post 
        author="Lubni Morais" 
        content="Um novo post." 
      />
    </div>
  )
}
