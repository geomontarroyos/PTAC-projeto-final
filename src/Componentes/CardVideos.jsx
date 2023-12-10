import { Link } from "react-router-dom";import { Link } from "react-router-dom";

export default function CardVideo({Musicas}){
  return(
        <div>

            <p>{Musicas.Nome}</p>
            <p>{Musicas.Cantor}</p>
            

            <Link to={`/detalhe/${Musicas.id}`}><button>Venha ouvir mais músicas</button></Link>       
              <iframe
                 width="500"
                 height="500"
                 src={`https://www.youtube.com/embed/${Musicas.link.slice(10)}`}
                 frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowfullscreen>    
              </iframe> 

          
         </div>  
        );
 }