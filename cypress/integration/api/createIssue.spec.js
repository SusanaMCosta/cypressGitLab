/// <reference types= "Cypress"/>

const faker = require('faker')

describe('Create Issue', () => {
    it('successfully', () => {
        const issue = {
            title: `issue-${faker.random.uuid()}`,
            description: faker.random.words(3),
            project: {
                title: `issue-${faker.random.uuid()}`,
                description: faker.random.words(3),
            }
        }

        cy.api_createIssue(issue)
            .then(response => {
                expect(response.status).to.equal(201)
                expect(responde.body.title).to.equal(issue.title)
                expect(responde.body.description).to.equal(issue.description)
            })
    })
})