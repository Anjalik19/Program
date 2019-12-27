let chai=require('chai');
let expect=chai.expect;
let factor=require("../modules/factor")
describe('factor', ()=>{
    it('it should give factor of number', (done)=>{
        factor.fact(5).then(function(result){
            expect(result).to.equal(120);
            done();
        }).catch(function(err){
            done(err)
        })
    });
    it('it should reject', (done)=>{
        factor.fact(5).catch(function(err){
            expect(err).to.equal("x should be greater then 00");
        })
        .then(function(){done()})
        .catch(function(err){
            done(err);
        })
    })
})