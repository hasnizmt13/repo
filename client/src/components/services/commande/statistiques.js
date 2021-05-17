import Head from "../commun/header"
import Droite from "../commun/droite"
import Foot from "../commun/footer"
import Milieusta from "../commun/milieustatistiques"
import { useState, useEffect } from 'react'
const statistique_cm = () => {
    /*const [userInfo, setUserInfo] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
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
        
        
    })*/
    const userInfo = {
        nom: 'nom prenom (Commande)',
        email: 'email@gmail.com',
        role: 'Commande'
    };
    const serviceinfo = {

        x1: 'nav-el',
        link1: './Commande',
        x2: "nav-el",
        link2: './archive',
        x3: "actif",
        link3: '#',
        x4: "nav-el",
        link4: './dossiers-en-cours'

    }
    return (
        <div className="marche" >
            <Head userInfo={userInfo} serviceinfo={serviceinfo} />
            <div className="noyeau-marche">

                <Droite />
                <Milieusta />
            </div>
            <Foot />
        </div>
    )
}
export default statistique_cm;
