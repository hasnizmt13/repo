import "../../../Deco.css"
import { NavLink } from 'react-router-dom'
const Gauche = () => {

    return (
        <div class="MenuPara">
            <header>Mes Paramètres</header>
            <NavLink to="./Marché" className="menulink" activeClassName="Active"><span>Profil</span>  </NavLink>
            <NavLink to="./Marché" className="menulink" activeClassName="Active"><span>Compte</span>  </NavLink>
            <NavLink to="./Marché" className="menulink" activeClassName="Active"><span>Sécurité</span>  </NavLink>
            <NavLink to="./Settings" className="menulink" activeClassName="Active"><span>Notifications</span>  </NavLink>
            <NavLink to="./Marché" className="menulink" activeClassName="Active"><span>Autorisations</span>  </NavLink>
        </div>

    )
}

export default Gauche;