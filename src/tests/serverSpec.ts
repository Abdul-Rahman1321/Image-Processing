//importing supertest and my end-point file
import supertest from 'supertest';
import app from '../server';

//supertest suite for testing image processing api
describe('GET /api', function () {
  it('should respond with code status 200', function (done) {
    supertest(app)
      .get('/api/images')
      .query({
        width: 500,
        height: 500,
        imgName: 'duck',
      })
    //expect successful request
      .expect(200, (err, res) => {
        done();
      });
  });
});
