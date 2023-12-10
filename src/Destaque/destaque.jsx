import './style.css';
import MenuLateral from "../Menu/MenuLateral";
import CardVideo from "../Componentes/CardVideo";

export default function destaque() {
    // Use getItem em vez de get
    const musicasDestaques = JSON.parse(localStorage.getItem("Lista"));
    
    return (
       <div>
          <MenuLateral /> 
          {musicasDestaques.slice(-4).map((Musicas) => (
            <CardVideo key={Musicas.id} Musicas={Musicas} />
          ))}
       </div>
    );
};
