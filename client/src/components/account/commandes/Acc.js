import React from 'react'
import "../../../index.css"
import useForm from './useForm'
import validation from './validation'
import moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
const Acc = (props) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        validation
    );
    var numDoss = props.match.params.id;
    var duree = 2;
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
    return (
        <div className="acc-container">

            
            <div className="form-container">
                <h2>Remplissez ce formulaire </h2>
                <h1>Dossier n°{numDoss}: Service commandes</h1>
                <form onSubmit={handleSubmit} className="commandes-form" noValidate>
                    <div className="cont date-debut-container">
                        <div className="content">
                                                    
                            <input 
                                type= "date"
                                value={debutDate} 
                                name="date"

                                className="date"/>
                        </div>
                        {errors.date && <p className="err-txt">{errors.date}</p>}
                        
                    </div>
                    <div className="cont dateFacPer-container">
                        <div className="content">
                        <input 
                                type= "date"
                                value={values.dateFacPer} 
                                name="dateFacPer"
                                placeholder="date Facture Performa *"
                                className="dateFacPer"required/>
                        </div>
                        {errors.dateFacPer && <p className="err-txt">{errors.dateFacPe}</p>}
                    </div>
                    <div className="cont numFacPer-container">
                        <div className=" content">    
                            <input 
                                type="text"
                                name="numFacPer"
                                value={values.numFacPer}
                                onChange={handleChange}
                                placeholder="Numero Facture Performa *" 
                                className="numFacPer" 
                                autocomplete="off" required/>
                        </div>
                        {errors.dateFacPe && <p className="err-txt">{errors.dateFacPe}</p>}
                    </div>
                    <div className="cont numFacDef-container">
                        <div className=" content">
                            <input 
                                type= "text"
                                value={values.numFacDef} 
                                onChange={handleChange}
                                name="numFacDef"
                                placeholder="Numero Facture Definitive *"
                                className="numFacDef"required/>
                            
                        </div>
                        {errors.numFacDef && <p className="err-txt">{errors.numFacDef}</p>}
                    </div>
                    <div className="cont dateCom-container">
                        <div className=" content">
                            <input 
                                type= "date"
                                value={values.dateCom} 
                                onChange={handleChange}
                                name="dateCom"
                                placeholder="Date du bon de la Commande *"
                                className="dateCom"required/>
                            
                        </div>
                        {errors.dateCom && <p className="err-txt">{errors.dateCom}</p>}
                    </div>
                    <div className="cont numCom-container">
                        <div className=" content">
                        <input 
                                type="text" 
                                name="numCom"
                                value={values.numCom}
                                onChange={handleChange}
                                placeholder="Numéro du bon de la commandes *" 
                                className="numCom" 
                                autocomplete="off" required/>
                        </div>
                        {errors.numCom && <p className="err-txt">{errors.numCom}</p>}
                    </div>
                    <div className="cont numBon-container">
                        <div className=" content">
                        <input 
                                type="text" 
                                name="numBon"
                                value={values.numBon}
                                onChange={handleChange}
                                placeholder="Numéro du bon de la récéption *" 
                                className="numBon" 
                                autocomplete="off" required/>
                        </div>
                        {errors.numBon && <p className="err-txt">{errors.numBon}</p>}
                    </div>
                    <div className="cont respo-container">
                        <div className=" content">
                        <input 
                                type="text" 
                                name="respo"
                                value={values.respo}
                                onChange={handleChange}
                                placeholder="Responsable du dossier *" 
                                className="respo" 
                                autocomplete="off" required/>
                            
                        </div>
                        {errors.respo && <p className="err-txt">{errors.respo}</p>}
                    </div>
                    <div className="cont montant-container">
                        <div className=" content">
                        <input 
                                type="text" 
                                name="montant"
                                value={values.montant}
                                onChange={handleChange}
                                placeholder="Montant*" 
                                className="montant" 
                                autocomplete="off" required/>
                            
                        </div>
                        {errors.montant && <p className="err-txt">{errors.montant}</p>}
                    </div>
                    <div className="cont date-limite-container">
                        <div className="content" id={idDate}>
                                                       
                            <input 
                                type= "date"
                                value={limiteDate} 
                                name="date"
                                className="date2"/>
                        </div>
                        {errors.date && <p className="err-txt">{errors.date}</p>}
                        
                    </div>
                    <div className="cont desc-container">
                        <div className="content">
                            <input 
                                type="textarea"
                                name="desc"
                                value={values.desc}
                                onChange={handleChange} 
                                placeholder="Observation" 
                                className="desc" autoComplete="off"/>
                        </div>
                    </div>
                    <div className="cont file-container">
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
                    </div>
                    <div className="btn-sauv">
                        <button type="submit" className="btn-done" > Sauvegarder </button>
                    </div>
                    <div className="btn-send">
                        <button type="submit" className="btn-done" > Envoyer </button>
                    </div>
                    <div className="btn-arreter">
                        <button className="btn-done" > Annuler </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Acc
