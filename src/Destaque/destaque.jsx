import MenuLateral from "../Menu/MenuLateral";
import CardMusicas from "../Componentes/CardMusicas";

export default function destaque() {
    // Use getItem em vez de get
    const musicasDestaques = JSON.parse(localStorage.getItem("Lista"));
    
    return (
       <div>
          <MenuLateral /> 
          {musicasDestaques.slice(-4).map((musicas) => (
            <CardMusicas musicas ={musicas} />
          ))}
       </div>
    );
};
