import { Header } from "./components/Header"
import { Post } from "./components/Post"
import style from './components/App.module.css'
import "./global.css"
import { Sidebar } from "./components/Sidebar"

const posts = [
  // Primeiro post
  {
    id: 1,
    author: {
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Carolina Azevedo",
      role: "fullstack developer"
    },
    content: [
      {type: 'paragraph', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quasi sit quia illo tenetur qui esse hic harum impedit. Ea esse repellat quis ratione, eveniet officiis expedita saepe harum voluptate!'},
      {type: 'paragraph', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
      {type: 'paragraph', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quasi sit quia illo tenetur qui esse hic harum impedit.'},
      {type: 'link', content:'Lorem ipsum', url:'#'} // link relativo? pq?
    ],
    publishedAt: new Date('2022-11-17 14:00:00')
  },
  // Segundo post
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      {type: 'paragraph', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quasi sit quia illo tenetur qui esse hic harum impedit. Ea esse repellat quis ratione, eveniet officiis expedita saepe harum voluptate!'},
      {type: 'paragraph', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'},
      {type: 'paragraph', content:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quasi sit quia illo tenetur qui esse hic harum impedit.'},
      {type: 'link', content:'clique aqui para acessar', url:'www.google.com'}
    ],
    publishedAt: new Date('2022-11-15 18:00:00')
  }
];

function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key = {post.id}
                  author = {post.author}
                  content = {post.content}
                  publishedAt = {post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
    
  )
}

export default App


