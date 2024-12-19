import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="app-navbar">
      <ul>
        <li><Link to="/app/motoristas">Motoristas</Link></li>
        <li><Link to="/app/veiculos">Veículos</Link></li>
        <li><Link to="/app/editar">Perfil do Usuário</Link></li>
        {/* <li><Link to="/app/settings">Configurações</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
