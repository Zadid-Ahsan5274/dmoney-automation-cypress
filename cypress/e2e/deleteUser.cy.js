const envVariables = require("../fixtures/envVariable.json")
const user = require('../fixtures/user.json')

describe('Deleting user', () => {
  it('Delete the newly created user by id', () => {
    cy.request({
      method: 'DELETE',
      url: envVariables.baseURL+'/user/delete/'+user.user.id,
      headers: {
        'Authorization': envVariables.token,
        "X-AUTH-SECRET-KEY": envVariables.secretKey
      }
    }).then((response)=>{
      expect(response.status).eq(200);
      cy.writeFile('cypress/fixtures/userList.json',response.body);
    })
  })
})