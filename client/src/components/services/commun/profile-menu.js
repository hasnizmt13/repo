import './Style_sheet.css'
import prfp from "../../../images/folder-images-main/imagefille.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faStopwatch, faArchive, faPowerOff, faUser, faSwatchbook } from '@fortawesome/free-solid-svg-icons'
const Pmenu = ({ userInfo }) => {

    return (
        <div className="profilemenu">
            <div className="profile">
                <img src={prfp} className="avatar" />
                <p className="userinfo">
                    <h3> {userInfo.nom} </h3>
                    <h5> {userInfo.email} </h5>
                </p>
                <a href="#" className="compte">Gérer votre compte</a>
            </div>
            <nav className="links">
                <ul className="navelement">
                    <FontAwesomeIcon icon={faFolder} className="icon" />
                    <li>
                        <a href="#" className="dossier">Mes dossiers </a>
                    </li>
                </ul>
                <ul className="actif">
                    <FontAwesomeIcon icon={faUser} className="icon" />
                    <li >
                        <a href="#" className="service">Mon service</a>
                    </li>
                </ul>
                <ul className="navelement">
                    <FontAwesomeIcon icon={faArchive} className="icon" />
                    <li>
                        <a href="#" className="archive">Mon archive</a>
                    </li>
                </ul>
            </nav>
            <div className="log-out" >
                <FontAwesomeIcon icon={faPowerOff} className="icon" />
                <a href="#" className="deconnecter">Déconnecter </a>
            </div>
        </div>
    );

};
export default Pmenu;