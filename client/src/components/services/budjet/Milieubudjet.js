import '../commun/Style_sheet.css'
import React, { useState, useEffect } from "react";
import Dossier from "../commun/Dossier.js"
const Milieub = ({ userInfo }) => {
    var debutDate
    const [x, setx] = useState(false);
    function addChild() {
        setNum([...Num, numDoss])
        setx(true);
        var showdate = new Date();

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
                setNum(jsonRes.infor.budgetDoss)
                
            }
        })


    })

    return (
        <div className="partie-milieu">

            <h3> Bienvenue dans le service   {userInfo.service} !</h3>
            <h4 > cliquer sur nouveau pour créer un nouveau dossier .</h4>

            <div className="content-marche">
                <div className="titre-nouveau">
                    {x && (<h3 >Les nouveaux dossiers que vous avez crée:</h3>)}
                </div>


                <div className="dossiers">

                    {
                        
                        Num.map((n) => {
                            return <Dossier numDoss={n} service={userInfo.service} />
                        })
                    }

                </div>
            </div>

        </div>

    );

};
export default Milieub;