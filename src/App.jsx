import { Header } from './Components/Header';
import { Post } from './Components/Post';
import { Sidebar } from './Components/Sidebar';

import styles from './App.module.css';
import './global.css'; //para importar o CSS no React pode ser feito nesse formato


export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
            author="Diego Fernandes" 
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quibusdam voluptate libero quam ut magni, possimus repudiandae animi quaerat nam eveniet qui, molestias cupiditate aliquam necessitatibus aspernatur quo et porro!"
          />
          <Post
            author="Gabriel Buzzi"
            content="um novo post muito legal"
          />
        </main>

      </div>
    </div>
  )
}

