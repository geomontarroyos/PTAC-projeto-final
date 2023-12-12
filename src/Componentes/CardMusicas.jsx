import { Link } from 'react-router-dom';
import '../styles/card.css'

export default function CardMusicas({ musicas }) {
  return (
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
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen/>

    <Link to={`/detalhes/${musicas.id}`}> <button>Ver mais</button> </Link>
    </div>
  );
};
