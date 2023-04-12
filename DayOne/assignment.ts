interface IAccount {
    Date_of_opening : string;
    addCustomer():void;
    removeCustomer(): void;
}

class Account {
    private _Acc_no:string;
    private _Balance:number;

    constructor (acc_no:string , balance:number) {
        this._Acc_no = acc_no;
        this._Balance = balance;
    }

    public debitAmount() {
        // logic 
    }

    public creditAmount () {
        // logic
    }

    get balance () {
        return this._Balance ;
    }
}

class Saveing_Account extends Account implements IAccount {
    
    Date_of_opening: string;
    constructor (acc_no:string , balance:number) {
        super(acc_no,balance);
    }

    addCustomer() {
        //logic 
    }
    removeCustomer() {
        //logic 
    }
    
    min_balance () {
        //logic 
    }
}

class Current_account extends Account implements IAccount {
    Date_of_opening: string;
    constructor (acc_no:string , balance:number) {
        super(acc_no,balance);
    }

    addCustomer() {
        //logic 
    }
    removeCustomer() {
        //logic 
    }  

    interest_rate () {
        //logic
    }
}