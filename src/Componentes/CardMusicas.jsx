import { Link } from 'react-router-dom';
import '../styles/card.css';

export default function CardMusicas({ musicas }) {
  return (
    <div className='content-card'>
      <div>
      <p className='card-info'>{musicas.nome}</p>
      <p className='card-info'>{musicas.cantor}</p>
      <p className='card-info'>{musicas.dataLancamento}</p>

      <iframe
        width="500"
        height="500"
        src={`https://www.youtube.com/embed/${musicas.link.slice(17)}`}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

    
      </div>
        <div className="button-card">
          <Link to={`/detalhes/${musicas.id}`}>
            <button className='ver-mais-button'>Ver mais</button>
          </Link>
        </div>
    </div>
  );
};
