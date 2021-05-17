import './Style_sheet.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faExclamationCircle, faFileImport, faHome, faPlus, faPowerOff, faQuestion, faQuestionCircle, faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
import Dossier from "./Dossier.js"
const Droite = () => {
    /* var header = document.getElementById("nav-bar1");
     var btns = header.getElementsByClassName("lien");
     for (var i = 0; i < btns.length; i++) {
         btns[i].addEventListener("click", function () {
             var current = document.getElementsByClassName("actif");
             current[0].className = current[0].className.replace(" actif", "");
             this.className += " actif";
         });
     }*/
    const [more, setmore] = useState(false);
    var x = "plus";
    if (more) {
        x = "moin"
    }
    else {
        x = "plus"
    }
    return (
        <div className="partie-contain">
            <div className="partie-droite">
                <div className="searchbar">
                    <input type="text" placeholder="rechercher" className="txt"></input>
                    <i class="search"><FontAwesomeIcon icon={faSearch} className="icon" /></i>
                </div>
                <div className="dossiers-recents">
                    <p> Dossiers Récents </p>
                    <Dossier />
                    <Dossier />
                    {
                        more && (
                            <Dossier />
                        )}
                    <div className="dossiers-rec-hist">
                        <button className="more" onClick={() => setmore(curentmore => !curentmore)}>{x}</button>
                        {more}
                    </div>

                </div>
                <div>
                    <nav className="nav-bar1" id="nav-bar1">
                        <ul className="lien">
                            <FontAwesomeIcon icon={faHome} className="icon" />
                            <li className="elem">
                                <a href="#" className="home actif">Aceuil </a>
                            </li>
                        </ul>
                        <ul className="lien">
                            <FontAwesomeIcon icon={faFileImport} className="icon" />
                            <li className="elem">
                                <a href="#" className="download">importer</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-bar2">
                        <ul className="lien">
                            <FontAwesomeIcon icon={faCog} className="icon" />
                            <li >
                                <a href="#" className="settings">Paramètre</a>
                            </li>
                        </ul>
                        <ul className="lien">
                            <FontAwesomeIcon icon={faQuestionCircle} className="icon" />
                            <li >
                                <a href="#" className="help">Aide</a>
                            </li>
                        </ul>
                        <ul className="lien">
                            <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
                            <li >
                                <a href="#" className="about">A propos</a>
                            </li>
                        </ul>
                        <ul className="lien">
                            <FontAwesomeIcon icon={faPowerOff} className="icon" />
                            <li >
                                <a href="#" className="logout">déconnecter</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    );

};
export default Droite;