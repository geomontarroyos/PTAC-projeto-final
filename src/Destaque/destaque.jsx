import './style.css';
import MenuLateral from "../Menu/MenuLateral";
import CardVideo from "../Componentes/CardVideo";

export default function destaque() {

    const musicasDestaques = JSON.parse(localStorage.get("Lista"))
    
    return(
       <div>
          < MenuLateral /> 
          {musicasDestaques.slice(-4).map((msuicas)  =>
          < CardVideo musicas = {musicas}/>)}
       </div>
     );
};