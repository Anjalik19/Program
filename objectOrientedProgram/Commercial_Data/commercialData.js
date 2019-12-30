const readline=require("readline-sync");
let buyShare=readline.question("enter share number:");
let sellSahre=readline.question("enter sell number");
class commercial{
    constructor(account_name,share_number,stock_price)
    {
    this.account_name=account_name;
    this.share_number=share_number;
    this.stock_price=stock_price;
    }
    buy(buyShare)
    {
return this.share_number+=this.buyShare;
    }
    sell()
    {
        return this.sellSahre=this.share_number-sellSahre;
    }
}
module.exports=commercial;