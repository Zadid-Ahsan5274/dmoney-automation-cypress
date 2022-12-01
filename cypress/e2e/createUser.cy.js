const envVariables = require("../fixtures/envVariable.json")
import {faker} from '@faker-js/faker'
// const utils = require('../fixtures/Utility')
import Utility from '../fixtures/Utility';

describe('User creation', () => {
    const utility = new Utility();
    var firstName = faker.name.firstName();
    var lastName = faker.name.lastName();
    var fullName = firstName + ' ' + lastName;
    var email = firstName+ utility.randomID(1000,9999)+'@customer.com';
    var phone_number = '01521'+utility.randomID(100000,999999);
    var nid = utility.randomID(1000000000,9999999999);
  it('Creating a new user', () => {
    cy.request({
      method: 'POST',
      url: envVariables.baseURL+'/user/create',
      headers: {
        'Authorization': envVariables.token,
        "X-AUTH-SECRET-KEY": envVariables.secretKey
      },
      body:{
        
            "name":fullName,
            "email":email,
            "password":"P@word123",
            "phone_number":phone_number,
            "nid":nid,
            "role":"Customer"
        
      }
    }).then((response)=>{
      expect(response.status).eq(201);
      cy.writeFile('cypress/fixtures/user.json',response.body);
    })
  })
})