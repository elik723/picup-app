"use strict";
exports.__esModule = true;
var cart_1 = require("./cart");
var User = /** @class */ (function () {
    function User(id, name, email, password, cell_phone_number, address, instructions, new_user, past_orders, pending_orders) {
        this.cart = null;
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.cell_phone_number = cell_phone_number;
        this.address = address;
        this.instructions = instructions;
        this.new_user = new_user;
        this.past_orders = past_orders;
        this.pending_orders = pending_orders;
    }
    User.prototype.create_cart = function () {
        if (this.cart == null) {
            this.cart = new cart_1.Cart();
        }
    };
    User.prototype.print = function () {
        console.log(this.id);
        console.log(this.address);
        console.log(this.new_user);
        console.log(this.pending_orders);
    };
    return User;
}());
exports.User = User;
//Yo
