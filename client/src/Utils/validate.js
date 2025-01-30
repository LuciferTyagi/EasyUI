export const checkValidData = (name, email) => {
    const  isNameValid =  /^[a-zA-Z]+([-'\s][a-zA-Z]+)*$/.test(name);
    const  isEmailValid =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if(!isNameValid) return "Name is not valid"
    if(!isEmailValid) return "Email is not valid"
    return null;
};
