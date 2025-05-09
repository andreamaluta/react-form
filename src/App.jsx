import { useState } from 'react'

const articles = [
  {
    "id": 1,
    "titolo": "Elezioni 2025: tutto quello che c'è da sapere",
    "autore": "Marco Rossi",
    "data": "2025-05-01",
    "categoria": "Politica"
  },
  {
    "id": 2,
    "titolo": "Scoperta una nuova specie di dinosauro in Patagonia",
    "autore": "Lucia Bianchi",
    "data": "2025-04-28",
    "categoria": "Scienza"
  },
  {
    "id": 3,
    "titolo": "Champions League: le squadre qualificate alle semifinali",
    "autore": "Gianni Verdi",
    "data": "2025-05-03",
    "categoria": "Sport"
  },
  {
    "id": 4,
    "titolo": "Cresce l'inflazione: cosa aspettarsi nei prossimi mesi",
    "autore": "Francesca Neri",
    "data": "2025-04-30",
    "categoria": "Economia"
  },
  {
    "id": 5,
    "titolo": "Festival di Cannes 2025: ecco i film più attesi",
    "autore": "Alessandro Conti",
    "data": "2025-05-05",
    "categoria": "Cultura"
  }
]


function App() {

  const [newArticle, setNewArticle] = useState();

  return (
    <div className="container">
      <h1>Lista di Articoli</h1>
      <ul className="list-group">
        {articles.map((article) => (
          <li key={article.id} className="list-group-item">
            {article.titolo}
          </li>
        ))}
      </ul>
      <form>
        <div className="input-group mt-3">
          <input onChange={(e) => { setNewArticle(e.target.value) }} type="text" className='form-control' placeholder='Nuovo Articolo' />
          <button className='btn btn-primary'>Add Article</button>
        </div>
      </form>
    </div>

  )

}
export default App
