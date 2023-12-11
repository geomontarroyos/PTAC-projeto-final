import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function Cadastro() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);
  const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1)
  const [nome, setNome] = useState("");
  const [cantor, setCantor] = useState("");
  const [estilo, setEstilo] = useState("");
  const [gravadora, setGravadora] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [link, setLink] = useState("");
  const [curtidas, setCurtidas] = useState("");

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista))},
    [lista]);

  const dadosSalvos = (e) => {
    e.preventDefault();

     setLista([...lista, {
      id: id,
      nome: nome,
      cantor: cantor,
      estilo: estilo,
      gravadora: gravadora,
      dataLancamento: dataLancamento,
      link: link,
      curtidas: curtidas
     }]);
      
    
    setId(id + 1);
    setNome("");
    setCantor("");
    setEstilo("");
    setGravadora("");
    setDataLancamento("");
    setLink("");
    setCurtidas("");
  };

  const removerdados = (id) => {
    const auxLista = lista.filter((remover) => remover.id !== id);
    setLista(auxLista);
  };

  return (
    <div className="container">
      <h1>Cadastro das Melhores Músicas</h1>
      <form onSubmit={dadosSalvos}>

          <h3>Digite o ID da música a ser adicionada:</h3>
          <input type="text" 
            value={id}
            onChange={(e) =>  setId(e.target.value) }/>

         <h3>Digite sua musica a ser adicionada:</h3>
          <input type="text" 
            value={nome}
            onChange={(e) =>  setNome(e.target.value) }/>
          
          <h3>Digite o cantor da musica adicionada:</h3>
          <input type="text" 
            value={cantor}
            onChange={(e) =>  setCantor(e.target.value) }/>

          <h3>Digite o estilo da musica adicionada:</h3>
          <input 
            type="text" 
            value={estilo} 
            onChange={(e) => setEstilo(e.target.value)} />

          <h3>Digite a gravadora da musica adicionada:</h3>
          <input type="text" 
            value={gravadora}
            onChange={(e) =>  setGravadora(e.target.value) }/>

          <h3>Digite data de lançamento da musica a ser adicionada:</h3>
          <input type="text" 
            value={dataLancamento}
            onChange={(e) =>  setDataLancamento(e.target.value) }/>

          <h3>Digite a quantidade de curtidas a  música a ser adicionada tem :</h3>
          <input type="text" 
            value={curtidas}
            onChange={(e) =>  setCurtidas(e.target.value) }/>   

          <h3>Digite o link da musica a ser adicionada:</h3>
          <input type="text" 
            value={link}
            onChange={(e) => setLink(e.target.value) }/> 

          <button>Adicionar nova música</button>
      </form>
      

      {lista.map((remover) => (
        <ul key={remover.id}>
          <Link to={`/detalhes/${remover.id}`}>
            <li>
              Nome:<p>{remover.nome}</p>
            </li>
            <li>
              Cantor:<p>{remover.cantor}</p>
            </li>
            <li>
              Estilo:<p>{remover.estilo}</p>
            </li>
            <button onClick={() => removerdados(remover.id)}>Remover</button>
          </Link>
        </ul>
      ))}

      <button>
        <Link to="/">Voltar para a página inicial</Link>
      </button>
    </div>
  );
};







