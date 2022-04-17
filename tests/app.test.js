
// const sum = require('../app');

// test('adds 10 + 2 to equal 12', () => {
//   expect(sum(10, 2)).toBe(12);
// });


const app = require("../app")
const request = require ("supertest");
describe('Testing Get Api',function(){


    // This is used for asynchronous testing 
    it("It should return the response 200", (done) => {
      request(app).
          get("/api")
          
          .expect(200) //jest 
         
          .end(function (err, res) {
              if (err) return done(err);
              return done();
          });
  
  });
})




describe('Testing Post Api',function(){


    // This is used for asynchronous testing 
    it("It should return the response 200", (done) => {
      request(app).
          post("/api")
          .send({name: 'john',age:20})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200) //jest 
          .then(response => {
            expect(response.body.message).toBe('Success');
            expect(typeof response.body.data).toBe('object');
            expect(response.body.data.length).toBeGreaterThan(0);
            done();
        }).catch(err => done(err))
  
  });
  
  
  })