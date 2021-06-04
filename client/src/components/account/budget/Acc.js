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
            <Header userInfo={userInfo} serviceinfo={userInfo.service} num={num}/>
            <div className="mid">
                <Menu serviceinfo={userInfo.service}/>
                <div className="form-container">
                    <div className="top-form">
                        <h1>Service Budget dossier n°{numDoss}</h1>
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
                    <div className="marche-form form">
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
                                <label>Date d'engagement au CF</label> 
                                <span>
                                    C'est la date d'engagement au cf 
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={values.dateCF} 
                                    name="dateCF"
                                    onChange={handleChange}
                                    placeholder="Date d'engagement au CF"
                                    className="date"/>
                                {errors.dateCF && <p className="err-txt">{errors.dateCF}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Motif du rejet</label> 
                                <span>
                                    Le motif au cas du rejet du dossier
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type="text" 
                                    name="motif"
                                    disabled={disable}
                                    value={values.motif}
                                    onChange={handleChange}
                                    placeholder="Motif du rejet"  
                                    autocomplete="off" required/>
                            </div>
                        </div>
                        
                        <div className="cont">
                            <div className="text">
                                <label>Date de Visa/rejet</label> 
                                <span>
                                    Date de Visa/rejet définitif du contrôleur financier 
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    disabled={disable}
                                    value={values.dateVisa} 
                                    name="dateVisa"
                                    onChange={handleChange}
                                    className="date"/>
                                {errors.dateVisa && <p className="err-txt">{errors.dateVisa}</p>}
                            </div>
                        </div>
                        <div className="cont">
                            <div className="text">
                                <label>Date de mendatement</label>
                                <span>
                                    C'est la date de mendatement
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    value={values.dateMend} 
                                    disabled={disable}
                                    name="dateMend"
                                    onChange={handleChange}
                                    className="date"/>
                                {errors.dateMend && <p className="err-txt">{errors.dateMend}</p>}
                            </div>
                        </div>
                        
                        
                        <div className="cont">
                            <div className="text">
                                <label>Date de transmission a l'agence</label> 
                                <span>
                                    Date de transmission a l'agence de comptabilité
                                </span>
                            </div>
                            <div className=" content"> 
                                <input 
                                    type= "date"
                                    value={values.dateTr} 
                                    disabled={disable}
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
                            <div className=" content"> 
                                <input 
                                    id={idDate}
                                    disabled={disable}
                                    type= "date"
                                    value={limiteDate} 
                                    name="date2"
                                    className="date2"/>
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
                                    type="textarea"
                                    disabled={disable}
                                    name="desc"
                                    value={values.desc}
                                    onChange={handleChange} 
                                    placeholder="Observation" 
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