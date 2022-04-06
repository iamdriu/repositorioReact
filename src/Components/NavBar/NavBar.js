import CartWidget from '../CartWidget/CarWidget';
import ClassCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">TechOL</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <button type="button" class="btn btn-light"><Link to='/category/celular' className='Option'>Celular</Link></button>
              <button type="button" class="btn btn-light"><Link to='/category/notebook' className='Option'>Notebook</Link></button>
            </div>
          </div>
        </div>
            <CartWidget />
            <div>0</div>
        </nav>
    )
}

export default NavBar