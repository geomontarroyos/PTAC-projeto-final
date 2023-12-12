import CardMusicas from '../Componentes/CardMusicas';
import MenuLateral from '../Menu/MenuLateral';
import './Home.css'

export default function Home() {
  const listaInicial = JSON.parse(localStorage.getItem("Lista"));
  return(

    <div>
    <MenuLateral/>
    <div className='content-home'>

    <div className='title'><h1>Lista de Músicas boas</h1></div>
    <div className='card-video'>
    {listaInicial.map((musicas) => (
    <CardMusicas musicas ={musicas} />
    
))}
  </div>

  </div>

    </div>
  )
}