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
var MpJ = /** @class */ (function () {
    //static props can only be checked on class and not on instances
    //ex log(Mpj.maxAge)--->works fine
    //log(newtog.maxAge)---> throws an error: Property 'maxAge' does not exist on type 'MJ'.
    function MpJ(first, last) {
        this.first = first;
        this.last = last;
        this.unchangeble = first;
    }
    MpJ.prototype.changeble = function () {
        // this.unchangeble = 'foo'
        /*Cannot assign to 'unchangeble' because it is a read-only property. */
    };
    MpJ.prototype.getfull = function () {
        return this.first + ' ' + this.last;
    };
    //static properties
    MpJ.maxAge = 50;
    return MpJ;
}());
var newtog = new MJ('helo', 'work');
// console.log(newtog.maxAge);
//now as first and last properties are private they cant be accessed by the log, and doesnt show up in emmet.
console.log(newtg);
//INHERITENCE
//extends means as we suspected it to behave it extends over the said class, add new props to existing on top of existing class, without adding anyhting to it, and prior class wont have anything added to extended
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(MpJ));
var admin = new Admin('new', 'pog');
console.log(admin);
//GENERICS
