import { useState } from 'react'

const initialArticles = [
  "Elezioni 2025: tutto quello che c'è da sapere",
  "Scoperta una nuova specie di dinosauro in Patagonia",
  "Champions League: le squadre qualificate alle semifinali",
  "Cresce l'inflazione: cosa aspettarsi nei prossimi mesi",
  "Festival di Cannes 2025: ecco i film più attesi",
]


function App() {



  const [newArticle, setNewArticle] = useState("");
  const [articles, setArticles] = useState(initialArticles);


  const addArticle = (e) => {
    e.preventDefault();
    const article = newArticle.trim();
    setArticles([...articles, article]);
    setNewArticle("");
  }

  const handleRemoveArticle = (index) => {
    const updatedArticle = articles.filter((task, i) => {
      return i != index;
    })

    setArticles(updatedArticle);
  }


  return (
    <div className="container">
      <h1>Lista di Articoli</h1>
      <ul className="list-group">
        {articles.map((article, index) => (
          <li key={index} className="list-group-item">
            {article}
            <div className="trash"><i onClick={() => { handleRemoveArticle(index) }} class="fa-solid fa-trash-can"></i></div>
          </li>
        ))}
      </ul>
      <form onSubmit={addArticle}>
        <div className="input-group mt-3">
          <input value={newArticle} onChange={(e) => { setNewArticle(e.target.value) }} type="text" className='form-control' placeholder='Nuovo Articolo' />
          <button className='btn btn-primary'>Add Article</button>
        </div>
      </form>
    </div>

  )

}
export default App
