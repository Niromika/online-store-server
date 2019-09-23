const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../src/server');
const category = require('../src/models/category');


chai.use(chaiHttp);

describe('categories', () => {

    beforeEach((done) => {
        category.deleteMany({})
            .then(() => done());
    });

    it('get all', (done) => {
        chai.request(app)
            .get('/api/category')
            .then(response => {
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.equal(0);
                done();
            })
            .catch(err => done());
    });

    it('create', (done) => {
        const categoryName = 'dry food';
        chai.request(app)
           .put('/api/category')
           .send({name: categoryName})
           .then(res1 => {
               expect(res1.status).to.equal(201);
               expect(res1.body.name).to.equal(categoryName);
               chai.request(app)
                    .get('/api/category')
                    .then(res2 => {
                        expect(res2.body).to.be.an('array');
                        expect(res2.body.length).to.equal(1);
                        expect(res2.body[0].name).to.equal(categoryName);
                        done();
                    });
        });

    });
});

