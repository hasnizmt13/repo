import '../commun/Style_sheet.css'
import React, { useState, useEffect } from "react";
import Dossier from "../commun/Dossier.js"
const Milieub = ({ userInfo }) => {
    var debutDate
    const [x, setx] = useState(false);
    function showlist() {
        setx(true);
    }
    const [Num, setNum] = useState([])
    const [numDoss, setNumDoss] = useState(0)
    useEffect(() => {
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNumDoss(jsonRes.infor.numDoss)
                setNum(jsonRes.infor.comptableDoss)
            }
        })


    })

    return (
        <div className="partie-milieu">

            <h3> Bienvenue dans le service   {userInfo.role} !</h3>
            <h4 >cliquer sur consulter pour modifier,cloturé ou finaliser le traitement de ces dossiers </h4>
            <div className="content-marche">
                <div className="btn-contain">
                    <button className="new" onClick={showlist}>
                        <p>Consulter</p>
                    </button>
                </div>
                <div className="titre-nouveau">
                    {x && (<div>
                        <h3 >La liste des dossiers dans votre service: </h3>
                        {
                            Num.map((n) => {
                                return <Dossier numDoss={n} service={userInfo.service} />
                            })
                        }
                    </div>)}
                </div>



            </div>

        </div>

    );

};
export default Milieub;