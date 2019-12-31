class Name{
    constructor()
    {
        this.array = [];
    }
    data()
    {
        this.array.push("preeti");
        this.array.push("rahul");
    }
    clone()
    {
        let clone = [];
        for(let i=0;i<this.array.length;i++){
            clone[i] = this.array[i];
        }
        return clone;
   