import './header.css';

function Header() {
  return (
    <div className="header">
        <div class="container">
            <div class="logo">Portfolio</div>
            <div class="menu">
                <a href="#About">Sobre</a>
                <a href="#Services">Serviços</a>
                <a href="#Caracteristices">Caracteristicas</a>
                <a href="#Portfolio">Portfolio</a>
                <a href="#Contato">Contato</a>
            </div>
        </div>
    </div>
  );
}

export default Header;
