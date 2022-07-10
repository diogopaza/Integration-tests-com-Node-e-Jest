const supertest = require('supertest');
const { exportAllDeclaration } = require('@babel/types');
const app = require('./app')

test('GET /aplicarDesconto/', async ()=>{
    const response = await supertest(app)
        .get('/aplicarDesconto/10/5');

    expect(response.statusCode).toEqual(200);
    expect(response.body.valorDescontado).toEqual(5);


})