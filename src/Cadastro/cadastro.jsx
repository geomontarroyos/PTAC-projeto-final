import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function MusicaCadastro() {
    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")) || [];
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [nome, setNome] = useState("");
    const [cantor, setCantor] = useState("");
    const [estilo, setEstilo] = useState("");
    const [gravadora, setGravadora] = useState("");
    const [dataLancamento, setDataLancamento] = useState("");
    const [link, setLink] = useState("");



   useEffect(()=> {localStorage.setItem("Lista", JSON.stringify(lista))}, [lista]);

   const navagate = useNavigate()


    const dadosSalvos = async (e) => {
      e.preventDefault();

       await setLista([
        ...lista,
        {
          id: id,
          nome: nome,
          cantor: cantor,
          estilo: estilo,
          gravadora: gravadora,
          dataLancamento: dataLancamento,
          link: link
        }
      ]);

      navagate("/");
      setId(id+1);
      setNome("");
      setCantor("");
      setEstilo("");
      setGravadora("");
      setDataLancamento("");
      setLink("");

    };
   
    const remover = (id) => {
      /*setLista(lista.filter((ativ) => (ativ.id !== id ? lista : null)));*/
      const auxLista = [];
      lista.map((lista) => {
          if (lista.id !== id) {
              auxLista.push(lista);
          }
      });
      setLista(auxLista);
  }
  
    return (
        <div class="container">
      <h1>Cadastro das Melhores Musicas</h1>
      <form onSubmit={dadosSalvos}>

          <h3>Digite o ID da música a ser adicionada:</h3>
          <input type="text" 
            value={id}
            onChange={(e) => { setId(e.target.value) }}/>

         <h3>Digite sua musica a ser adicionada:</h3>
          <input type="text" 
            value={nome}
            onChange={(e) => { setNome(e.target.value) }}/>
          
          <h3>Digite o cantor da musica adicionada:</h3>
          <input type="text" 
            value={cantor}
            onChange={(e) => { setCantor(e.target.value) }}/>

          <h3>Digite o estilo da musica adicionada:</h3>
          <input type="text" 
            value={estilo}
            onChange={(e) => { setEstilo(e.target.value) }}/>

          <h3>Digite a gravadora da musica adicionada:</h3>
          <input type="text" 
            value={gravadora}
            onChange={(e) => { setGravadora(e.target.value) }}/>

          <h3>Digite data de lançamento da musica a ser adicionada:</h3>
          <input type="text" 
            value={dataLancamento}
            onChange={(e) => { setDataLancamento(e.target.value) }}/>  

          <h3>Digite o link da musica a ser adicionada:</h3>
          <input type="text" 
            value={link}
            onChange={(e) => { setLink(e.target.value) }}/> 

       

          <button>Adicionar nova música</button>
      </form>

      {lista.map((ativ) =>
          <ul key={ativ.id}>
            <Link to={`/detalhe/${ativ.id}`}>
              <li>
                  Autor:<p>{ativ.autor}</p>
              </li>
              </Link>
              <li>
                  Livro:<p>{ativ.livro}</p>
              </li>
              <li>
                  Genero:<p>{ativ.genero}</p>
                  
              </li>
          </ul>
      )}
     <button onClick={() => remover(ativ.id)}>Remover</button>
     <button> <Link to="/">Voltar para a página inicial</Link> </button>
  </div>
);
}