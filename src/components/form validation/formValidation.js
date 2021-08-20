const emailValidation = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}
const phoneValidation = (phone) => {
    let re = /([0-9])/;
    return re.test(phone);
}
const nameValidation = (name) => {
    return !(name === '' || null || undefined);
}
const dateValidation = (date) => {
    return !(date === '' || null || undefined);
}
const hourValidation = (hour) => {
    return !(hour === '' || null || undefined);
}
const typeValidation = (type) => {
    return !(type !== 'hair' || 'beard' || 'beard+hair');
}


export default emailValidation && phoneValidation && nameValidation && typeValidation && hourValidation && dateValidation;