const envVariables = require("../fixtures/envVariable.json")


describe('Getting User List', () => {
  it('User List', () => {
    cy.request({
      method: 'GET',
      url: envVariables.baseURL+'/user/list',
      headers: {
        'Authorization': envVariables.token
      }
    }).then((response)=>{
      expect(response.status).eq(200);
      cy.writeFile('cypress/fixtures/user.json',response.body);
    })
  })
})