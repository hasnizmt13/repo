import React from 'react'
import "../../../index.css"
import useForm from './useForm'
import validation from './validation'
import moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileDownload } from '@fortawesome/free-solid-svg-icons'
const Acc = ({submitForm, arreter, page}) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validation,
        page
      );
    return (
        <div className="acc-container">

            
            <div className="form-container">
                <h1>Dossier n°1: Service comptable</h1>
                <form onSubmit={handleSubmit} className="respo-form" noValidate>
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
                    <div className="cont date-container">
                        <div className="content">                             
                            <input 
                                type= "date"
                                value={values.date} 
                                name="date"
                                className="date"/>
                        </div>
                        {errors.date && <p className="err-txt">{errors.date}</p>}
                        
                    </div>
                    <div className="cont completer-container">
                        <div className=" content">
                            <input 
                                type= "text"
                                value={values.completer} 
                                onChange={handleChange}
                                name="completer"
                                placeholder="Pieces a completer *"
                                className="completer"required/>
                            
                        </div>
                        {errors.completer && <p className="err-txt">{errors.completer}</p>}
                    </div>
                    <div className="cont dateComplement-container">
                        <div className=" content">
                            <input 
                                type= "date"
                                value={values.dateComplement} 
                                onChange={handleChange}
                                name="dateComplement"
                                placeholder="Date de Complement du dossier *"
                                className="dateComplement"required/>
                            
                        </div>
                        {errors.dateComplement && <p className="err-txt">{errors.dateComplement}</p>}
                    </div>
                    <div className="cont datePay-container">
                        <div className=" content">
                            <input 
                                type= "date"
                                value={values.datePay} 
                                onChange={handleChange}
                                name="datePay"
                                placeholder="Date de Payement *"
                                className="datePay"required/>
                            
                        </div>
                        {errors.datePay && <p className="err-txt">{errors.datePay}</p>}
                    </div>
                    <div className="cont desc-container">
                        <div className="content">
                            <input 
                                type="text"
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
                    <div className="btn-send">
                        <button type="submit" onClick={submitForm} className="btn-send" > Envoyer </button>
                    </div>
                    <div className="btn-arreter">
                        <button type="" onClick={arreter} className="btn-" > Annuler </button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Acc
