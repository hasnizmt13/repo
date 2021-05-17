import { useState, useEffect } from 'react';
import validateInfo from './validation.js'

const useForm = (callback, validate, page) => {
  const [values, setValues] = useState({

    completer: '',
    dateComplement: '',
    datePay: '',
    respo: '',
    date: '',
    desc: '',
    file: '',

  });
  useEffect(() => {
    fetch("/infor/").then( res => {
        if (res.ok) {
            return res.json()
        }
    }).then(jsonRes => {
        if (jsonRes !== undefined){
            setValues({...values,
                respo: jsonRes.comptableInfo.respo,
                completer: jsonRes.comptableInfo.completer,
                desc: jsonRes.comptableInfo.desc
            }) 
        }
             
        
    })
    
    
})
  const [errors, setErrors] = useState({});
  

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validateInfo(values));
    callback()
    console.log(page);
  };

  /*useEffect(
    () => {
      if (Object.keys(errors).length === 0 && (page == 1)) {
        callback();
      }
    },
    [errors]
  );*/

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;