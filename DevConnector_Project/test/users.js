/* eslint-env mocha */

process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const CONFIG = require('../config/keys');

chai.should();
chai.use(chaiHttp);

describe('users', () => {
  describe('/users/current with unauthorized access', () => {
    it('it should return unauthorized', done => {
      chai.request(app)
        .get('/users/current')
        .end((err, res) => {
          res.should.have.status(401);
          done();
        });
    });
  });

  describe('/users/current with authorized access', () => {
    it('it should return current user', done => {
      chai.request(app)
        .get('/users/current')
        .set('token', CONFIG.TOKEN_TEST)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });
  });
});