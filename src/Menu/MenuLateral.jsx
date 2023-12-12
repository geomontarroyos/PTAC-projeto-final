import { Link } from 'react-router-dom';
import './Menu.css'

export default function MenuLateral() {
    return (
        <div className='menu-lateral'>
            
                    <p><Link className='link'  to={'/'}>Pagina Inicial</Link></p>
        
                    <p><Link className='link' to={'/destaque'}>Pagina Destaques</Link></p>
        
                    <p><Link className='link' to={'/cadastro'}>Pagina de Cadastro</Link></p>
        </div>
    );
};
