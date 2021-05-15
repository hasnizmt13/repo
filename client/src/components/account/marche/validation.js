export default function validateInfo(values) {
    let errors = {};
    
    if (!values.type) {
      errors.type = 'Type requit';
    } 
    if (!values.objet) {
      errors.objet = 'objet requit';
    } 
    if (!values.fournisseur) {
        errors.fournisseur = 'respo requit';
    } 
    if (!values.respo) {
        errors.respo = 'respo requit';
    } 
    if (!values.num) {
        errors.num = 'numero requit';
    } 
    
    return errors;
  }