var Staff = /** @class */ (function () {
    function Staff(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    Staff.prototype.getter = function () {
        return "".concat(this.name, " ,").concat(this.email, ",").concat(this.age);
    };
    Staff.prototype.setName = function (name) {
        this.name = name;
    };
    Staff.prototype.setEmail = function (email) {
        this.email = email;
    };
    Staff.prototype.setAge = function (age) {
        this.age = age;
    };
    return Staff;
}());
var staff1 = new Staff("K", "123@gmail.com", 26);
staff1.setAge(22);
console.log(staff1);
