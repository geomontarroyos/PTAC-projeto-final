import CardVideos from "../Componentes/CardVideos"
import { useParams } from "react-router-dom";

export default function Detalhe() {
           
       const {id} = useParams()
       const listaMusica = JSON.parse(localStorage.getItem("Lista"))
       const Detalhe = listaMusica.filter((musicas)=>{
          if(musicas.id == id) {
              return musicas;
            }
             return null
        })
       console.log(Detalhe[0])
       return(
         <CardVideos musicas = {Detalhe[0]} />
      );
 }