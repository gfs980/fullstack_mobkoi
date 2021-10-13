const chai = require('chai');
chai.use(require('chai-http'));
chai.use(require('chai-json'));
const app = require('./app');
const should = chai.should();
const expect = chai.expect;

describe('GET get-campaigns', () => {
  it('should return campaigns', (done) => {
    chai
      .request(app)
      .get('/api/get-campaigns')
      .end((err, res) => {
        res.should.have.status(200);
        expect(res.body).to.be.an('array').with.length.greaterThanOrEqual(0);
        done();
      });
  });
});
