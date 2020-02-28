import validator from 'validator'

let initialState = {
    full_name: '',
    email: '',
    roll_number: '',
    gender: '',
    course: '',
    branch: '',
    year: '',
    address: '',
    primary_contact: '',
    father_name: '',
    mother_name: '',
    parent_contact: '',
    aadhaar_number: '',
    account_number: '',
    password: '',
    confirm_password: ''
}

const formValidator = (data) => {
    let isError = false
    const errors = {}

    for (let k in data) {
        data = { ...data, [k]: data[k].toString().trim() }
    }


    const {
        full_name,
        email,
        roll_number,
        gender,
        course,
        branch,
        year,
        address,
        primary_contact,
        father_name,
        mother_name,
        parent_contact,
        aadhaar_number,
        account_number,
        password,
        confirm_password
    } = data



    if (full_name.length === 0) {
        errors.full_name = 'Required'
        isError = true
    }
    if (!validator.isEmail(email)) {
        errors.email = 'Invalid email'
        isError = true
    }
    if (roll_number.length === 0) {
        errors.roll_number = 'Required'
        isError = true
    }
    if (!validator.isNumeric(roll_number)) {
        errors.roll_number = 'Digits Only'
        isError = true
    }
    if (gender.length === 0) {
        errors.gender = 'Required'
        isError = true
    }
    if (branch.length === 0) {
        errors.branch = 'Required'
        isError = true
    }
    if (year.length === 0) {
        errors.year = 'Required'
        isError = true
    }
    if (address.length === 0) {
        errors.address = 'Required'
        isError = true
    }
    if (primary_contact.length == 0) {
        errors.primary_contact = 'Required'
        isError = true
    }
    // !validator.isLength(primary_contact, { min: 10, max: 10 })
    if (!validator.isNumeric(primary_contact)) {
        errors.primary_contact = 'digits only'
        isError = true
    }
    if (father_name.length === 0) {
        errors.father_name = 'Required'
        isError = true
    }
    if (mother_name.length === 0) {
        errors.mother_name = 'Required'
        isError = true
    }
    if (!validator.isNumeric(parent_contact)) {
        errors.parent_contact = 'digits only'
        isError = true
    }
    if (!validator.isNumeric(aadhaar_number) && !validator.isLength(aadhaar_number, { min: 12, max: 12 })) {
        errors.aadhaar_number = '12 digits only'
        isError = true
    }
    if (account_number.length === 0) {
        errors.account_number = 'Required'
        isError = true
    }
    if (password.length === 0) {
        errors.password = 'Required'
        isError = true
    }
    if (password.length < 6) {
        errors.password = 'Minimum length must be 6'
        isError = true
    }
    if (password !== confirm_password) {
        errors.password = 'Passwords does not match'
        errors.confirm_password = 'Passwords does not match'
        isError = true
    }

    if (isError === false) {
        delete data["confirm_password"]
        return { isError, data: data }
    }

    return { isError, errors: errors }

}

export default formValidator