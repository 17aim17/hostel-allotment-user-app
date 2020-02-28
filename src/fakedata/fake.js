import * as faker from 'faker'

export default {
    full_name: faker.name.firstName() + " " + faker.name.firstName(),
    email: faker.internet.email(),
    roll_number: faker.random.number(),
    gender: 'male',
    course: faker.name.jobTitle(),
    branch: '',
    year: '',
    address: faker.address.streetAddress() + ' ' + faker.address.city() + ' ' + faker.address.state(),
    primary_contact: faker.phone.phoneNumber(),
    father_name: faker.name.firstName() + " " + faker.name.firstName(),
    mother_name: faker.name.firstName() + " " + faker.name.firstName(),
    parent_contact: faker.phone.phoneNumber(),
    aadhaar_number: faker.random.uuid(),
    account_number: faker.finance.account(),
    password: 'hello123',
    confirm_password: 'hello123'
}