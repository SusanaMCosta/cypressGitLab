/// <reference types= "Cypress"/>

const faker = require('faker')

describe('Create project', () => {

    it('successfully', () => {
        const project = {
            name: `project-${faker.random.uuid()}`,
            description: faker.random.word(5)
        }

        cy.api_createProject(project)
            .then(responde => {
                expect(response.status).to.equal(201)
                expect(responde.body.name).to.equal(project.name)
                expect(responde.body.description).to.equal(project.description)
            })
    })
})