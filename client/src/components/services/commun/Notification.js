import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faCheckDouble, faClosedCaptioning } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import "./Style_sheet.css"
const Notification = ({ numDoss }) => {
    return (
        <div className="notification-container">
            <p className="notif-txt">
                Le dossier n°{numDoss} est arrivé récemment 
            </p>
        </div>

    );
}

export default Notification;

