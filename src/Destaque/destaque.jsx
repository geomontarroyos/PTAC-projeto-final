import MenuLateral from "../Menu/MenuLateral";
import CardMusicas from "../Componentes/CardMusicas";
import "./Destaque.css"

export default function destaque() {
    // Use getItem em vez de get
    const musicasDestaques = JSON.parse(localStorage.getItem("Lista"));
    
    return(

      <div>
      <MenuLateral/>
      <div className='content-destaque'>
  
      <div className='title'><h1>Lista de Músicas boas</h1></div>
      <div className='card-video'>
      {musicasDestaques.slice(-4).map((musicas) => (
      <CardMusicas musicas ={musicas} />
      
  ))}
    </div>
  
    </div>
  
      </div>
    )
};
