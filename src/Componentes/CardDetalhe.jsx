export default function CardVideos({Musicas}){

  return(
        <div>

            <p>{Musicas.nome}</p>
            <p>{Musicas.cantor}</p>
            <p>{Musicas.estilo}</p>
            <p>{Musicas.gravadora}</p>
            <p>{Musicas.dataLancamento}</p>


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