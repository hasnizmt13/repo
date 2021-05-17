import './Style_sheet.css'
import logoimg from "../../../images/folder-images-main/lo.svg"
import prfp from "../../../images/folder-images-main/imagefille.jpg"
import Notif from "./not-num.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faEject, faSortUp } from '@fortawesome/free-solid-svg-icons'
import Pmenu from "./profile-menu"
import Show from "./show.js"
import Notification from "./Notification.js"

import React, { useState, useEffect } from "react";
import { useRef } from 'react'
// let useClickOutside = (handler1) => {
//     let menuref = useRef();
//     useEffect(() => {
//         let handler = (event) => {
//             if (!menuref.current.contains(event.target)) {
//                 handler1();
//             }
//         };
//         document.addEventListener("mousedown", handler);
//         return () => {
//             document.removeEventListener("mousedown", handler);
//         }
//     });
//     return menuref;
// }
const Head = ({ userInfo, serviceinfo }) => {
    const [menu, setMenu] = useState(false)
    const [notMenu, setNotMenu] = useState(false)
    const fileinfo = {
        num: '13',
        date: '13-5'
    };
    return (
        <header className="head-mon-serv">

            <nav className="nav-container-mon-serv">
                <div className="logo-container">
                    <a>
                        <img src={logoimg} height="40" className="lg" />
                    </a>
                </div>

                <ul className="navbar1 navbar">
                    <li className={serviceinfo.x1}>
                        <a href={serviceinfo.link1}>Mon service</a>
                    </li>
                    <li className={serviceinfo.x2}>
                        <a href={serviceinfo.link2}>Archive</a>
                    </li>
                    <li className={serviceinfo.x3}>
                        <a href={serviceinfo.link3}>Statistiques</a>
                    </li>
                    <li className={serviceinfo.x4}>
                        <a href={serviceinfo.link4}>Dossier en cours</a>
                    </li>
                </ul>
                <ul className="navbar2 navbar">

                    <li className="nav-el2 nav-el" >
                        <a className="element" onClick={() => setNotMenu(!notMenu)}>
                            <span className="bell" > <FontAwesomeIcon icon={faBell} className="icon" /></span>
                            <span className="number"><Notif /></span>
                        </a>

                    </li>
                    <li className="nav-el3 nav-el" >
                        <a className="elementP" onClick={() => setMenu(!menu)}>
                            <img src={prfp} className="avatar" />
                        </a>
                    </li>
                </ul>

            </nav>
            <div>
                { notMenu && <Show /> }
                {menu && <Pmenu userInfo={userInfo} />}
            </div>
        </header >

    )
}
export default Head;