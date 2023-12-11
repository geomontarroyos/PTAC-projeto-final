import CardVideo from '../Componentes/CardVideo';
import MenuLateral from '../Menu/MenuLateral';

export default function Home() {
  const listaInicial = JSON.parse(localStorage.getItem("Lista"))  || [];
  return(
    <div>
    <MenuLateral/>
    <h3>Lista de Músicas boas</h3>
    {listaInicial.map((Musicas) => (
    <CardVideo key={Musicas.id} Musicas={Musicas} />
))}

    </div>
  )
}