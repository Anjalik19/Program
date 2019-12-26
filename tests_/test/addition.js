let chai=require('chai');
let expect=chai.expect;
let addition=require("../modules/addition")
describe('addition', ()=>{
    it('it should add 2 nos', (done)=>{
        addition.add(1,4).then(function(result){
            expect(result).to.equal(5);
            done();
        }).catch(function(err){
            done(err)
        })
    });
    it('it should reject', (done)=>{
        addition.add(1,4).catch(function(err){
            expect(err).to.equal("x should be greater then 00");
        })
        .then(function(){done()})
        .catch(function(err){
            done(err);
        })
    })
})