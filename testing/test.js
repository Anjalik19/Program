let name=require('./index');
let expect=require('chai').expect;
describe('Firsttest',function(){
    it('it should return my name',function()
    {
        let name=new Name();
        let result = name.sayname();
        expect(result).to.equal('Anjali');
    })
})