import { faker } from '@faker-js/faker'

export const createUser = () => ({
    nome: faker.person.fullName(),
    email: faker.internet.email(),
    password: 'Mouts@123',
    administrador: 'true'
})