import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Cadastro.css'
import MenuLateral from "../Menu/MenuLateral";

export default function Cadastro() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
  const [lista, setLista] = useState(listaLocalStorage);
  const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1)
  const [nome, setNome] = useState("");
  const [cantor, setCantor] = useState("");
  const [estilo, setEstilo] = useState("");
  const [gravadora, setGravadora] = useState("");
  const [dataLancamento, setDataLancamento] = useState("");
  const [letra, setLetra] = useState("");
  const [link, setLink] = useState("");
  const [curtidas, setCurtidas] = useState("");

  useEffect(() => {
    localStorage.setItem("Lista", JSON.stringify(lista))},
    [lista]);


    const navigate = useNavigate()  


  const dadosSalvos = async (e) => {
    e.preventDefault();

     await setLista([...lista, {
      nome: nome,
      cantor: cantor,
      estilo: estilo,
      gravadora: gravadora,
      dataLancamento: dataLancamento,
      link: link,
      curtidas: curtidas,
      id: id,
      letra :letra
     }]);
      
    
  
    setNome("");
    setCantor("");
    setEstilo("");
    setGravadora("");
    setDataLancamento("");
    setLink("");
    setCurtidas("");
    setId(id + 1);
    navigate("/");
    setLetra("")
  };

  return (
    <div>
      <MenuLateral/>
    
    <div className="content-cadastro">
      <h1>Cadastro das Melhores Músicas</h1>
      
      <form onSubmit={dadosSalvos}>
      <div>
         <h3>Digite o nome da música:</h3>
          <input type="text" 
            value={nome}
            onChange={(e) =>  setNome(e.target.value) }/>
          
          <h3>Digite o cantor da música:</h3>
          <input type="text" 
            value={cantor}
            onChange={(e) =>  setCantor(e.target.value) }/>

          <h3>Digite o estilo da musica:</h3>
          <input 
            type="text" 
            value={estilo} 
            onChange={(e) => setEstilo(e.target.value)} />

          <h3>Digite a gravadora da musica:</h3>
          <input type="text" 
            value={gravadora}
            onChange={(e) =>  setGravadora(e.target.value) }/>

          <h3>Digite data de lançamento da musica:</h3>
          <input type="text" 
            value={dataLancamento}
            onChange={(e) =>  setDataLancamento(e.target.value) }/>

          <h3>Digite a quantidade de curtidas da  música:</h3>
          <input type="text" 
            value={curtidas}
            onChange={(e) =>  setCurtidas(e.target.value) }/>   

          <h3>Digite a letra da musica:</h3>
          <input type="text" 
            value={letra}
            onChange={(e) =>  setLetra(e.target.value) }/> 

          <h3>Digite o link da musica:</h3>
          <input type="text" 
            value={link}
            onChange={(e) => setLink(e.target.value) }/> 

            
          <h3>ID:</h3>
          <input type="text" 
            value={id}
            onChange={(e) =>  setId(e.target.value) }/>
        </div>
          <button className="button-cadastro">Adicionar nova música</button>
      </form>
    
      <button className="button-voltar">
        <Link to="/">Voltar ao ínicio</Link>
      </button>
    </div>
    </div>
  );
};







