import CardMusicas from '../Componentes/CardMusicas';
import MenuLateral from '../Menu/MenuLateral';
import './Home.css'

export default function Home() {
  const listaInicial = JSON.parse(localStorage.getItem("Lista"));
  return(

    <div>
    <MenuLateral/>
    <div className='content-home'>
    <h3>Lista de Músicas boas</h3>
    {listaInicial.map((musicas) => (
    <CardMusicas musicas ={musicas} />
    
))}

  </div>

    </div>
  )
}