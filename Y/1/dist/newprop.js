var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Generics
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
/*generics are basically data types declaration for functions that tells Ts about the type of properties about to be recieved by the functions,ok? */
var usert = {
    name: 'jach'
};
var res = addId(usert);
console.log(res);
/*A new example to make it even clearer with the help of interface */
var taddId = function (obj) {
    var ar = 'hello';
    return __assign(__assign({}, obj), { ar: ar });
};
var rest = taddId(usert);
//Now here we are providing a interface to the function which will only take an obj and obj data type, not too clear without that emmet magic
//Another Example to further extend it
var RaddId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var newUsert /*reason for line 56 */ = {
    name: 'woohoo',
    //without anything below
    /* Generic type 'newFace<T>' requires 1 type argument(s). */
    data: {
        meta: 'foo'
    }
};
//more things will be cleared by this example
var user2 /*here we are using the same interface but with different data type in data */ = {
    name: 'hello',
    data: ['my', 'name']
};
var newtss = {
    name: 'youolo',
    data: {
        meta: 'bruh'
    },
    meta: 'newer'
};
