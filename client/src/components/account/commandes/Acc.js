import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "../index.css"
import useForm from './useForm'
import validation from './validation'

import moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
import Header from "../../services/commun/Header.js"
import Menu from "../../services/commun/Droite.js"
const Acc = (props) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        validation
    );
    var all = props.match.params.id;
    var numDoss = Math.floor(all / 10)
    var disable = true
    if (all % 10 == 1){
        disable = false
    }
    var duree = 10;
    var date = new Date()
    var debutDate = date.getFullYear()+'-'
    if (date.getMonth()<10){
        debutDate += '0'+date.getMonth()+'-'
    }
    else {
        debutDate += date.getMonth()+'-'+date.getDate();
    }
    if (date.getDate() < 10){
        debutDate += '0'+date.getDate()
    }
    else{
        debutDate += date.getDate();
    }
    var date2 = new Date(date.getTime() +(duree*24*60*60*1000))
    var limiteDate = date2.getFullYear()+'-'
    if (date2.getMonth()<10){
        limiteDate += '0'+date2.getMonth()+'-'
    }
    else {
        limiteDate += date2.getMonth()+'-';
    }
    if (date2.getDate() < 10){
        limiteDate += '0'+date2.getDate()
    }
    else{
        limiteDate += date2.getDate();
    }
    var current = new Date()
    var idDate = 'avance'
    if (current.getTime() > date2.getTime()){
        idDate = 'retard'
    }
    const [userInfo, setUserInfo] = useState({id: '', nom: '', prenom: '',email: '',psswrd: '',service: '',role: '',CT: ''})
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
  const serviceinfo = "./"+userInfo.service;
  const [num, setNum] = useState([])
    useEffect(() => {
        fetch("/infor/").then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => {
            if (jsonRes !== undefined) {
                setNum(jsonRes.infor.comptableDoss)
            }
        })
    })
    return (
        <form onSubmit={handleSubmit} className="acc-container" noValidate>
            <Header userInfo={userInfo} serviceinfo={serviceinfo} num={num}/>
            <div className="mid">
                <Menu serviceinfo={serviceinfo}/>
                <div className="form-container">
                    <div className="top-form">
                        <h1>Service commandes dossier n°{numDoss}</h1>
                        <div className="btns">
                            <div className="btn">
                                <button className="btn-arreter" > <Link to="../marche" className="lien">Arreter</Link> </button>
                            </div>
                            <div className="btn">
                                <button className="btn-send" type="submit" > Envoyer </button>
                            </div>
                            <div className="btn">
                                <button className="btn-sauv" >✓ Sauvegarder </button>
                            </div>
                        </div>
                    </div>
                    <div className="commande-form form">
                        <div className="cont">
                            <div className="text">
                                <label>Date de réception </label> 
                                <span>
                                    La date ou le dossier est arrivé dans le service comptabilité
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={debutDate} 
                                    name="debutDate"
                                    className="date"/>
                                {errors.date && <p className="err-txt">{errors.date}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Responsable</label>
                                <span>
                                    Le responsable doit etre unique
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                        type="text" 
                                        name="respo"
                                        disabled={disable}
                                        value={values.respo}
                                        onChange={handleChange} 
                                        placeholder="Responsable du dossier *" 
                                        className="respo" 
                                        autocomplete="off" required/>
                                {errors.respo && <p className="err-txt">{errors.respo}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Décision</label> 
                                <span>
                                    La décision est inchangeable
                                </span>
                            </div>
                            <div className=" content"> 
                                <select name="decis" defaultValue={''} value={values.decis} onChange={handleChange} disabled={disable}>
                                    <option value='' disabled className="none">Choisissez la décision *</option> 
                                    <option value="dec1" className="ot"> Accepté </option>
                                    <option value="dec2"> Refusé </option>
                                </select>
                                {errors.decis && <p className="err-txt">{errors.decis}</p>}
                            </div>
                        </div>
                        
                        
                        <div className="cont">
                            <div className="text">
                                <label>Numéro facture performa</label> 
                                <span>
                                    Numéro utilisé dans la facture performa
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text" 
                                    disabled={disable}
                                    name="numFacPer"
                                    value={values.numFacPer}
                                    onChange={handleChange}
                                    placeholder="Numéro Facture performa *"  
                                    autocomplete="off" required/>
                                {errors.numFacPer && <p className="err-txt">{errors.numFacPer}</p>}
                                
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date Facture performa</label> 
                                <span>
                                    C'est la date d'arrivé de la facture performa 
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    name="dateFacPe"
                                    value={values.dateFacPe}
                                    onChange={handleChange} 
                                    className="date"/>
                                {errors.dateFacPe && <p className="err-txt">{errors.dateFacPe}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Montant</label> 
                                <span>
                                    Montant doit etre précis
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text" 
                                    disabled={disable}
                                    name="montant"
                                    value={values.montant}
                                    onChange={handleChange}
                                    placeholder="Montant *"  
                                    autocomplete="off" required/>
                                {errors.montant && <p className="err-txt">{errors.montant}</p>}
                            </div>
                        </div>
                        
                        <div className="cont">
                            <div className="text">
                                <label>Numéro Bon de commande</label> 
                                <span>
                                    Numéro du bon de commande
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text"
                                    disabled={disable} 
                                    name="numCom"
                                    value={values.numCom}
                                    onChange={handleChange}
                                    placeholder="Bon de commande *"  
                                    autocomplete="off" required/>
                                {errors.numCom && <p className="err-txt">{errors.numCom}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date d'arrivé du bon de commande</label> 
                                <span>
                                    C'est la date d'arrivé du bon de commande 
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={values.dateCom} 
                                    onChange={handleChange}
                                    name="dateCom"
                                    className="date"/>
                                {errors.dateCom && <p className="err-txt">{errors.dateCom}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date de réception de la préstation</label>
                                <span>
                                    C'est la date de reception de la prestation
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={values.datePr} 
                                    onChange={handleChange}
                                    name="datePr"
                                    className="date"/>
                                {errors.datePr && <p className="err-txt">{errors.datePr}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>N° facture définitive</label> 
                                <span>
                                    Numero de facture définitive
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text" 
                                    disabled={disable}
                                    name="numFacDef"
                                    value={values.numFacDef}
                                    onChange={handleChange}
                                    placeholder="Numéro de Facture définitive *"  
                                    autocomplete="off" required/>
                                {errors.numFacDef && <p className="err-txt">{errors.numFacDef}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>N° Bon de réception</label> 
                                <span>
                                    Numero du bon de réception
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text" 
                                    disabled={disable}
                                    name="numBonRec"
                                    value={values.numBonRec}
                                    onChange={handleChange}
                                    placeholder="Numero du bon de réception *"  
                                    autocomplete="off" required/>
                                {errors.numBonRec && <p className="err-txt">{errors.numBonRec}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date d'envoie</label> 
                                <span>
                                    Date d'envoie au service budget 
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={values.dateTr}
                                    onChange={handleChange} 
                                    name="dateTr"
                                    className="date"/>
                                {errors.dateTr && <p className="err-txt">{errors.dateTr}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date limite</label>
                                <span>
                                    C'est la date limite du dossier la durée est imposé par l'administrateur
                                </span>
                            </div>
                            <div className=" content" > 
                                <input 
                                    id={idDate}
                                    disabled={disable}
                                    type= "date"
                                    value={limiteDate} 
                                    name="limiteDate"
                                    className="date"/>
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Observation</label>
                                <span>
                                    Une remarque a ajouter ou autre
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text"
                                    name="desc"
                                    disabled={disable}
                                    value={values.desc}
                                    onChange={handleChange} 
                                    placeholder="Observation"
                                    autoComplete="off" 
                                    className="desc"/>
                            </div>
                        </div>
                        {/* <div className="cont file-container">
                            <div className="content">
                                <input 
                                    type="file"
                                    name="file"
                                    id="file"
                                    value={values.file}
                                    onChange={handleChange} 
                                    placeholder="" 
                                    className="file" autocomplete="off"/>
                                <label className="icn-cont" for="file">
                                    Telecharger vos fichiers
                                    <FontAwesomeIcon icon={faFileDownload} className="icn" />
                                </label>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
            </div>
            
            
        </form>
    )
}

export default Acc