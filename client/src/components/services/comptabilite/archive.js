import Head from "../commun/header"
import Droite from "../commun/droite"
import Foot from "../commun/footer"
import Milieuarc from "../commun/milieuarchive"
import { useState, useEffect } from 'react'
const archive_cp = () => {
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
        nom: 'nom prenom (comptabilité)',
        email: 'email@gmail.com',
        role: 'comptabilité'
    };
    const serviceinfo = {

        x1: 'nav-el',
        link1: './comptable',
        x2: "actif",
        link2: '#',
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
                < Milieuarc />
            </div>
            <Foot />
        </div>
    )
}
export default archive_cp;