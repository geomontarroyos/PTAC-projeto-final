import { Link } from "react-router-dom";


export default function MenuLateral() {
    return(
        <div>
            <ul>
                <li>
                    <p><Link to={'/'}>Pagina Inicial</Link></p>
                </li>

                <li>
                    <p><Link to={'/destaques'}>Pagina Detalhes</Link></p>
                </li>

                <li>
                    <p><Link to={'/cadastro'}>Pagina de Cadastro</Link></p>
                </li>
            </ul>
        </div>
    );
};