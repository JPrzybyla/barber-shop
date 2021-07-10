const emailValidation = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default emailValidation;