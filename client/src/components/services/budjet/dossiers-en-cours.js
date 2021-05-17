import Head from "../commun/header.js"
import Droite from "../commun/droite.js"
import Foot from "../commun/footer"
import Milieudos_b from "./milieudossC"
import { useState, useEffect } from 'react'
const doss_cours_b = () => {
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
        nom: 'nom prenom (budjet)',
        email: 'email@gmail.com',
        role: 'budjet'
    };
    const serviceinfo = {

        x1: 'nav-el',
        link1: './Bujet',
        x2: "nav-el",
        link2: './archive',
        x3: "nav-el",
        link3: './statistiques',
        x4: "actif",
        link4: '#'

    }
    return (
        <div className="marche" >
            <Head userInfo={userInfo} serviceinfo={serviceinfo} />
            <div className="noyeau-marche">

                <Droite />
                <Milieudos_b />
            </div>
            <Foot />
        </div>
    )
}
export default doss_cours_b;