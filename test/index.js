/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';

process.env.NODE_ENV = 'test';

chai.should();
chai.use(chaiHttp);

describe('Sentences', () => {
    describe('/GET Sentences', () => {
        it('It should GET the first 10 sentences', (done) => {
            chai.request(server)
                .get('/api/sentences')
                .query({
                    offset: 0,
                    limit: 10,
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(10);
                    done();
                });
        });
    });

    describe('/GET Sentence', () => {
        it('It should GET the sentence with if 0loB7EaX2OB0dAyrRU35', (done) => {
            chai.request(server)
                .get('/api/sentences/0loB7EaX2OB0dAyrRU35')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.have.property('text');
                    res.body.data.should.have.property('cats');
                    done();
                });
        });
    });
});
