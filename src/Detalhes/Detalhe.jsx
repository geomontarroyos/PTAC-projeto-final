import CardVideos from "../Componentes/CardDetalhe";
import { useParams } from "react-router-dom";
import MenuLateral from "../Menu/MenuLateral";

export default function Detalhe() {
           
       const {id} = useParams()
       const listaMusica = JSON.parse(localStorage.getItem("Lista"))
       const Detalhe = listaMusica.filter((Musicas)=>{
          if(Musicas.id == id) {
              return Musicas;
            }
             return null
        })
       console.log(Detalhe[0])
       return(
        <div>
          <MenuLateral/>
          <div>
               <CardVideos musicas = {Detalhe[0]} />
          </div>
         </div>
      );
 }