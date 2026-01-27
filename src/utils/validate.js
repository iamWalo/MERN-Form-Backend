 const validateForm = ({email, message}) =>{
    if (!email || !message) {
        return "Champs obligatoires manquants"
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
return "Adresse e-mail invalide"
    }
    if (message.length < 10){
        return "the message must be at least 10 characters long"

    }
    return null;
}
export default validateForm;