const envVariables = require("../fixtures/envVariable.json")


describe('User login', () => {
  it('passing valid email and password', () => {
    cy.request({
      method: 'POST',
      url: envVariables.baseURL+'/user/login',
      body: 
      {
        "email":"salman@grr.la",
        "password":"1234"
      }
    }).then((response)=>{
      expect(response.status).eq(200);
      cy.log(response.body);
      envVariables.token = response.body.token
      cy.writeFile('cypress/fixtures/envVariable.json',JSON.stringify(envVariables))
    })
  })
})