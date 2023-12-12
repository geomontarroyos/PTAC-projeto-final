export default function CardDetalhe({musicas}){

  return(
        <div>

            <p>{musicas.nome}</p>
            <p>{musicas.cantor}</p>
            <p>{musicas.estilo}</p>
            <p>{musicas.gravadora}</p>
            <p>{musicas.dataLancamento}</p>


              <iframe
                 width="500"
                 height="500"
                 src={`https://www.youtube.com/embed/${musicas.link.slice(17)}`}
                 frameborder="0"
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 allowfullscreen>    
              </iframe> 

          
         </div>  
        );
 }