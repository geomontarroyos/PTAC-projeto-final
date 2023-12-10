import CardVideo from '../Componentes/CardVideo';
import MenuLateral from '../Menu/MenuLateral';

export default function Inicial() {
  const listaInicial = JSON.parse(localStorage.getItem("Lista"));
  return(
    <div>
    < MenuLateral />
    <h3>Lista de Músicas boas</h3>
    {listaInicial.map((musicas) => < CardVideo musicas= {musicas} />)}
    </div>
  )
}