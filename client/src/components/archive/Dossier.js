import React from 'react'
import "../services/commun/Style_sheet.css"
import { Link } from "react-router-dom"
const Dossier = ({ numDoss, done, datelim }) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }

        setStyle(newStyle);
    }, 200);

    var path = "../archive-form/"+ numDoss
    const curentdate = new Date().toLocaleDateString();

    return (
        <div className="marche-dossier">
            <span className="num-dossier date-dossier">
                <Link to={path}>Dossier n°{numDoss} </Link>
            </span>
            <span className="date-dossier">{curentdate}</span>
            <span className="date-dossier">{datelim}</span>
            <span className="date-dossier form">
                <a href={path}> Consulter le dossier</a>
            </span>
        </div>
    )
}

export default Dossier