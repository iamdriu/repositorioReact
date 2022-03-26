import CartWidget from '../CartWidget/CarWidget';
import ClassCount from '../ItemCount/ItemCount';

const NavBar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TechOL</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <button type="button" class="btn btn-light">Celulares</button>
              <button type="button" class="btn btn-light">Notebooks</button>
            </div>
          </div>
        </div>
            <CartWidget />
            <div>0</div>
        </nav>
    )
}

export default NavBar