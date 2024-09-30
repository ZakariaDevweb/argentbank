import logo from '../../assets/img/argentBankLogo.png';
import '../../assets/styles/styles.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (

      
      <header className="header">
        <nav className="main-nav">
          <NavLink to="/">
            <img className="main-nav-logo-image" src={logo} alt="Logo" />
          </NavLink>
          <div>
            <NavLink to="/profil" className="link" activeclassname="active"><i className="fa fa-user-circle sign-in-icon"></i>pseudo</NavLink>
            <NavLink to="/sign-in"  className="link" activeclassname="active">
              <i className="fa fa-sign-out sign-in-icon"></i> Sign Out</NavLink>
          </div>
        </nav>
      </header>
    );
  }



export default Header;