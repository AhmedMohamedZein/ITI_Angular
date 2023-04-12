var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(acc_no, balance) {
        this._Acc_no = acc_no;
        this._Balance = balance;
    }
    Account.prototype.debitAmount = function () {
        // logic 
    };
    Account.prototype.creditAmount = function () {
        // logic
    };
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._Balance;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var Saveing_Account = /** @class */ (function (_super) {
    __extends(Saveing_Account, _super);
    function Saveing_Account(acc_no, balance) {
        return _super.call(this, acc_no, balance) || this;
    }
    Saveing_Account.prototype.addCustomer = function () {
        //logic 
    };
    Saveing_Account.prototype.removeCustomer = function () {
        //logic 
    };
    Saveing_Account.prototype.min_balance = function () {
        //logic 
    };
    return Saveing_Account;
}(Account));
var Current_account = /** @class */ (function (_super) {
    __extends(Current_account, _super);
    function Current_account(acc_no, balance) {
        return _super.call(this, acc_no, balance) || this;
    }
    Current_account.prototype.addCustomer = function () {
        //logic 
    };
    Current_account.prototype.removeCustomer = function () {
        //logic 
    };
    Current_account.prototype.interest_rate = function () {
        //logic
    };
    return Current_account;
}(Account));
