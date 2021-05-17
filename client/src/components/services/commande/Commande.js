import Head from "../commun/header.js"
import Droite from "../commun/droite.js"
import Milieub from "./Milieucommande"
import Foot from "../commun/footer"
import { useState, useEffect } from 'react'
const Commande = () => {
    const [userInfo, setUserInfo] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
    const [userIn, setUserIn] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
    useEffect(() => {
        fetch("/users/").then( res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined){
                setUserInfo({...userInfo,
                    id: jsonRes.information.id,
                    nom : jsonRes.information.nom,
                    prenom : jsonRes.information.prenom,
                    email : jsonRes.information.email,
                    psswrd : jsonRes.information.psswrd,
                    service : jsonRes.information.service,
                    role : jsonRes.information.role,
                    CT : jsonRes.information.CT
                }) 
            }
                 
            
        })
        
        
    })
    const serviceinfo = {

        x1: 'actif',
        link1: '#',
        x2: "nav-el",
        link2: './archive',
        x3: "nav-el",
        link3: './statistiques',
        x4: "nav-el",
        link4: './dossiers-en-cours'

    }
    return (
        <div className="marche" >
            <Head userInfo={userInfo} serviceinfo={serviceinfo} />
            <div className="noyeau-marche">
                <Droite />
                <Milieub userInfo={userInfo} />
            </div>
        </div>
    )
}
export default Commande;