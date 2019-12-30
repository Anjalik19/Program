class inventoryManage{
    constructor(name,weight,price)
    {
        this.name=name;
        this.weight=weight;
        this.price=price;
    }
    sum()
    {
        return this.weight*this.price;
    }
}
class rice extends inventoryManage{
    constructor(name,weight,price)
    {
        super(name,weight,price)
    }
}
class pulses extends inventoryManage{
    constructor(name,weight,price)
    {
        super(name,weight,price)
    }
}
class wheats extends inventoryManage{
    constructor(name,weight,price)
    {
        super(name,weight,price)
    }
}
module.exports=rice,pulses,wheats;