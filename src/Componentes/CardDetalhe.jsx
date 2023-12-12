import React from 'react';
import '../styles/cardDetalhe.css'  // Importa o arquivo CSS

export default function CardDetalhe({ musicas }) {
  return (
    <div className="card-container">
      

      <div className="video-container">
        <iframe className='iframe-detalhe'
          width="500"
          height="500"
          src={`https://www.youtube.com/embed/${musicas.link.slice(17)}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className="atributos-container">
        <p>{musicas.nome}</p>
        <p>{musicas.cantor}</p>
        <p>{musicas.estilo}</p>
        <p>{musicas.gravadora}</p>
        <p>{musicas.dataLancamento}</p>
        <p>{musicas.letra}</p>
      </div>
    </div>
  );
}
