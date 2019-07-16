import { Cart } from './cart';

export class User {

    private id: number;
    private name: string;
    private email: string;
    private password: string;
    private cell_phone_number: string;
    private address: string;
    private instructions; string;
    private new_user: boolean;
    private past_orders: number[];
    private pending_orders: number[];

    private cart: Cart = null;

    constructor(id, name, email, password,
        cell_phone_number, address, instructions,
        new_user, past_orders, pending_orders) 
    {
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

    create_cart() {
        if (this.cart == null) {
            this.cart = new Cart();
        }
    }

    print() {
        console.log(this.id);
        console.log(this.address);
        console.log(this.new_user);
        console.log(this.pending_orders);
    }

}
