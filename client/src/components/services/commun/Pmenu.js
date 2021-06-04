import './Style_sheet.css'
import prfp from "../../../images/folder-images-main/imagefille.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons'
const Pmenu = ({ userInfo }) => {

    return (
        <div className="profilemenu">
            <div className="profile">
                <div className="info">
                    <img src={prfp} className="avatar" />
                    <p className="userinfo">
                        <h4> {userInfo.nom} </h4>
                        <h5> {userInfo.email} </h5>
                    </p>
                </div>
                <div className="lien">
                    <FontAwesomeIcon icon={faUserCog} className="icon" />
                    <a href="./Settings" className="compte">Gérer votre compte</a>
                </div>
                <div className="lien" >
                    <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
                    <a href="#" className="deconnecter">Déconnecter </a>
                </div>
            </div>

        </div>
    );

};
export default Pmenu;